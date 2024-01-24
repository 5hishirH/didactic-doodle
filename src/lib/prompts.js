import prisma from "@/utils/prisma";

const prompts = async () => {
  const result = await prisma.Post.findMany({
    select: {
      title: true,
      prompt: true,
      date: true,
      author: {
        select: {
          username: true,
          profilePic: true,
        },
      },
    },
  });
  return result;
};

export default prompts;
