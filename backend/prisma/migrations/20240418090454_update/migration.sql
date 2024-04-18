/*
  Warnings:

  - You are about to drop the column `customerCustomerId` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userUserId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_customerCustomerId_fkey";

-- AlterTable
ALTER TABLE "Rental" DROP COLUMN "customerCustomerId",
ADD COLUMN     "userUserId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "customerType" "userRole" NOT NULL DEFAULT 'VISITOR',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailAddress_key" ON "User"("emailAddress");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
