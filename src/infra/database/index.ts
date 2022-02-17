import { PrismaClient } from "@prisma/client";

const connection = new PrismaClient({ log: ['query', 'info']})

export default connection;
