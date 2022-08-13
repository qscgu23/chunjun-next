import type { NextPage } from 'next'
import { Button, useMantineColorScheme, Text, Card } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import Aos from 'aos'
import { BrandGithub, Affiliate } from 'tabler-icons-react'

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [colorScheme])

  return (
    <>
      <section className="relative flex flex-col justify-center items-center section-padding md:h-[calc(100vh-64px)] h-[60vh] bg-hero-pattern bg-contain bg-no-repeat bg-center">
        <Text
          data-aos="fade-up"
          data-aos-delay="300"
          className="capitalize md:text-5xl md:mb-12 mb-8 text-3xl"
        >
          chunjun 纯钧
        </Text>
        <Text
          data-aos="fade-up"
          data-aos-delay="350"
          className="capitalize md:text-3xl text-center text-base md:mb-12 mb-8"
        >
          一个基于flink的开源可拓展批流一体数据集成工具
        </Text>
        <div className="flex items-center">
          <Button
            leftIcon
            size="lg"
            component="a"
            data-aos="fade-right"
            data-aos-delay="400"
            rightIcon={<BrandGithub />}
            href="https://github.com/DTStack/chunjun"
            variant="light"
            className={`text-xl capitalize ${
              colorScheme === 'light' ? 'bg-blue-50' : null
            } mr-2`}
          >
            github
          </Button>
          <Link href={`/documents/快速开始`} passHref>
            <Button
              size="lg"
              variant="light"
              color="violet"
              data-aos="fade-left"
              data-aos-delay="400"
              rightIcon={<Affiliate />}
              className={`text-xl capitalize ${
                colorScheme === 'light' ? 'bg-indigo-50' : null
              } ml-2`}
            >
              quick start
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col section-padding">
        <div className="flex flex-col items-center justify-center md:mb-16 mb-12">
          <Text className="text-2xl text-center">核心功能</Text>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
          <Card
            shadow="none"
            radius="md"
            data-aos="zoom-in"
            data-aos-delay="100"
            withBorder={false}
            className="bg-transparent hover:scale-105 transition-all duration-150"
          >
            <Card.Section className="text-center">
              <Image
                src="/assets/svg/code.svg"
                height={70}
                width={70}
                alt="Norway"
              />
            </Card.Section>

            <Text size="sm" color="dimmed" className="text-center">
              基于json、sql 构建任务
            </Text>
          </Card>
          <Card
            shadow="none"
            radius="md"
            data-aos="zoom-in"
            data-aos-delay="120"
            withBorder={false}
            className="bg-transparent hover:scale-105 transition-all duration-150"
          >
            <Card.Section className="text-center">
              <Image
                src="/assets/svg/trans.svg"
                height={70}
                width={70}
                alt="Norway"
              />
            </Card.Section>

            <Text size="sm" color="dimmed" className="text-center">
              支持多种异构数据源之间数据传输
            </Text>
          </Card>
          <Card
            shadow="none"
            radius="md"
            data-aos="zoom-in"
            data-aos-delay="140"
            withBorder={false}
            className="bg-transparent hover:scale-105 transition-all duration-150"
          >
            <Card.Section className="text-center">
              <Image
                src="/assets/svg/sync.svg"
                height={70}
                width={70}
                alt="Norway"
              />
            </Card.Section>

            <Text size="sm" color="dimmed" className="text-center">
              支持断点续传、增量同步
            </Text>
          </Card>
          <Card
            shadow="none"
            radius="md"
            data-aos="zoom-in"
            data-aos-delay="160"
            withBorder={false}
            className="bg-transparent hover:scale-105 transition-all duration-150"
          >
            <Card.Section className="text-center">
              <Image
                src="/assets/svg/hcs_sgw.svg"
                height={70}
                width={70}
                alt="Norway"
              />
            </Card.Section>

            <Text size="sm" color="dimmed" className="text-center">
              支持任务脏数据存储管理
            </Text>
          </Card>
          <Card
            shadow="none"
            radius="md"
            data-aos="zoom-in"
            data-aos-delay="180"
            withBorder={false}
            className="bg-transparent hover:scale-105 transition-all duration-150"
          >
            <Card.Section className="text-center">
              <Image
                src="/assets/svg/datav.svg"
                height={70}
                width={70}
                alt="Norway"
              />
            </Card.Section>

            <Text size="sm" color="dimmed" className="text-center">
              支持Schema同步
            </Text>
          </Card>
          <Card
            shadow="none"
            radius="md"
            data-aos="zoom-in"
            data-aos-delay="200"
            withBorder={false}
            className="bg-transparent hover:scale-105 transition-all duration-150"
          >
            <Card.Section className="text-center">
              <Image
                src="/assets/svg/collect.svg"
                height={70}
                width={70}
                alt="Norway"
              />
            </Card.Section>

            <Text size="sm" color="dimmed" className="text-center">
              支持RDBS数据源实时采集
            </Text>
          </Card>
        </div>
      </section>
      <section className="section-padding"></section>
    </>
  )
}

export default Home
