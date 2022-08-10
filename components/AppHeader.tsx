import {
  Header,
  ActionIcon,
  ColorScheme,
  Text,
  Menu,
  Burger
} from '@mantine/core'
import { Sun, Moon, Language } from 'tabler-icons-react'
import Image from 'next/image'
import logo from '@/public/logo-dark.svg'
import { headerLink, headerLinks } from '@/config/headerLinks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { primaryColor } from '@/config/color'

type Props = {
  theme: ColorScheme
  changeTheme: () => void
  opened: boolean
  changeOpened: () => void
}

const AppHeader = (props: Props) => {
  const { theme, changeTheme, opened, changeOpened } = props
  const router = useRouter()
  const [activeKey, setActiveKey] = useState('home')
  type menutype = {
    item: headerLink
  }
  useEffect(() => {
    const { key } = router.query
    setActiveKey(key as string)
  }, [router.query.key])
  const MenuItem: FC<menutype> = ({ item }) => {
    return (
      <Link
        href={
          {
            pathname: item.path as string,
            query: { key: item.key }
          }
        }

      >
        <div style={{
          borderColor: activeKey === item.key ? primaryColor.toString() : '',
          borderBottomWidth: activeKey === item.key ? 2 : 0
        }}
          className={`w-[100px] flex justify-center items-center h-full text-gray-400 cursor-pointer hover:text-black hover:bg-gray-100/50`}>
          {item.name}
        </div>

      </Link>
    )
  }
  const ComplexMenuItem: FC<menutype> = ({ item }) => {
    const pathlist = item.path as headerLink[]

    return (
      <div className="flex border-l border-r">
        <div className="flex items-center">
          {pathlist.map((item, index) => {
            return (
              <>
                <Link href={
                  {
                    pathname: item.path as string,
                    query: { key: item.key }
                  }}

                >
                  <a style={{
                    borderColor:
                      activeKey === item.key ? primaryColor.toString() : '',
                    borderBottomWidth: activeKey === item.key ? 2 : 0
                  }}
                    className={` hover:text-black hover:bg-gray-100/50 w-[70px] text-[12px] flex justify-center items-center h-full text-gray-400 cursor-pointer`}>{item.name}</a>
                </Link>
                {index !== pathlist.length - 1 && (
                  <div className="h-[50%] bg-gray-100 w-[1px]"></div>
                )}
              </>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <Header height={64} className="flex items-center justify-between sticky">
      <Burger
        opened={opened}
        onClick={changeOpened}
        className="md:hidden inline-block"
      />
      <div
        className="h-full flex items-center cursor-pointer"
      >
        <div className="flex px-[30px]">
          <Image
            src={logo}
            height={36}
            width={36}
            alt="logo of chunjun"
          ></Image>
          <Text className="text-xl font-bold capitalize flex items-center ">
            Chunjun
          </Text>
        </div>

        <div className="h-full flex">
          {headerLinks.map((item: headerLink) => {
            return (
              <>
                {typeof item.path === 'string' ? (
                  <MenuItem item={item}></MenuItem>
                ) : (
                  <ComplexMenuItem item={item}></ComplexMenuItem>
                )}
              </>
            )
          })}
        </div>
      </div>

      <div className="h-full flex items-center space-x-4 pr-[9px]">
        <Menu
          shadow="md"
          width={100}
          trigger="hover"
          openDelay={100}
          closeDelay={200}
          position="bottom"
        >
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
        <ActionIcon
          variant="outline"
          color={theme === 'dark' ? 'yellow' : 'blue'}
          onClick={changeTheme}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </ActionIcon>
      </div>
    </Header>
  )
}

export default AppHeader
