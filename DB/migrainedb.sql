-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema migrainedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `migrainedb` ;

-- -----------------------------------------------------
-- Schema migrainedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `migrainedb` DEFAULT CHARACTER SET utf8 ;
USE `migrainedb` ;

-- -----------------------------------------------------
-- Table `migraine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `migraine` ;

CREATE TABLE IF NOT EXISTS `migraine` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `intensity` INT(11) NOT NULL,
  `migraine_start_date` DATETIME NOT NULL,
  `migraine_end_date` DATETIME NULL DEFAULT NULL,
  `migraine_trigger` VARCHAR(200) NULL DEFAULT NULL,
  `type_of_treatment` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO migraine@localhost;
 DROP USER migraine@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'migraine'@'localhost' IDENTIFIED BY 'migraine';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'migraine'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `migraine`
-- -----------------------------------------------------
START TRANSACTION;
USE `migrainedb`;
INSERT INTO `migraine` (`id`, `intensity`, `migraine_start_date`, `migraine_end_date`, `migraine_trigger`, `type_of_treatment`) VALUES (1, 5, '2020-10-9', '2020-10-10', 'Stress', 'Cefaly');

COMMIT;

