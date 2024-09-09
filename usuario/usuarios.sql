-- Criação da Tabela
CREATE TABLE `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `idade` TINYINT DEFAULT NULL,
  `sexo` VARCHAR(10) DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(16) DEFAULT NULL,
  `endereco` VARCHAR(100) DEFAULT NULL, 
  PRIMARY KEY (`id`)
);


SELECT * FROM `usuarios`;
