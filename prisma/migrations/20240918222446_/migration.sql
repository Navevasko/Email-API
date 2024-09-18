-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `color` ENUM('ORANGE', 'BLUE', 'RED', 'PURPLE', 'YELLOW', 'GREEN') NOT NULL DEFAULT 'BLUE',
    `theme` ENUM('DARK', 'LIGHT') NOT NULL DEFAULT 'LIGHT',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `finished_at` DATETIME(3) NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Email` (
    `id` VARCHAR(191) NOT NULL,
    `emailRemente` VARCHAR(191) NOT NULL,
    `nomeRemetente` VARCHAR(191) NOT NULL,
    `assunto` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `dataEnvio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prioridade` VARCHAR(191) NOT NULL DEFAULT 'NORMAL',
    `idMessageResponse` VARCHAR(191) NOT NULL DEFAULT '',
    `type` VARCHAR(191) NOT NULL DEFAULT 'DE',
    `dataRecebimento` DATETIME(3) NULL,
    `statusLeitura` BOOLEAN NOT NULL DEFAULT false,
    `boxFolder` VARCHAR(191) NOT NULL DEFAULT 'SENT',
    `para` VARCHAR(191) NOT NULL DEFAULT '',
    `cc` VARCHAR(191) NOT NULL DEFAULT '',
    `bcc` VARCHAR(191) NOT NULL DEFAULT '',
    `spam` BOOLEAN NOT NULL DEFAULT false,
    `isFavorited` BOOLEAN NOT NULL DEFAULT false,
    `idFromUser` VARCHAR(191) NOT NULL,
    `idToUser` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `finished_at` DATETIME(3) NULL,

    UNIQUE INDEX `Email_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_idFromUser_fkey` FOREIGN KEY (`idFromUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_idToUser_fkey` FOREIGN KEY (`idToUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
