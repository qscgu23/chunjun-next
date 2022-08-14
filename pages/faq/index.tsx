import { Text, Button } from '@mantine/core'
import Link from 'next/link'
const Faq = () => {
  return (
    <div className="h-[calc(100vh-70px)] flex justify-center flex-col items-center">
      <Text className="text-3xl text-center mb-8">
        抱歉,这个页面
        <span className="text-red-500">尚未完成</span>, 先去看看别的吧。
      </Text>
      <Link href="/" passHref>
        <Button component="a" variant="light" className="text-xl font-normal">
          回到首页
        </Button>
      </Link>
    </div>
  )
}

export default Faq
