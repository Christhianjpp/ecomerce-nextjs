/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `codigoReferencia` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `codigoReferenciaFabrica` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `subcategoriaId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `cantidadDisponible` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `talla` on the `Variant` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codeReference` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codeReferenceFactory` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_subcategoriaId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoriaId",
DROP COLUMN "codigoReferencia",
DROP COLUMN "codigoReferenciaFabrica",
DROP COLUMN "descripcion",
DROP COLUMN "nombre",
DROP COLUMN "subcategoriaId",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "codeReference" TEXT NOT NULL,
ADD COLUMN     "codeReferenceFactory" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "subcategoryId" TEXT;

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "cantidadDisponible",
DROP COLUMN "precio",
DROP COLUMN "talla",
ADD COLUMN     "QuantityAvailable" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "SubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
