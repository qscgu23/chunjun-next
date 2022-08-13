const SEP = process.env.sep as string

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
    name: '指南',
    path: '/faq',
    key: 'faq'
  },
  {
    name: '案例',
    path: [
      {
        name: 'sql',
        path: `/examples/sql/binlog${SEP}binlog_stream`,
        key: 'sql'
      },
      {
        name: 'json',
        path: `/examples/json/binlog${SEP}binlog_hive`,
        key: 'json'
      }
    ],
    key: 'examples'
  }
]
