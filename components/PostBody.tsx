import { TypographyStylesProvider } from "@mantine/core";
type Props = {
  content: string;
};

const PostBody = (props: Props) => {
  const { content } = props;

  return (
    <TypographyStylesProvider
      styles={{
        li: { padding: 0 },
      }}
      className="md:col-span-4"
    >
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </TypographyStylesProvider>
  );
};

export default PostBody;
