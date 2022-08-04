import { Header, ActionIcon, ColorScheme, Text, Menu, Burger } from "@mantine/core";
import { Sun, Moon, Language } from "tabler-icons-react";
import Image from "next/image";
import logo from "@/public/logo-dark.svg";
import { headerLinks } from "@/config/headerLinks";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  theme: ColorScheme;
  changeTheme: () => void;
  opened: boolean;
  changeOpened: () => void;
};

const AppHeader = (props: Props) => {
  const { theme, changeTheme, opened, changeOpened } = props;
  const router = useRouter();

  return (
    <Header p={"sm"} height={64} className="flex items-center justify-between sticky">
      <Burger opened={opened} onClick={changeOpened} className="md:hidden inline-block" />
      <div className="h-full flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <Image src={logo} height={36} width={36} alt="logo of chunjun"></Image>
        <Text className="text-xl font-bold capitalize flex items-center font-mono">Chunjun</Text>
      </div>
      <div className="h-full flex items-center space-x-4">
        {headerLinks.map((l) => {
          if (!Array.isArray(l.path) && l.path.includes("http")) {
            return (
              <a href={l.path} target="blank" key={l.key} className="capitalize hidden md:inline-block">
                {l.name}
              </a>
            );
          } else if (Array.isArray(l.path)) {
            return (
              <Menu shadow="md" width={100} position="bottom" key={l.key} trigger="hover">
                <Menu.Target>
                  <Text className="cursor-pointer hidden md:inline-block">{l.name}</Text>
                </Menu.Target>
                <Menu.Dropdown>
                  {l.path.map((p) => (
                    <Menu.Item key={p.key}>
                      <Link href={p.path as string}>
                        <a className="text-sm text-center uppercase w-full">{p.name}案例</a>
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            );
          } else {
            return (
              <Link href={l.path} key={l.key}>
                <a className="capitalize hidden md:inline-block">{l.name}</a>
              </Link>
            );
          }
        })}
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
