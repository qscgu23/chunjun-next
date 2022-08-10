import {
  Header,
  ActionIcon,
  ColorScheme,
  Text,
  Burger,
  SegmentedControl,
  Menu
} from '@mantine/core'
import { Sun, Moon, Umbrella } from 'tabler-icons-react'
import Image from 'next/image'
import logo from '@/public/logo-dark.svg'
import { headerLinks } from '@/config/headerLinks'
import Link from 'next/link'

type Props = {
  theme: ColorScheme
  changeTheme: () => void
  opened: boolean
  changeOpened: () => void
}

const AppHeader = (props: Props) => {
  const { theme, changeTheme, opened, changeOpened } = props
  return (
    <Header
      height={64}
      className="flex items-center justify-between sticky shadow-md"
    >
      <Burger
        opened={opened}
        onClick={changeOpened}
        className="md:hidden inline-block"
      />
      <div className="h-full flex items-center cursor-pointer">
        <div className="flex px-[30px] md:mr-10 mr-0">
          <Image src={logo} height={48} width={48} alt="logo of chunjun" />
          <Text className="text-xl capitalize flex items-center font-raleway">
            Chunjun
          </Text>
        </div>
        <div className="h-full md:flex hidden items-center">
          {headerLinks.map((link) => {
            if (link.path[0] === '/' && !Array.isArray(link.path)) {
              return (
                <Link href={link.path} key={link.key}>
                  <a className="font-raleway inline-block md:w-[72px] text-center">
                    {link.name}
                  </a>
                </Link>
              )
            } else if (Array.isArray(link.path)) {
              return (
                <Menu
                  shadow="md"
                  width={100}
                  trigger="hover"
                  openDelay={100}
                  closeDelay={200}
                  key={link.key}
                  position="bottom"
                >
                  <Menu.Target>
                    <span className="font-raleway inline-block md:w-[72px] text-center">
                      {link.name}
                    </span>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {link.path.map((url) => {
                      return (
                        <Menu.Item key={url.key}>
                          <Link href={url.path as string}>
                            <a className="font-raleway uppercase">{url.name}</a>
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </Menu.Dropdown>
                </Menu>
              )
            } else {
              return (
                <a
                  href={link.path}
                  key={link.key}
                  className="font-raleway inline-block md:w-[72px] text-center"
                  target="blank"
                >
                  {link.name}
                </a>
              )
            }
          })}
        </div>
      </div>

      <div className="h-full flex items-center space-x-4 pr-[9px]">
        {/* <Menu
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
        </Menu> */}
        <SegmentedControl
          data={[
            { label: '简体中文', value: 'zh-Hans' },
            { label: 'English', value: 'en' }
          ]}
        />
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
