import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Items from "@/types/Item";

//获取环境变量
const ROOT_ZH = process.env.root_zh as string;
const SEP = process.env.sep as string;

const postsDirectory = join(process.cwd(), ROOT_ZH);

export const getAllPaths = (root = ROOT_ZH, markdownFiles: string[] = []) => {
  const currentDir = join(process.cwd(), root);
  const files = fs.readdirSync(currentDir);

  for (const file of files) {
    if (file.includes(".md")) {
      markdownFiles.push(root === ROOT_ZH ? file : `${root.split("/").slice(2).join("/")}/${file}`);
    } else {
      getAllPaths(`${root}/${file}`, markdownFiles);
    }
  }
  return markdownFiles;
};

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.split(SEP).join("/").replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getAllPaths();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
