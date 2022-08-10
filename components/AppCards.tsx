import React, { useEffect } from 'react'
import Aos from 'aos'
import { Text } from '@mantine/core'
import { primaryColor } from '@/config/color'
import Image from 'next/image'

const AppCards = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <section className="w-full h-full relative flex items-center ">
      <section
        data-aos="zoom-in"
        className="w-full h-full items-center flex dark:text-[#797a7d]"
      >
        <section className="w-[50%] h-full flex items-center justify-center">
          <h1
            data-aos="fade-down"
            className="text-center h-full items-center flex md:text-5xl   font-bold  capitalize"
            style={{ color: primaryColor.darken(0.5).toString() }}
          >
            Core features
          </h1>
        </section>
        <section
          className="h-[400px] mx-[40px] w-[1px]"
          style={{
            backgroundColor: primaryColor.toString()
          }}
        ></section>
        <section className="h-full items-center">
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-y-24 md:gap-x-12 gap-4 justify-items-center lg:p-6 p-4">
            <div className="w-full flex flex-col items-center space-y-6">
              <Image
                height={70}
                width={70}
                className="card"
                src="/assets/svg/code.svg"
                alt="code"
              />
              <Text className="text-[14px]  ">基于json、sql 构建任务</Text>
            </div>
            <div className="w-full flex flex-col items-center space-y-6">
              <Image
                height={70}
                width={70}
                className="card"
                src="/assets/svg/trans.svg"
                alt="trans"
              />
              <Text className="card-text text-[14px]">
                支持多种异构数据源之间数据传输
              </Text>
            </div>
            <div className="w-full flex flex-col items-center space-y-6">
              <Image
                height={70}
                width={70}
                className="card"
                src="/assets/svg/sync.svg"
                alt="sync"
              />
              <Text className="card-text text-[14px]">
                支持断点续传、增量同步
              </Text>
            </div>
            <div className="w-full flex flex-col items-center space-y-6">
              <Image
                height={70}
                width={70}
                className="card"
                src="/assets/svg/hcs_sgw.svg"
                alt="dirty-data"
              />
              <Text className="card-text text-[14px]">
                支持任务脏数据存储管理
              </Text>
            </div>
            <div className="w-full flex flex-col items-center space-y-6">
              <Image
                height={70}
                width={70}
                className="card"
                src="/assets/svg/datav.svg"
                alt="schema"
              />
              <Text className="card-text text-[14px]">支持Schema同步</Text>
            </div>
            <div className="w-full flex flex-col items-center space-y-6">
              <Image
                height={70}
                width={70}
                className="card"
                src="/assets/svg/collect.svg"
                alt="collect"
              />
              <Text className="card-text text-[14px]">
                支持RDBS数据源实时采集
              </Text>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default AppCards
