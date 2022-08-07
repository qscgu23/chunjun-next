import { Header, ActionIcon, ColorScheme, Text, Menu, Burger } from "@mantine/core";
import { Sun, Moon, Language } from "tabler-icons-react";
import Image from "next/image";
import logo from "@/public/logo-dark.svg";
import { headerLinks } from "@/config/headerLinks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { primaryColor } from "@/config/color";

type Props = {
  theme: ColorScheme;
  changeTheme: () => void;
  opened: boolean;
  changeOpened: () => void;
};

const AppHeader = (props: Props) => {
  const { theme, changeTheme, opened, changeOpened } = props;
  const router = useRouter();
  const [activeKey, setActiveKey] = useState('home')

  return (
    <Header height={64} className="flex items-center justify-between sticky">
      <Burger opened={opened} onClick={changeOpened} className="md:hidden inline-block" />
      <div className="h-full flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <div className="flex px-[30px]">
          <Image src={logo} height={36} width={36} alt="logo of chunjun"></Image>
          <Text className="text-xl font-bold capitalize flex items-center ">Chunjun</Text>
        </div>

        <div className="h-full flex">
          {
            headerLinks.map(item => {
              return <div style={{
                borderColor: activeKey === item.key ? primaryColor.toString() : '',
                borderBottomWidth: activeKey === item.key ? 2 : 0
              }} className={`w-[100px] flex justify-center items-center h-full    text-gray-400 cursor-pointer`}>
                <Link href={item.path as string}>{item.name}</Link>
              </div>
            })
          }
        </div>
      </div>

      <div className="h-full flex items-center space-x-4 pr-[9px]">

        <Menu shadow="md" width={100} trigger="hover" openDelay={100} closeDelay={200} position="bottom">
          <Menu.Target>
            <ActionIcon variant="transparent">
              <Language />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>简体中文</Menu.Item>
            <Menu.Item>English</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <ActionIcon variant="outline" color={theme === "dark" ? "yellow" : "blue"} onClick={changeTheme}>
          {theme === "light" ? <Sun /> : <Moon />}
        </ActionIcon>
      </div>
    </Header>
  );
};

export default AppHeader;
