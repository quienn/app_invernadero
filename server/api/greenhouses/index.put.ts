import { Greenhouse, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody<Greenhouse>(event);
  const { humidity, temperature, moisture, id } = body;

  if (!id) {
    return {
      status: 404,
      data: {
        message: "Not Found",
      },
    };
  }

  const greenhouse = await prisma.greenhouse.update({
    where: {
      id,
    },
    data: {
      humidity,
      temperature,
      moisture,
    },
  });

  return {
    data: greenhouse,
  };
});
