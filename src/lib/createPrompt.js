"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

const createPrompt = async (req) => {
  const { email, title, post } = req;
  const currentDate = new Date();

  const options = { day: "numeric", month: "short", year: "numeric" };
  const dateString = currentDate.toLocaleDateString("en-US", options);
  try {
    await prisma.Post.create({
      data: {
        title,
        prompt: post,
        date: dateString,
        author: { connect: { email: email } },
      },
    });

    revalidatePath("/");
    return "success";
  } catch (error) {
    throw error;
  }
};

export default createPrompt;
