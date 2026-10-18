//I just used this for debugging purposes, but I think it is a good idea to keep it around for testing the generated client.
const { PrismaClient } = require("./lib/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  console.log(await prisma.user.findMany({ take: 1 }));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());