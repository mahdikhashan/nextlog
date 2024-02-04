import Link from "next/link";

import { ContentHTML } from "./content";
import LinkIcon from "@/components/icons/link";

type PostProps = {
  title: string;
  datetime: string;
  contentHTML: unknown;
  url: string;
};

export default function Post(props: PostProps) {
  const { title, datetime, contentHTML, url } = props;

  return (
    <article className="">
      <div className="flex items-center gap-2 text-lg">
        <h1 className="text-xl font-main sm:text-3xl font-bold text-primary">
          {title}
        </h1>
        <Link href={`/posts/${url}`}>
          <LinkIcon />
        </Link>
      </div>
      <span className="block text-black text-sm">{datetime}</span>
      <ContentHTML source={contentHTML} />
    </article>
  );
}
