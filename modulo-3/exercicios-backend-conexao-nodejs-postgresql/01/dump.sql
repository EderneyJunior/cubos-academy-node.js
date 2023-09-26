-- Criando database biblioteca
create database biblioteca;

-- Criando tabela autores
create table autores (
	id serial primary key,
  nome text not null,
  idade integer
);


-- Criando a tabela livros
create table livros (
	id serial primary key,
  nome text not null,
  genero text,
  editora text,
  data_publicacao date,
  autor_id integer references autores(id)
);