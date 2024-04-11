/*
  Warnings:

  - You are about to drop the column `customerAddressId` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `driverLicenseId` on the `Customer` table. All the data in the column will be lost.
  - The `customerType` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `customerId` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `rentalLocationId` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `luggageCapacity` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyPrice` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyPrice` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `CustomerAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RentalStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleAvailability` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailAddress]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerCustomerId` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleVehicleId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('VISITOR', 'REGISTRATED', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_customerAddressId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_rentalLocationId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_rentalStatusId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "VehicleAvailability" DROP CONSTRAINT "VehicleAvailability_rentalStatusId_fkey";

-- DropForeignKey
ALTER TABLE "VehicleAvailability" DROP CONSTRAINT "VehicleAvailability_vehicleId_fkey";

-- DropIndex
DROP INDEX "Customer_customerId_key";

-- DropIndex
DROP INDEX "Rental_rentalId_key";

-- AlterTable
CREATE SEQUENCE customer_customerid_seq;
ALTER TABLE "Customer" DROP COLUMN "customerAddressId",
DROP COLUMN "driverLicenseId",
ALTER COLUMN "customerId" SET DEFAULT nextval('customer_customerid_seq'),
DROP COLUMN "customerType",
ADD COLUMN     "customerType" "userRole" NOT NULL DEFAULT 'VISITOR';
ALTER SEQUENCE customer_customerid_seq OWNED BY "Customer"."customerId";

-- AlterTable
CREATE SEQUENCE rental_rentalid_seq;
ALTER TABLE "Rental" DROP COLUMN "customerId",
DROP COLUMN "rentalLocationId",
DROP COLUMN "vehicleId",
ADD COLUMN     "customerCustomerId" INTEGER NOT NULL,
ADD COLUMN     "rentalConfirmed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "vehicleVehicleId" INTEGER NOT NULL,
ALTER COLUMN "rentalId" SET DEFAULT nextval('rental_rentalid_seq');
ALTER SEQUENCE rental_rentalid_seq OWNED BY "Rental"."rentalId";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "luggageCapacity",
DROP COLUMN "monthlyPrice",
DROP COLUMN "weeklyPrice";

-- DropTable
DROP TABLE "CustomerAddress";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "RentalStatus";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VehicleAvailability";

-- CreateIndex
CREATE UNIQUE INDEX "Customer_username_key" ON "Customer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_emailAddress_key" ON "Customer"("emailAddress");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_customerCustomerId_fkey" FOREIGN KEY ("customerCustomerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_vehicleVehicleId_fkey" FOREIGN KEY ("vehicleVehicleId") REFERENCES "Vehicle"("vehicleId") ON DELETE RESTRICT ON UPDATE CASCADE;
