-- Criação da database
create database catalogo_pokemons;


-- Cricão da tabela usuarios
create table usuarios (
	id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
);

-- Cricção da tabela pokemons
create table pokemons (
	id serial primary key,
  usuario_id integer not null,
  nome text not null,
  habilidades text not null,
  apelido text
);
