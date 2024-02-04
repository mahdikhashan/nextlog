import { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type processMarkdownArg = GrayMatterFile<string>;

async function processMarkdown(markdown: processMarkdownArg) {
  const processedContent = await remark()
    .use(html)
    .process(markdown.content);
  const contentHTML = processedContent.toString();

  return contentHTML
}

export default processMarkdown;
