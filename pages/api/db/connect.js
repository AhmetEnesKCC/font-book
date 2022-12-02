import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const connectDB = async () => {
  const main = async () => {
    await prisma.$connect();
  };
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect;
    });
};

export default connectDB;
