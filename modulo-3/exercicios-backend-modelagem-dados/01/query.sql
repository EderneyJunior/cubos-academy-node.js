-- Criando o banco de dados
create database ecommerce;


-- Criando a tabela categorias
create table categorias (
	id serial primary key,
  nome varchar(50) not null
);

-- Criando a tabela produtos
create table produtos (
	id serial primary key,
  nome varchar(100) not null,
  descricao text,
  preco integer not null,
  quantidade_em_estoque integer,
  categoria_id integer references categorias(id)
);


-- Criando a tabela clientes
create table clientes (
	cpf char(11) unique,
  nome varchar(150) not null
);


-- Criando a tabela vendedores
create table vendedores (
	cpf char(11) unique,
  nome varchar(150) not null
);


-- Criação da tabela pedidos
create table pedidos (
	id serial primary key,
  valor integer not null,
  cliente_cpf char(11) references clientes(cpf),
  vendedor_cpf char(11) references vendedores(cpf)
);


-- Criação da tabela dos itens do pedido.
create table itens_do_pedido (
	id serial primary key,
  pedido_id integer references pedidos(id),
  quantidade integer not null,
  produto_id integer references produtos(id)
);


-- Inserindo dados na tabela categorias.
insert into categorias (nome)
values ('frutas'), ('verduras'), ('massas'), ('bebidas'), ('utilidades');


-- Inserindo profutos na tabelas produtos
insert into produtos
(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values
('Maça', 'Fonte de potássio e fibras', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais.',
690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original.', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',
 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio)
 livre de sódio e com pH neutro.', 130, 478, 4),
 ('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
 ('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
 ('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
 ('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
 ('Manga', '	Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
 ('Uva', 'NÃO CONTÉM GLÚTEN', 420, 90, 1);
 

 
 -- Adicionando clientes
 insert into clientes (cpf, nome)
 values
 ('80371350042', 'José Augusto Silva'),
 ('67642869061', 'Antonio Oliveira'),
 ('63193310034', 'Ana Rodrigues'),
 ('75670505018', 'Maria da Conceição');
 
 
 -- Adicionando vendedores
 insert into vendedores (cpf, nome)
 values
 ('82539841031', 'Rodrigo Sampaio'),
 ('23262546003', 'Beatriz Souza Santos'),
 ('28007155023', 'Carlos Eduardo');
 
 
 -- Adicinando os pedidos do José Algusto Silva e do vendedor Carlos Eduardo.
insert Into pedidos (valor, cliente_cpf, vendedor_cpf)
values
(300, '80371350042', '28007155023'),
(700, '80371350042', '28007155023'),
 (1200, '80371350042', '28007155023'),
 (1000, '80371350042', '28007155023'),
 (90, '80371350042', '28007155023');
 
 
 -- Adicioando os itens do pedido do José Algusto Silva.
 insert into itens_do_pedido (pedido_id, quantidade, produto_id)
 values
 (1, 1, 1),
 (2, 1, 10),
 (3, 6, 11),
 (4, 1, 15),
 (5, 5, 2);

 
-- Abatendo compras do José Algusto.
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Mamão';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Refrigerante Pepsi 2l';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Cerveja Heineken 600ml';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Escova dental';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Maça';


-- Compras de Ana Rodrigues e vendas de Beatriz Souza Santos.
insert into pedidos (valor, cliente_cpf, vendedor_cpf)
values
(198, '63193310034', '23262546003'),
(420, '63193310034', '23262546003'),
(300, '63193310034', '23262546003'),
(125, '63193310034', '23262546003'),
(235, '63193310034', '23262546003');

insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values
(6, 10, 17),
(7, 3, 18),
(8, 5, 1),
(9, 10, 5),
(10, 2, 6);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where nome = 'Manga';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where nome = 'Uva';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Mamão';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 10 where nome = 'Tomate';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where nome = 'Acelga';



-- Pedidos da Maria da Conceição e vendas de Beatriz Souza Santos.
insert into pedidos (valor, cliente_cpf, vendedor_cpf)
values
(2350, '75670505018', '23262546003'),
(130, '75670505018', '23262546003'),
(198, '75670505018', '23262546003');


insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values
(11, 1, 13),
(12, 6, 12),
(13, 5, 17);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 5 where nome = 'Manga';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Agua mineral sem gás';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Vassoura';




-- Compras de Maria da Conceição e vendas de Rodrigo Sampaio.
insert into pedidos (valor, cliente_cpf, vendedor_cpf)
values
(2290, '75670505018', '82539841031'),
(420, '75670505018', '82539841031'),
(690, '75670505018', '82539841031'),
(300, '75670505018', '82539841031'),
(125, '75670505018', '82539841031'),
(235, '75670505018', '82539841031');

insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values
(14, 1, 16),
(15, 6, 18),
(16, 1, 7),
(17, 3, 1),
(18, 20, 5),
(19, 2, 6);

update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Balde para lixo 50l';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 6 where nome = 'Uva';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Macarrão parafuso';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where nome = 'Mamão';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 20 where nome = 'Tomate';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where nome = 'Acelga';



-- Compras de Antonio Oliveira e vendas de Rodrigo Sampaio
insert into pedidos (valor, cliente_cpf, vendedor_cpf)
values
(420, '67642869061', '82539841031'),
(875, '67642869061', '82539841031'),
(198, '67642869061', '82539841031'),
(125, '67642869061', '82539841031'),
(1200, '67642869061', '82539841031');


insert into itens_do_pedido (pedido_id, quantidade, produto_id)
values
(20, 8, 18),
(21, 1, 8),
(22, 3, 17),
(23, 8, 5),
(24, 2, 11);


update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where nome = 'Uva';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 1 where nome = 'Massa para lasanha';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 3 where nome = 'Manga';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 8 where nome = 'Tomate';
update produtos set quantidade_em_estoque = quantidade_em_estoque - 2 where nome = 'Cerveja Heineken 600ml';