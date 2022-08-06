type headerLink = {
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
    name: '案例',
    path: [
      {
        name: 'sql',
        path: '/examples/sql',
        key: 'sql'
      },
      {
        name: 'json',
        path: '/examples/json',
        key: 'json'
      }
    ],
    key: 'examples'
  },
  {
    name: '下载',
    path: 'https://github.com/DTStack/chunjun/releases',
    key: 'download'
  }
]
