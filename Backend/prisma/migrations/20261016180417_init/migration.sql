/*
  Warnings:

  - The primary key for the `CookLog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createAt` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CookLog" DROP CONSTRAINT "CookLog_recipeId_fkey";

-- AlterTable
ALTER TABLE "CookLog" DROP CONSTRAINT "CookLog_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "recipeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CookLog_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CookLog_id_seq";

-- AlterTable
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "imageUrl" DROP NOT NULL,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Recipe_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createAt";

-- AddForeignKey
ALTER TABLE "CookLog" ADD CONSTRAINT "CookLog_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
