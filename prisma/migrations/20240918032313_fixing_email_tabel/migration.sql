/*
  Warnings:

  - You are about to drop the column `email_id` on the `email_user` table. All the data in the column will be lost.
  - You are about to drop the column `is_favorited` on the `email_user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `email_user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `user` table. All the data in the column will be lost.
  - Added the required column `idEmail` to the `Email_User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `Email_User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `email_user` DROP FOREIGN KEY `Email_User_email_id_fkey`;

-- DropForeignKey
ALTER TABLE `email_user` DROP FOREIGN KEY `Email_User_user_id_fkey`;

-- AlterTable
ALTER TABLE `email_user` DROP COLUMN `email_id`,
    DROP COLUMN `is_favorited`,
    DROP COLUMN `user_id`,
    ADD COLUMN `idEmail` INTEGER NOT NULL,
    ADD COLUMN `idUser` INTEGER NOT NULL,
    ADD COLUMN `isFavorited` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `type` ENUM('TO', 'CC', 'CCO') NOT NULL DEFAULT 'TO';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    DROP COLUMN `nickname`,
    ADD COLUMN `color` ENUM('ORANGE', 'BLUE', 'RED', 'PURPLE', 'YELLOW', 'GREEN') NOT NULL DEFAULT 'BLUE',
    MODIFY `theme` ENUM('DARK', 'LIGHT') NOT NULL DEFAULT 'LIGHT';

-- AddForeignKey
ALTER TABLE `Email_User` ADD CONSTRAINT `Email_User_idEmail_fkey` FOREIGN KEY (`idEmail`) REFERENCES `Email`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Email_User` ADD CONSTRAINT `Email_User_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
