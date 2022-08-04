import { Drawer, ActionIcon, Text } from "@mantine/core";
import Link from "next/link";
import { Download, Signature, Code, Database } from "tabler-icons-react";
import Image from "next/image";
import logo from "@/public/logo-dark.svg";

type Props = {
  opened: boolean;
  changeOpened: () => void;
};

const AppNavbar = (props: Props) => {
  const { opened, changeOpened } = props;
  return (
    <Drawer overlayColor={"transparent"} padding="md" opened={opened} onClose={changeOpened}>
      <div className=" flex items-center mb-4">
        <Image src={logo} height={36} width={36} alt="logo of chunjun"></Image>
        <Text className="text-xl font-bold capitalize flex items-center font-mono">Chunjun</Text>
      </div>
      <div className="h-[36px] flex items-center p-md cursor-pointer">
        <ActionIcon variant="light" color="violet" className="mx-2">
          <Signature />
        </ActionIcon>
        <Link href={"/documents"}>
          <a className="font-mono">文档</a>
        </Link>
      </div>
      <div className="h-[36px] flex items-center p-md cursor-pointer">
        <ActionIcon variant="light" color="blue" className="mx-2">
          <Database />
        </ActionIcon>
        <Link href={"/documents/sql"}>
          <a className="font-mono">SQL</a>
        </Link>
      </div>
      <div className="h-[36px] flex items-center p-md cursor-pointer">
        <ActionIcon color="orange" className="mx-2">
          <Code />
        </ActionIcon>
        <Link href={"/documents/JSON"}>
          <a className="font-mono">JSON</a>
        </Link>
      </div>
      <div className="h-[36px] flex items-center p-md cursor-pointer">
        <ActionIcon color="green" className="mx-2">
          <Download />
        </ActionIcon>
        <a href="https://github.com/DTStack/chunjun/releases" target="blank" className="font-mono">
          下载
        </a>
      </div>
    </Drawer>
  );
};

export default AppNavbar;
