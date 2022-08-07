import { FC } from "react"

export type headerLink = {
  name: string
  path: string | headerLink[]
  key: string
}
 
export const headerLinks: headerLink[] = [
  {
    name: '首页',
    path: '/',
    key: 'home'
  },
  {
    name: '文档',
    path: '/documents/快速开始',
    key: 'documents'
  },
  {
    name: '下载',
    path: 'https://github.com/DTStack/chunjun/releases',
    key: 'download'
  },
  {
    name: '案例',
    path: [
      {
        name: 'sql案例',
        path: '/examples/sql',
        key: 'sql'
      },
      {
        name: 'json案例',
        path: '/examples/json',
        key: 'json'
      }
    ],
    key: 'examples'
  }
]
