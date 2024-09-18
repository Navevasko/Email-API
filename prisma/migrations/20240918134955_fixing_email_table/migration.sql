/*
  Warnings:

  - You are about to drop the column `idUser` on the `email` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `email_user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idFromUser` to the `Email` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idToUser` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `email` DROP FOREIGN KEY `Email_idUser_fkey`;

-- DropForeignKey
ALTER TABLE `email_user` DROP FOREIGN KEY `Email_User_email_id_fkey`;

-- DropForeignKey
ALTER TABLE `email_user` DROP FOREIGN KEY `Email_User_user_id_fkey`;

-- AlterTable
ALTER TABLE `email` DROP COLUMN `idUser`,
    ADD COLUMN `idFromUser` INTEGER NOT NULL,
    ADD COLUMN `idToUser` INTEGER NOT NULL,
    ADD COLUMN `isFavorited` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `spam` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    DROP COLUMN `nickname`,
    ADD COLUMN `color` ENUM('ORANGE', 'BLUE', 'RED', 'PURPLE', 'YELLOW', 'GREEN') NOT NULL DEFAULT 'BLUE',
    MODIFY `theme` ENUM('DARK', 'LIGHT') NOT NULL DEFAULT 'LIGHT';

-- DropTable
DROP TABLE `email_user`;

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_idFromUser_fkey` FOREIGN KEY (`idFromUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_idToUser_fkey` FOREIGN KEY (`idToUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
