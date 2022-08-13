import PostBody from '@/components/PostBody'
import { markdownToHtml } from '@/utils/markdown2html'
import { getAllPosts, getPostBySlug, getAllPaths } from '@/api/post-api'
import { Skeleton } from '@mantine/core'
import { useRouter } from 'next/router'
import DocumentLike from '@/common/document-like'
import FileTree from '@/types/FileTree'
import Toc from '@/types/Toc'
import Params from '@/types/Params'
import { generateTree } from '@/utils/generateTree'

const SEP = process.env.sep as string

const Post = ({
  content,
  tree,
  toc
}: {
  content: string
  tree: FileTree[]
  toc: Toc[]
}) => {
  const router = useRouter()
  return (
    <>
      <DocumentLike tree={tree} target="/documents" toc={toc}>
        {router.isFallback ? (
          <Skeleton visible className="md:col-span-4" />
        ) : (
          <PostBody content={content} />
        )}
      </DocumentLike>
    </>
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

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['slug', 'content'])
  const { content, toc } = await markdownToHtml(post.content || '')

  const allPaths = getAllPaths()
  const tree = generateTree(allPaths)

  return {
    props: {
      content,
      tree,
      toc
    }
  }
}
