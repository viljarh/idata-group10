// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Create vehicle
  const vehicle = await prisma.vehicle.upsert({
    where: { vehicleId: 1 },
    update: {},
    create: {
      vehicleId: 1,
      manufacture: 'Volkswagen',
      modelType: 'Golf',
      modelYear: '2007',
      vehicleCategory: 'Compact car',
      transmissionType: 'Manual',
      fuelType: 'Diesel',
      passengerCapacity: 5,
      extraFeatures: 'Bluetooth, DAB radio, warming in the chairs',
      mileage: 0,
      image: 'path/to/image', // Provide path to image or store image in database
      dailyPrice: 600, // Price in NOK
    },
  });


  const customer = await prisma.customer.upsert({
    where: { customerId: 1 },
    update: {},
    create: {
      customerId: 1,
      username: 'johndoe',
      password: '$2b$10',
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john@doe.com',
      telephoneNumber: 12345678,
      customerType:'REGISTRATED'    
  },
  });
  console.log(vehicle, customer);
}


// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
