use 10_tabelas;

create table exames (
id int not null auto_increment,
exame varchar(30),
tipo varchar(50),
data_realizaçao date,
resultado varchar(10),
primary key(id)
);

insert into exames ( exame, tipo, data_realizaçao, resultado) values 
('Tomografia', 'imagem', '2022-11-04', 'Normal'),
('Radiografia', 'imagem', '2024-02-19', 'Alteracao'),
('Ressonância', ' radiologia', '2023-12-12', 'Normal'),
('Hemograma', 'laboratorial', '2024-07-08', 'Alteracao'),
('Mineralograma', 'laboratorial','2024-11-02', 'Normal');

select * from exames;