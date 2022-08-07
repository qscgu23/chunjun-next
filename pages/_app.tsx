import '@/styles/globals.css'
import '@/styles/font.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from '@mantine/core'
import { useState } from 'react'
import AppHeader from '@/components/AppHeader'
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const [opened, setOpened] = useState<boolean>(false)
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  const toggleNavbar = () => {
    setOpened((o) => !o)
  }
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Head>
          <title>纯钧</title>
          <meta name="description" content="纯钧Chunjun" />
          <link rel="icon" href="/logo-dark.svg" />
        </Head>
        <AppShell
          padding={'md'}
          header={
            <AppHeader
              opened={opened}
              changeOpened={toggleNavbar}
              changeTheme={toggleColorScheme}
              theme={colorScheme}
            />
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.white,
              padding: 0
            }
          })}
          footer={<AppFooter />}
        >
          <Component {...pageProps} />
          <AppNavbar opened={opened} changeOpened={toggleNavbar} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
