import { GetStaticPropsContext } from "next";

import Link from "next/link";

import { getPostData } from "@/lib/get-post-data";

import { ContentHTML } from "@/components/content";
import { default as MoveLeftIcon } from "@/components/icons/move-left";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'announcing-nextlog' } }],
    fallback: 'blocking',
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

  let postData;
  try {
    postData = await getPostData({ id: params.id });
  } catch (e) {}

  return {
    props: {
      postData: postData?.content,
    },
    revalidate: 1
  };
}

type PostProps = {
  postData: string | undefined;
};

export default function PostPage({ postData }: PostProps) {
  return (
    <section
      className="post mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-16"
    >
      <Link
        href="/"
        className="text-primary text-lg inline-flex items-center gap-2 cursor-pointer hover:underline"
      >
        <span className="text-primary text-2xl cursor-pointer">
          <MoveLeftIcon />
        </span>
        <span className="ml-2">Go back</span>
      </Link>
    <ContentHTML source={postData} />
  </section>
  );
}
