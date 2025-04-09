/*
  Warnings:

  - You are about to drop the column `map_height` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `map_width` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "map_height",
DROP COLUMN "map_width";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "createdAt";
