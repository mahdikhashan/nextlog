import * as fs from "fs";
import * as path from "path";

import { default as parseMarkdown } from "@/lib/parse-markdown";
import { default as processMarkdown } from "@/lib/process-markdown";

interface GetPostDataArguments {
  id: string;
}

export async function getPostData(args: GetPostDataArguments) {
  const { id } = args;

  const fullPath = path.join(process.cwd(), "content/posts", `${id}.md`);
  const postFile = fs.readFileSync(fullPath, "utf8");

  const post = parseMarkdown({ md: postFile });

  const processedPost = await processMarkdown(post);

  return {
    id,
    content: processedPost,
    ...post.data,
  };
}
