--criacao do banco de dados
create database exercicio_crud_sql;

-- criação da tabela
create table usuarios (
	id serial,
  	nome text not null,
  	idade smallint,
  	email varchar(50),
  	senha varchar(8) not null
);



-- adição de usuarios
insert into usuarios
(nome, idade, email, senha)
values
('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey ', 30, 'raja.feugiat@nonummy.com', 's5F51T7L'),
('Elton D. Olsen', 29, 'auctor@duiFuscediam.edu', 'k5X25B0R'),
('Shelley E. Frederick', 20, 'raja.feugiat@nonummy.com', 'u2D18F6E');


-- atualizar nome errado do usuaio com email raja.feugiat@nonummy.com
update usuarios
set nome = 'Raja W. Coffey Thomas'
where email = 'raja.feugiat@nonummy.com';



-- excluir o ultimo registro com o email igual e proibir emails iguais
delete from usuarios where id = 5;

alter table usuarios add constraint email_unique_usuarios unique(email);



-- adicionar mais usuarios
insert into usuarios
(nome, idade, email, senha)
values
('Jermaine G. Sellers', 16, 'ligula.Nullam@tortordictum.co.uk', 'o2P56U9U'),
('James D. Kennedy', 23, 'amet@Nulladignissim.com', 'q6B78V3V'),
('Amelia S. Harris', 29, 'nec.metus.facilisis@vitaealiquet.edu', 'l4S64Y3A'),
('Joel M. Hartman', 18, 'montes.nascetur@odiotristique.co.uk', 'c4Q27D7O'),
('Elmo K. Greer', 18, 'risus.Duis@eget.ca', 'e3P92I7R');

-- adicionando um novo campo na tabela usuarios
alter table usuarios add column situacao boolean default true;


-- alterando a situação do usuario com email montes.nascetur@odiotristique.co.uk
update usuarios
set situacao = false
where email = 'montes.nascetur@odiotristique.co.uk';


-- alterando a senha que possui o email risus.Duis@eget.ca, alteração da sua senha para k9P31H1O
update usuarios
set senha = 'k9P31H1O'
where email = 'risus.Duis@eget.ca';


-- tirando a coluna idade e adicioando a coluna data de nascimento
alter table usuarios drop column idade, add column data_nascimento date;


-- atualizar os seguintes registros
--a) O registro que possui o e-mail `auctor@duiFuscediam.edu` nasceu em `1991-09-29`;
--a) O registro que possui o e-mail `nec.metus.facilisis@vitaealiquet.edu` nasceu em `1988-11-02`;
update usuarios
set data_nascimento = cast('1991-09-29' as date)
where email = 'auctor@duiFuscediam.edu';

update usuarios
set data_nascimento = cast('1988-11-02' as date)
where email = 'nec.metus.facilisis@vitaealiquet.edu';



-- deletar usuarios sem data de nascimento
delete from usuarios
where data_nascimento is null;

-- solicidatçao para não poder registrar usuarios sem data de nascimento
alter table usuarios alter column data_nascimento set not null;


-- cadastrar 2 usuarios
insert into usuarios
(nome, data_nascimento, email, senha)
values
('Tate I. Dean', cast('1989-05-01' as date), 'Nunc@etmagnis.edu', 'd3V25D6Y'),
('Arsenio K. Harmon', cast('1985-10-23' as date), 'adipiscing.elit@turpis.com', 'm3T58S0C');
