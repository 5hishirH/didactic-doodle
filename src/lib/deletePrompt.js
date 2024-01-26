"use server";

import prisma from "@/utils/prisma";

const deletePrompt = async (id) => {
  try {
    await prisma.Post.delete({
      where: {
        id: id,
      },
    });

    return { message: "successful!" };
  } catch (error) {
    throw "failed";
  }
};

export default deletePrompt;
