create table Manutencao_equipamentos (
id int auto_increment not null primary key,
equipamento varchar(50),
data_manutençao date,
status_equipamento varchar(100),
custo varchar(6)
);

insert into Manutencao_equipamentos (equipamento, data_manutençao, status_equipamento, custo) values 
('Empilhadeira', '2024-02-04', 'quebrado', 'medio'),
('Caminhao', '2024-11-02', 'gasolina acabou', 'baixo'),
('Guindaste', '2024-12-11', 'gancho arrebentou', 'medio');

select * from Manutencao_equipamentos; 