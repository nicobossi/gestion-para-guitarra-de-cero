-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH', 'MERCADO_LIBRE');

-- CreateTable
CREATE TABLE "payment" (
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "nextPaymentDate" TIMESTAMP(3) NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "studentId" INTEGER NOT NULL,
    "feeId" INTEGER NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("paymentDate")
);

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_feeId_fkey" FOREIGN KEY ("feeId") REFERENCES "fee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
