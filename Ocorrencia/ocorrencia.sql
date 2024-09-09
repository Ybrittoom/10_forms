create table ocorrencia (
id int not null auto_increment primary key,
nome varchar(40),
local_ocorrido varchar(100),
data_ocorrida date,
codigo_penal int
);

insert into ocorrencia (nome, local_ocorrido, data_ocorrida, codigo_penal) values
('Marta', 'superMercado', '2024-02-04', 121),
('Marta', 'superMercado', '2024-02-04', 121),
('Pedro', 'centro da cidade', '2023-12-31', 133),
('Maria', 'empresa', '2021-01-03', 138);

select * from ocorrencia;