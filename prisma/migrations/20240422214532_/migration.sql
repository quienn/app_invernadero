-- CreateTable
CREATE TABLE `Greenhouse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `humidity` INTEGER NOT NULL,
    `moisture` INTEGER NOT NULL,
    `wateredAt` DATETIME(3) NULL,
    `nextWaterAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
