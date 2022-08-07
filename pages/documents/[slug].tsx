import PostBody from '@/components/PostBody'
import { markdownToHtml } from '@/utils/markdown2html'
import { getAllPosts, getPostBySlug, getAllPaths } from '@/api/api'
import { Skeleton } from '@mantine/core'
import { useRouter } from 'next/router'
import DocumentLike from '@/common/document-like'
import FileTree from '@/types/FileTree'

const SEP = process.env.sep as string

const Post = ({ content, tree }: { content: string; tree: FileTree[] }) => {
  const router = useRouter()
  return (
    <DocumentLike tree={tree} target="/documents">
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

  const map = new Map<string, boolean>()

  const tree: FileTree[] = []

  const generate = (path: string, obj: FileTree[]): FileTree[] => {
    if (!path.includes('/')) {
      obj.push({
        label: path.split('.')[0],
        path: path.split('.')[0],
        category: 'file'
      })
    } else {
      const t = path.split('/')[0]
      const f = obj.find((o) => o.label === t)
      const current = path.split('/').slice(1).join('/')
      if (!f) {
        obj.push({
          label: path.split('/')[0],
          category: 'dir',
          children: []
        })
        return generate(
          current,
          obj.find((o) => o.label === t)?.children as FileTree[]
        )
      } else {
        return generate(current, f?.children as FileTree[])
      }
    }
    return obj
  }

  for (const link of allPaths) {
    if (!link.includes('/')) {
      tree.push({
        label: link.split('.')[0],
        category: 'file'
      })
      continue
    }
    map.set(link.split('/')[0], true)
  }

  for (const m of map) {
    const root: FileTree = {
      label: m[0],
      children: [],
      category: 'dir'
    }
    for (const link of allPaths) {
      if (link.split('/')[0] === root.label) {
        generate(
          link.split('/').slice(1).join('/'),
          root.children as FileTree[]
        )
      }
    }
    tree.push(root)
  }
  return {
    props: {
      content,
      tree
    }
  }
}
