CREATE TABLE `inventory` (
  `material` VARCHAR(255) NOT NULL PRIMARY KEY,
  `internalStock` INT NOT NULL,
  `externalStock` INT NOT NULL,
  `totalStock` INT NOT NULL,
  `date` VARCHAR(255) NOT NULL,
  `notes` TEXT
);
