import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const car1 = await prisma.vehicle.upsert({
    where: { vehicleId: 1 },
    update: {},
    create: {
      vehicleId: 1,
      manufacturer: 'Volkswagen',
      model: 'Golf',
      year: '2007',
      vehicleCategory: 'Compact',
      transmission: 'Manual',
      fuel: 'Diesel',
      passengerCapacity: 5,
      extraFeatures: 'Bluetooth, DAB Radio, Heated seats',
      mileage: 20000,
      image: 'path/to/image',
      dailyPrice: 600,
    },
  });

  const customer = await prisma.customer.upsert({
    where: { customerId: 1 },
    update: {},
    create: {
      customerId: 1,
      username: 'johndoe',
      password: 'password',
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john@doe.com',
      phoneNumber: 8008135,
      customerType: 'REGISTRATED',
    },
  });

  console.log({car1, customer});
}

main().catch((e)=> {
    console.error(e);
    process.exit(1);
})
.finally(async()=> {
    await prisma.$disconnect();
})
