/*
  Warnings:

  - The primary key for the `CartItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderId` on the `CartItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pkey",
DROP COLUMN "orderId",
ADD COLUMN     "cartItemId" SERIAL NOT NULL,
ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY ("cartItemId");
