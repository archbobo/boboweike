import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function truncateTables() {
  try {
    // 获取所有表名
    const tableNames = await prisma.$queryRaw<
      Array<{ table_name: string }>
    >`SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public' AND table_type = 'BASE TABLE'`;

    // 遍历表名，逐一执行 TRUNCATE
    for (const { table_name } of tableNames) {
      // 拼接 SQL 字符串，动态指定表名
      const truncateQuery = `TRUNCATE TABLE "${table_name}" RESTART IDENTITY CASCADE;`;
      await prisma.$executeRawUnsafe(truncateQuery);
    }

    console.log('All tables truncated successfully.');
  } catch (error) {
    console.error('Error truncating tables:', error);
  } finally {
    await prisma.$disconnect();
  }
}

truncateTables();