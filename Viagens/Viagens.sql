use 10_tabelas;

create table Viagens (
id int not null auto_increment,
pais varchar(50),
cidade varchar(50),
duracao_dias int,
data_partida date,
valor decimal(10,2),
primary key(id)
);

insert into Viagens (pais, cidade, duracao_dias, data_partida, valor) values 
('Canada', 'Columbia Britanica', 21, '2024-11-07', 3200.00),
('Estados Unidos Da America', 'Nova Iorque', 14, '2024-09-10', 4200.00),
('Brasil', 'Sumare', 30, '2024-12-12', 2300.00);

select * from Viagens;