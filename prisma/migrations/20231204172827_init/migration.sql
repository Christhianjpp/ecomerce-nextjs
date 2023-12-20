-- CreateTable
CREATE TABLE "SkuCounter" (
    "id" TEXT NOT NULL,
    "counter" INTEGER NOT NULL DEFAULT 1,
    "category" TEXT NOT NULL,

    CONSTRAINT "SkuCounter_pkey" PRIMARY KEY ("id")
);
