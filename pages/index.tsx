import AppBannner from "@/components/AppBannner";
import AppCards from "@/components/AppCards";
import AppMedium from "@/components/AppMedium";
import AppShowCase from "@/components/AppShowCase";
import AppCustomers from "@/components/AppCustomers";
import type { NextPage } from "next";
import { getAllPosts } from "../api/api";
import Items from "../types/Item";
import React, { CSSProperties, FC } from "react";
import { primaryColor } from "@/config/color";

type Props = {
  allPosts: Items[];
};

type ConType = {
  children: JSX.Element,
  className?: string,
  style?: CSSProperties
}
const Container: FC<ConType> = ({ children, className, style }) => {
  return <>
    <div style={style} className={`w-full px-[90px] py-[70px] flex items-center justify-center ${className}`}>
      {children}
    </div>
  </>
}

const Home: NextPage<Props> = (props: Props) => {
  const { allPosts } = props;
  console.log(allPosts);

  return (
    <div>
      <Container>
        <AppBannner></AppBannner>
      </Container>
      <Container style={{
        background: primaryColor.alpha(0.1).toString()
      }}>
        <AppCards></AppCards>
      </Container>
      <Container>
        <AppMedium />
      </Container>
      <Container className="bg-blue-50/50">
        <AppShowCase />
      </Container>
      <Container>
        <AppCustomers />
      </Container>



    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};
