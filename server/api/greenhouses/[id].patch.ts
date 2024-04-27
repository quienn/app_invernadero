import { Greenhouse, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")!;
  const body = await readBody<Greenhouse>(event);
  const { shouldAutoWater } = body;

  if (!id) {
    return {
      status: 404,
      data: {
        message: "Not Found",
      },
    };
  }

  if (shouldAutoWater === undefined) {
    return {
      status: 400,
      data: {
        message: "Bad Request",
      },
    };
  }

  const greenhouse = await prisma.greenhouse.update({
    where: {
      id: parseInt(id),
    },
    data: {
      shouldAutoWater,
    },
  });

  return {
    data: greenhouse,
  };
});
