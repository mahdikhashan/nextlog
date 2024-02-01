import * as fs from "fs";
import * as path from "path";

import { remark } from "remark";
import html from "remark-html";

import parseMarkdown from "./parse-md-post";

export async function getPostData(id: string) {
  const fullPath = path.join(process.cwd(), "content/posts", `${id}.md`);
  const postFile = fs.readFileSync(fullPath, "utf8");

  const post = parseMarkdown(postFile);

  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const contentHTML = processedContent.toString();

  return {
    id,
    contentHTML,
    ...post.data,
  };
}
