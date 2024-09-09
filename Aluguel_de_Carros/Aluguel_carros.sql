use 10_tabelas;

create table Aluguel_carros (
id int primary key not null auto_increment,
Carro varchar(15),
Marca varchar(30),
Ano int,
Modelo varchar(15),
Preço decimal(10,2)
);

insert into Aluguel_carros (Marca, Carro, Ano, Modelo, Preço) values 
('BMW', 'BMW X6', 2024, 'X6', 595000.00),
('BMW', 'BMW 5 Series', 2024, ' 5 Series',  272000.00),
('Mercedes', 'Mercedes-Benz', 2024, 'GLE', 421000.00),
('Mercedes', 'Mercedes-Benz', 2024, ' C-Class', 243500.00),
('McLaren', 'McLaren 720S', 2024, '720S', 1535000.00),
('McLaren', 'McLaren Artura', 2024,'Artura', 1096000.00);


select	* from Aluguel_carros
