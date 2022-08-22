import members from '@/githubInfo/members.json'
import { Card, Text, Avatar, useMantineColorScheme } from '@mantine/core'

const Contributor = () => {
  const { colorScheme } = useMantineColorScheme()
  return (
    <main className="md:w-4/5 2xl:max-w-[60vw] mx-auto w-full md:py-8 py-6">
      <Text className="font-roboto mb-4 text-3xl text-center capitalize">
        Our contributors
      </Text>
      <Text className="mb-8 text-center font-bold">期待你的加入</Text>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-2 md:p-0 px-4">
        {members.map((member) => {
          return (
            <Card
              key={member.avatar_url}
              p="lg"
              radius="sm"
              className={`hover:scale-110 transition-all duration-300 ${
                colorScheme === 'light' ? 'bg-gray-50' : null
              }`}
            >
              <Card.Section className="flex justify-center items-center p-4 ">
                <Avatar
                  src={member.avatar_url}
                  alt={member.html_url}
                  className="mx-auto"
                  radius="xl"
                  size="lg"
                  component="a"
                  href={member.html_url}
                />
              </Card.Section>

              <Text
                size="xl"
                className={`text-center ${
                  colorScheme === 'light' ? 'text-black' : 'text-gray-200'
                }`}
              >
                {member.login}
              </Text>
            </Card>
          )
        })}
      </div>
    </main>
  )
}

export default Contributor
