import AppBanner from '@/components/AppBanner'
import AppCards from '@/components/AppCards'
import AppMedium from '@/components/AppMedium'
import AppShowCase from '@/components/AppShowCase'
// import AppCustomers from '@/components/AppCustomers'
import type { NextPage } from 'next'
import React, { CSSProperties, FC } from 'react'
import { primaryColor } from '@/config/color'
import AppFooter from '@/components/AppFooter'

type ConType = {
  children: JSX.Element
  className?: string
  style?: CSSProperties
}
const Container: FC<ConType> = ({ children, className, style }) => {
  return (
    <>
      <div
        style={style}
        className={`w-full px-[90px] py-[70px] flex items-center justify-center ${className}`}
      >
        {children}
      </div>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Container>
        <AppBanner></AppBanner>
      </Container>
      <Container
        style={{
          background: primaryColor.alpha(0.1).toString()
        }}
      >
        <AppCards></AppCards>
      </Container>
      <Container>
        <AppMedium />
      </Container>
      <Container className="bg-blue-50/50">
        <AppShowCase />
      </Container>
      {/* <Container>
        <AppCustomers />
      </Container> */}
      <AppFooter></AppFooter>
    </div>
  )
}

export default Home
