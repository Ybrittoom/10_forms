create table Veterinaria (
id int not null auto_increment,
nome varchar(15),
familia varchar(10),
raça varchar(50),
dono varchar(50),
primary key(id)
);

insert into Veterinaria (nome , familia , raça, dono ) values 

('kenny', 'felino', 'siberiano', 'ygor'),
('alaska', 'canina', 'husk siberiano', 'rosekely'),
('negao', 'felina', 'ragamuffin', 'otavio'),
('princesa', 'canina', 'pitMonster', 'larissa');

select * from Veterinaria;