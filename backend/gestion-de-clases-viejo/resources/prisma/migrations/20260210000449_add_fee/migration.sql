/*
  Warnings:

  - You are about to drop the `Alumno` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentLapse" AS ENUM ('MONTHLY', 'BIWEEKLY');

-- DropTable
DROP TABLE "Alumno";

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "second_name" TEXT,
    "surname" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "submission_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fee" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "application_date" TIMESTAMP(3) NOT NULL,
    "payment_lapse" "PaymentLapse" NOT NULL,

    CONSTRAINT "fee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_phone_key" ON "student"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "fee_amount_key" ON "fee"("amount");
