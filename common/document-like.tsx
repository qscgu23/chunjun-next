// import GenerateSider from "@/common/generate-sider";
import { ReactNode } from 'react'
import { NavLink, useMantineColorScheme } from '@mantine/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import FileTree from '@/types/FileTree'

type Props = {
  children: ReactNode
  target: string
  tree: FileTree[]
}

const DocumentLike = (props: Props) => {
  const { children, target, tree } = props

  const { colorScheme } = useMantineColorScheme()

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
        {tree.map((l) => generateNavLink(l, l.label))}
      </aside>
      <section className="grid md:grid-cols-4 grid-cols-1 p-4">
        {children}
      </section>
    </main>
  )
}

export default DocumentLike
