import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")!;

  const greenhouse = await prisma.greenhouse.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!greenhouse) {
    return {
      status: 404,
      data: {
        message: "Not Found",
      },
    };
  }

  return {
    data: greenhouse,
  };
});
