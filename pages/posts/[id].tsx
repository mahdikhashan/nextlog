import { getPostData } from "@/lib/get-post-data";
import { GetStaticPropsContext } from "next";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

type PostParams = {
  id: string,
}

export async function getStaticProps(context: GetStaticPropsContext<PostParams>) {
  const { params } = context;

  if (!params) {
    return {
      notFound: true
    }
  }

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

type PostProps = {
  postData: {
    title: string;
    id: string;
    date: string;
    contentHTML: string;
  };
};

export default function Post({ postData }: PostProps) {
  return (
    <div>
      {postData?.title}
      <br />
      {postData?.id}
      <br />
      {postData?.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData?.contentHTML }} />
    </div>
  );
}
