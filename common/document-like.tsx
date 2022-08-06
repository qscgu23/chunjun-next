// import GenerateSider from "@/common/generate-sider";
import { ReactNode, useEffect, useState } from 'react'
import { NavLink, useMantineColorScheme } from '@mantine/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import FileTree from '@/types/FileTree'

type Props = {
  children: ReactNode
  target: string
  allPaths: string[]
}

const DocumentLike = (props: Props) => {
  const { children, target, allPaths } = props

  const [treeNode, setTreeNode] = useState<FileTree[]>([])
  const { colorScheme } = useMantineColorScheme()

  useEffect(() => {
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

    setTreeNode(tree)
  }, [])

  const router = useRouter()

  const generateNavLink = (t: FileTree, href: string) => {
    if (t.category === 'file') {
      return (
        <Link key={t.label} passHref href={`${target}/${href}`}>
          <NavLink
            component="a"
            color="indigo"
            variant="light"
            label={t.label}
            classNames={{
              body: 'py-2'
            }}
            active={router.asPath.includes(encodeURI(t.label))}
          />
        </Link>
      )
    } else {
      return (
        <NavLink
          key={t.label}
          label={t.label}
          childrenOffset={15}
          variant="filled"
          classNames={{
            body: 'py-2'
          }}
        >
          {t.children?.map((p) => generateNavLink(p, `${href}_${p.label}`))}
        </NavLink>
      )
    }
  }

  return (
    <main className="md:pl-[280px] relative">
      <aside
        className={`fixed scrollbar shadow-xl h-[calc(100vh-64px)] overflow-y-auto left-0 top-[64px] md:w-[280px] hidden md:inline-block ${
          colorScheme === 'light' ? 'bg-white' : 'bg-[#333]'
        }`}
      >
        {treeNode.map((l) => generateNavLink(l, l.label))}
      </aside>
      <section className="grid md:grid-cols-4 grid-cols-1 p-4">
        {children}
      </section>
    </main>
  )
}

export default DocumentLike
