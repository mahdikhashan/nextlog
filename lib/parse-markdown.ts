import matter from "gray-matter";

type ParseMarkdownArgument = {
  md: string;
}

function parseMarkdown({ md }: ParseMarkdownArgument) {
  return matter(md);
}

export default parseMarkdown;
