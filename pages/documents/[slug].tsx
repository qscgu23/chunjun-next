import PostBody from '@/components/PostBody'
import { markdownToHtml } from '@/utils/markdown2html'
import { getAllPosts, getPostBySlug, getAllPaths } from '@/api/api'
import { Skeleton } from '@mantine/core'
import { useRouter } from 'next/router'
import DocumentLike from '@/common/document-like'
import FileTree from '@/types/FileTree'

const SEP = process.env.sep as string

const Post = ({
  content,
  allPaths
}: {
  content: string
  tree: FileTree[]
  allPaths: string[]
}) => {
  const router = useRouter()
  return (
    <DocumentLike allPaths={allPaths} target="/documents">
      {router.isFallback ? (
        <Skeleton visible className="md:col-span-4" />
      ) : (
        <PostBody content={content} />
      )}
    </DocumentLike>
  )
}

export default Post

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug.split('/').join(SEP)
        }
      }
    }),
    fallback: false
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['slug', 'content'])
  const content = await markdownToHtml(post.content || '')
  const allPaths = getAllPaths()

  return {
    props: {
      content,
      allPaths
    }
  }
}
