import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Items from '@/types/Item'

//获取环境变量
const SEP = process.env.sep as string
const ROOT_ZH = process.env.root_zh as string

const postsDirectory = join(process.cwd(), ROOT_ZH)

// 读取文件
export const getAllPaths = (root = ROOT_ZH, allFiles: string[] = []) => {
  const currentDir = join(process.cwd(), root)

  const files = fs.readdirSync(currentDir)

  for (const file of files) {
    if (file.includes('.md')) {
      allFiles.push(
        root === ROOT_ZH
          ? file
          : `${root.split('/').slice(2).join('/')}/${file}`
      )
    } else {
      getAllPaths(`${root}/${file}`, allFiles)
    }
  }

  return allFiles.filter((file) => file.includes('.md'))
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.split(SEP).join('/').replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getAllPaths()
  const posts = slugs.map((slug) => getPostBySlug(slug, fields))

  return posts
}
