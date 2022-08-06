import { marked } from 'marked'

export const markdownToHtml = async (markdown: string) => {
  return marked.parse(markdown)
}
