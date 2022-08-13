import { TypographyStylesProvider } from '@mantine/core'
import 'highlight.js/styles/atom-one-dark.css'

type Props = {
  content: string
}

const PostBody = (props: Props) => {
  const { content } = props

  return (
    <TypographyStylesProvider className="md:col-span-3 p-4 overflow-hidden">
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </TypographyStylesProvider>
  )
}

export default PostBody
