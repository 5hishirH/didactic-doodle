"use server";
import prisma from "@/utils/prisma";

const newUser = async (req) => {
  const { email, username, profilePic } = req;
  const isUser = await prisma.User.findUnique({
    where: {
      email,
    },
  });
  if (!isUser) {
    await prisma.User.create({
      data: {
        email,
        username,
        profilePic,
      },
    });
  }
};

export default newUser;
