import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient();


async function main() {
  const hashedPassword = await bcrypt.hash('adminPassword', 10)

  const existingUser = await prisma.user.findUnique({
    where: { emailAddress: 'admin@rentalroulette.com' },
  });

  if (!existingUser) {
    const newUser = await prisma.user.create({
      data: {
        username: 'admin',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        emailAddress: 'admin@rentalroulette.com',
        phoneNumber: 8008135,
        customerType: 'ADMIN',
      },
    });
    console.log('Admin user created:', newUser);
  } else {
    console.log('Admin user already exists:', existingUser);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
