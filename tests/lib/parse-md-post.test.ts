import * as fs from "fs";
import * as path from "path";

import { default as parseMarkdown } from "@/lib/parse-markdown";

test("parses inline markdown correctly", function () {
  const md = "---\nfoo: bar\n---\nThis is content";
  const parsed_markdown = parseMarkdown({ md });
  expect(parsed_markdown).toStrictEqual({
    content: "This is content",
    data: {
      foo: "bar",
    },
    excerpt: "",
    isEmpty: false,
  });
});

test("should have correct properties", function () {
  //TODO test md properties
  expect(true).toBe(true);
})

describe("parses markdown files correctly", function () {
  const fixturesPath = path.join(__dirname, "../fixtures");
  const markdownFiles = fs
    .readdirSync(fixturesPath)
    .filter((file) => file.endsWith(".md"));

  markdownFiles.forEach((markdownFile) => {
    test(`${markdownFile} should match snapshot correctly`, () => {
      const markdownContent = fs.readFileSync(
        path.join(fixturesPath, markdownFile),
        "utf-8"
      );
      const parsedResult = parseMarkdown({ md: markdownContent });
      expect(parsedResult).toMatchSnapshot();
    });

    test(`${markdownFile} should have valid data properties`, () => {})
  });
});
