import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('adminPassword', 10);

  const adminUser = await prisma.user.upsert({
    where: { emailAddress: 'admin@rentalroulette.com' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      emailAddress: 'admin@rentalroulette.com',
      phoneNumber: 1234567890,
      customerType: 'ADMIN',
    },
  });

  console.log({ adminUser });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
