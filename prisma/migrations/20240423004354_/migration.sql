/*
  Warnings:

  - Added the required column `shouldAutoWater` to the `Greenhouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Greenhouse` ADD COLUMN `shouldAutoWater` BOOLEAN NOT NULL;
