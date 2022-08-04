import React from "react";
import { Card, Text } from "@mantine/core";
import { Footer } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import dt from "@/public/dt.jpg";
const AppFooter = () => {
  return (
    <Footer className="relative" height={300} p="sm">
      <div className="items-center flex flex-col md:flex-row justify-center">
        <div className="h-full w-full flex justify-center items-center bg-block bg-contain bg-center bg-no-repeat">
          <Card component="a" className="bg-transparent">
            <Card.Section className="flex justify-center items-center">
              <Image src={dt} height={181} width={177} alt="No way!" />
            </Card.Section>
            <Text weight={500} className="text-center">
              联系我们
            </Text>
            <Text size="sm">在这里你可以获取到最新的技术及产品知识</Text>
          </Card>
        </div>
        <div className="h-full bg-block2 bg-no-repeat bg-center bg-contain w-full flex justify-center items-center">
          <div className="flex md:space-x-12 space-x-6">
            <div className="text-center">
              <h3 className="mb-5">文档</h3>
              <ul className="flex flex-col space-y-2">
                <Link href="/documents">
                  <a>快速开始</a>
                </Link>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="mb-5">社区</h3>
              <ul className="flex flex-col space-y-2">
                <a href="https://github.com/DTStack/chunjun/issues">Issue Tracker</a>
                <a href="https://github.com/DTStack/chunjun/pulls">Pull Requests</a>
                <a href="https://github.com/DTStack/chunjun/discussions">Discussions</a>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="mb-5">更多</h3>
              <ul className="flex flex-col space-y-2">
                <Link href="/">
                  <a>博客</a>
                </Link>
                <a href="https://github.com/DTStack/chunjun">Github</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-gray-600 text-base flex justify-center items-center text-center">Apache LICENSE 2.0 Licensed, Copyright 2018-2022 Chunjun All Rights Reserved</div>
    </Footer>
  );
};

export default AppFooter;
