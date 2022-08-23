import {
  Header,
  ActionIcon,
  ColorScheme,
  Text,
  Burger,
  SegmentedControl,
  Menu
} from '@mantine/core'
import { Sun, Moon, ChevronDown } from 'tabler-icons-react'
import Image from 'next/image'
import { headerLinks } from '@/config/headerLinks'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  theme: ColorScheme
  changeTheme: () => void
  opened: boolean
  changeOpened: () => void
}

const AppHeader = (props: Props) => {
  const { theme, changeTheme, opened, changeOpened } = props
  const router = useRouter()
  return (
    <Header
      height={64}
      className="flex items-center justify-between sticky shadow-md bg--gray-50 2xl:px-[22vw]"
    >
      <Burger
        opened={opened}
        onClick={changeOpened}
        className="md:hidden inline-block"
      />
      <div className="h-full flex items-center flex-1 cursor-pointer">
        <div
          className="flex h-full items-center md:justify-start justify-center md:w-auto w-full"
          onClick={() => router.push('/')}
        >
          <Image
            priority
            src="/logo-dark.svg"
            height={48}
            width={48}
            alt="logo of chunjun"
          />
          <Text className="text-xl capitalize flex items-center font-raleway select-none">
            Chunjun
          </Text>
        </div>
        <div className="h-full justify-center flex-1 md:flex hidden items-center">
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
                  width={120}
                  trigger="hover"
                  openDelay={100}
                  closeDelay={200}
                  key={link.key}
                  position="bottom"
                >
                  <Menu.Target>
                    <span className="flex items-center md:w-[72px] justify-center text-center">
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {link.path.map((url) => {
                      return (
                        <Menu.Item key={url.key}>
                          <Link href={url.path as string}>
                            <a className="uppercase">{url.name}示例</a>
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
