import { PrismaClient } from "./generated/prisma"

const prisma = new PrismaClient()

async function test() {
  try {
    const users = await prisma.user.findMany()
    console.log('✅ Prisma conectado! Users:', users)
    
    const tables = await prisma.$queryRaw`SHOW TABLES`
    console.log('✅ Tabelas no banco:', tables)
  } catch (error) {
    console.log('❌ Erro no Prisma:', error)
  } finally {
    await prisma.$disconnect()
  }
}

test()