// import GenerateSider from "@/common/generate-sider";
import { ReactNode, useState } from "react";
import { Burger, Drawer, NavLink, Skeleton } from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";
import FileTree from "@/types/FileTree";

type Props = {
  tree: FileTree[];
  children: ReactNode;
  target: string;
};

const DocumentLike = (props: Props) => {
  const { children, target, tree } = props;

  const [aside, setAside] = useState<boolean>(false);

  const router = useRouter();

  const generateNavLink = (t: FileTree, href: string) => {
    if (t.category === "file") {
      return (
        <Link key={t.label} passHref href={`${target}/${href}`}>
          <NavLink component="a" color="blue" label={t.label} active={router.asPath.includes(encodeURI(t.label))} />
        </Link>
      );
    } else {
      return (
        <NavLink key={t.label} label={t.label} childrenOffset={14}>
          {t.children?.map((p) => generateNavLink(p, `${href}_${p.label}`))}
        </NavLink>
      );
    }
  };

  return (
    <main className="md:pl-[240px] relative">
      <Burger opened={aside} onClick={() => setAside((o) => !o)} className="fixed top-[65px] right-[20px] md:hidden block" />
      <aside className="fixed left-0 top-[64px] md:w-[240px] hidden md:inline-block">{tree.map((l) => generateNavLink(l, l.label))}</aside>
      <section className="grid md:grid-cols-4 grid-cols-1 p-4">{children}</section>
      <Drawer opened={aside} onClose={() => setAside(false)}>
        123
      </Drawer>
    </main>
  );
};

export default DocumentLike;
