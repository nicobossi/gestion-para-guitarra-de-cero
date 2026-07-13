/*
  Warnings:

  - The primary key for the `payment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "payment" DROP CONSTRAINT "payment_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "payment_pkey" PRIMARY KEY ("id");
