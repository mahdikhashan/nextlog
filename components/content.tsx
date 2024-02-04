import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ContentProps = {
  source: any;
};

export function ContentMarkdown(props: ContentProps) {
  const { source } = props;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
      {source}
    </ReactMarkdown>
  );
}

export function ContentHTML(props: ContentProps) {
  const { source } = props;
  return (
    <div className="post-content-html prose prose-slate mt-8" dangerouslySetInnerHTML={{ __html: source }} />
  )
}
