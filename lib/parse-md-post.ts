import matter from "gray-matter";

function parseMarkdown(md: string) {
  return matter(md);
}

export default parseMarkdown;
