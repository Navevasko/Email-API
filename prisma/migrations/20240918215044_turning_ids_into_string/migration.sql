/*
  Warnings:

  - The primary key for the `email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `email` DROP FOREIGN KEY `Email_idFromUser_fkey`;

-- DropForeignKey
ALTER TABLE `email` DROP FOREIGN KEY `Email_idToUser_fkey`;

-- AlterTable
ALTER TABLE `email` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `idFromUser` VARCHAR(191) NOT NULL,
    MODIFY `idToUser` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_idFromUser_fkey` FOREIGN KEY (`idFromUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_idToUser_fkey` FOREIGN KEY (`idToUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
