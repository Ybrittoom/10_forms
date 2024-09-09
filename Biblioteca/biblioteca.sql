CREATE TABLE `biblioteca` (
  `id` int NOT NULL AUTO_INCREMENT,
  `livro` varchar(100) DEFAULT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `ano_de_publicacao` date DEFAULT NULL,
  PRIMARY KEY (`id`)
);


SELECT * FROM biblioteca;