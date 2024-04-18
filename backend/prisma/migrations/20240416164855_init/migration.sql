-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('VISITOR', 'REGISTRATED', 'ADMIN');

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "customerType" "userRole" NOT NULL DEFAULT 'VISITOR',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "vehicleId" INTEGER NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "vehicleCategory" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "passengerCapacity" INTEGER NOT NULL,
    "extraFeatures" TEXT NOT NULL,
    "mileage" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "dailyPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vehicleId")
);

-- CreateTable
CREATE TABLE "Rental" (
    "rentalId" SERIAL NOT NULL,
    "rentalConfirmed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rentalDateFrom" TIMESTAMP(3) NOT NULL,
    "rentalDateTo" TIMESTAMP(3) NOT NULL,
    "distanceDriven" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "rentalStatusId" INTEGER NOT NULL,
    "customerCustomerId" INTEGER NOT NULL,
    "vehicleVehicleId" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("rentalId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_username_key" ON "Customer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_emailAddress_key" ON "Customer"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vehicleId_key" ON "Vehicle"("vehicleId");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_customerCustomerId_fkey" FOREIGN KEY ("customerCustomerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_vehicleVehicleId_fkey" FOREIGN KEY ("vehicleVehicleId") REFERENCES "Vehicle"("vehicleId") ON DELETE RESTRICT ON UPDATE CASCADE;
