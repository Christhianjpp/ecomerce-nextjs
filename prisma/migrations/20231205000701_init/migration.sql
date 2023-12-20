-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_materialId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "materialId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE SET NULL ON UPDATE CASCADE;
