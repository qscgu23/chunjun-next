import { marked } from "marked";

export default async function markdownToHtml(markdown: string) {
  return marked.parse(markdown);
}
