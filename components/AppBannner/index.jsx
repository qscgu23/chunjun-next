import React from "react"
import { Github } from "@icon-park/react"
import { primaryColor } from "@/config/color"
const Link = () => {
  return <span>
    span
  </span>
}

const AppBanner = () => {
  return (
    <section className="relative hero bg-block2 dark:bg-[#1a1e1b] dark:text-[#797a7d] dark:bg-none  bg-center bg-no-repeat bg-contain flex items-center">
      <div className="px-4 py-8 flex flex-col items-center w-full">
        <p className="text-4xl lg:text-6xl xl:text-8xl text-center mb-8 inline-block">
          <span className="inline-block" style={{
            color: primaryColor.darken(0.5).alpha(0.9).toString()
          }}>
            ChunJun
          </span>{" "}
          纯钧
        </p>
        <p className="inline-block xl:text-4xl font-mono text-xl text-center mb-6 font-bold">
          基于Flink之上提供稳定，高效，易用的 批流一体的数据集成工具
        </p>
        <div className="flex items-center mt-[30px]">
          <a
            className="border-2  py-[10px] px-[20px] mr-4 text-base flex items-center xl:text-2xl"
            rel="noreferrer"
            style={{
              color: primaryColor.darken(0.1).toString(),
              borderColor: primaryColor.darken(0.1).toString(),
            }}
            target="_blank"
            href="https://github.com/DTStack/chunjun"
          >
            <Github color="#fff" className="mr-2  text-base xl:text-2xl" />
            GITHUB
          </a>
          <a
            to="/documents"
            className="border cursor-pointer text-white py-[10px] px-[20px] text-base xl:text-2xl"
            style={{
              background: primaryColor.darken(0.2).toString()
            }}
          >
            快速开始
          </a>
        </div>
      </div>
    </section>
  )
}

export default AppBanner
