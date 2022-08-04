import type { NextPage } from "next";
import { getAllPosts } from "../api/api";
import Items from "../types/Item";

type Props = {
  allPosts: Items[];
};

const Home: NextPage<Props> = (props: Props) => {
  const { allPosts } = props;
  return (
    <div>
      <p className="text-center">hello world</p>
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
