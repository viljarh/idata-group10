import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('adminPassword', 10);
  const chuckPassword = await bcrypt.hash('Nunchucks2024', 10);
  const davePassword = await bcrypt.hash('Dangerous2024', 10);

  const adminUser = await prisma.user.upsert({
    where: { emailAddress: 'admin@rentalroulette.com' },
    update: {},
    create: {
      username: 'admin',
      password: adminPassword,
      firstName: 'Admin',
      lastName: 'User',
      emailAddress: 'admin@rentalroulette.com',
      phoneNumber: 1234567890,
      customerType: 'ADMIN',
    },
  });

  const chuck = await prisma.user.upsert({
    where: { emailAddress: 'chuck@nunchucks.com' },
    update: {},
    create: {
      username: 'chucknorris',
      password: chuckPassword,
      firstName: 'Chuck',
      lastName: 'Norris',
      emailAddress: 'chuck@nunchucks.com',
      phoneNumber: 1234567890,
      customerType: 'ADMIN',
    },
  });

  const dave = await prisma.user.upsert({
    where: { emailAddress: 'dave@dangerous.com' },
    update: {},
    create: {
      username: 'dave',
      password: davePassword,
      firstName: 'Dave',
      lastName: 'Dangerous',
      emailAddress: 'dave@dangerous.com',
      phoneNumber: 1234567890,
      customerType: 'REGISTRATED',
    },
  });

  console.log({ adminUser, chuck, dave });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
