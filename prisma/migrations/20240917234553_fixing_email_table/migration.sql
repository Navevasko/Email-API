/*
  Warnings:

  - You are about to drop the column `email` on the `email` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `email` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `email` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `user` table. All the data in the column will be lost.
  - Added the required column `body` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Email_email_key` ON `email`;

-- AlterTable
ALTER TABLE `email` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `password`,
    ADD COLUMN `body` VARCHAR(191) NOT NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `email_user` ADD COLUMN `type` ENUM('TO', 'CC', 'CCO') NOT NULL DEFAULT 'TO';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `nickname`,
    ADD COLUMN `color` ENUM('ORANGE', 'BLUE', 'RED', 'PURPLE', 'YELLOW', 'GREEN') NOT NULL DEFAULT 'BLUE',
    MODIFY `theme` ENUM('DARK', 'LIGHT') NOT NULL DEFAULT 'LIGHT';
