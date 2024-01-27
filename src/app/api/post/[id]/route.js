import prisma from "@/utils/prisma";

export const GET = async (request, { params }) => {
  try {
    const result = await prisma.User.findFirst({
      where: {
        email: params.id,
      },
      include: {
        posts: true,
      },
    });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response("Internal server error", { status: 500 });
  }
};
