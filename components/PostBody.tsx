import { TypographyStylesProvider } from '@mantine/core'
type Props = {
  content: string
}

const PostBody = (props: Props) => {
  const { content } = props

  return (
    <TypographyStylesProvider className="md:col-span-3">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </TypographyStylesProvider>
  )
}

export default PostBody
