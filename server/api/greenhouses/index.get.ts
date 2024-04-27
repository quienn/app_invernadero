import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (_event) => {
  const greenhouses = await prisma.greenhouse.findMany();

  return {
    data: greenhouses.map((greenhouse) => ({
      id: greenhouse.id,
      location: greenhouse.location,
      updatedAt: greenhouse.createdAt.toLocaleString("es-MX"),
      wateredAt: greenhouse.wateredAt?.toLocaleString("es-MX"),
      temperature: greenhouse.temperature,
      humidity: greenhouse.humidity,
      moisture: greenhouse.moisture,
    })),
  };
});
