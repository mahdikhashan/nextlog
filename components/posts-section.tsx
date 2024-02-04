import useSWR from "swr";

import Post from "./post";
import { fetcher } from "@/lib/fetcher";

export function PostsSection() {
  const { data, isLoading } = useSWR("/api/posts", fetcher);

  return (
    <section className="relative mx-auto max-w-5xl py-20 px-4 sm:px-6 lg:px-8">
      {isLoading && "Loading..."}
      {data &&
        data.posts.map((post: any) => (
          <Post
            title={post.data.title}
            datetime={post.data.date}
            contentHTML={post.content}
            url={post.data.url}
          />
        ))}
    </section>
  );
}
