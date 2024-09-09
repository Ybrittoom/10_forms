CREATE TABLE `alunos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aluno` varchar(30) DEFAULT NULL,
  `ausente` varchar(50) DEFAULT NULL,
  `notas` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

SELECT * FROM alunos;