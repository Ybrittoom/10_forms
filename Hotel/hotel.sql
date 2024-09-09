CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quarto` int DEFAULT NULL,
  `andar` int DEFAULT NULL,
  `cliente` varchar(50) DEFAULT NULL,
  `dias` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

SELECT * FROM hotel;