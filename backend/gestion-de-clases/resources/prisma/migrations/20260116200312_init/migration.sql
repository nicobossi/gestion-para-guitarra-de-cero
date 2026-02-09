-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "apellido" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_telefono_key" ON "Alumno"("telefono");
