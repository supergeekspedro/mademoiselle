CREATE DATABASE mademoiselle;

\c mademoiselle;

CREATE TABLE postagem(
    autor VARCHAR(60) NOT NULL,
    descricao TEXT NOT NULL
);