import fs from "fs";
import path from "path";

import type { NextApiRequest, NextApiResponse } from "next";

import parseMarkdown from "@/lib/parse-markdown";
import processMarkdown from "@/lib/process-markdown";

type Response = {
  posts: unknown[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const contentDir = path.join(process.cwd(), "content/posts");
    const allFilesInPath = fs.readdirSync(contentDir);
    const markdownFiles = allFilesInPath.filter((file) => file.match(/.*\.(md?)/gi));
    
    const posts = await Promise.all(markdownFiles.map(async (postFile) => {

      const fullPath = path.join(process.cwd(), "content/posts", `${postFile}`);
      const postFileMarkdown = fs.readFileSync(fullPath, "utf8");

      const post = parseMarkdown({ md: postFileMarkdown });
      const processedPost = await processMarkdown(post);

      return { ...post, content: processedPost };
    }));

    res.status(200).json({ posts })
  } catch (err) {
    res.status(500).json({ posts: [], error: "failed" })
  }
}
