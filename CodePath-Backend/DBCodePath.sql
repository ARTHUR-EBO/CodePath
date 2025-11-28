CREATE DATABASE IF NOT EXISTS DBCODEPATH;
USE DBCODEPATH;

CREATE TABLE usuario ( 
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trilha (
  id_trilha INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  id_usuario INT NOT NULL,
  CONSTRAINT fk_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE licao (
  id_licao INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  conteudo TEXT NOT NULL,
  id_trilha INT NOT NULL,
  CONSTRAINT fk_licao_trilha FOREIGN KEY (id_trilha) REFERENCES trilha(id_trilha)
);

CREATE TABLE exercicio (
  id_exercicio INT AUTO_INCREMENT PRIMARY KEY,
  enunciado TEXT NOT NULL,
  tipo ENUM('quiz','codigo','teoria') NOT NULL,
  id_licao INT NOT NULL,
  CONSTRAINT fk_exercicio_licao FOREIGN KEY (id_licao) REFERENCES licao(id_licao)
);

CREATE TABLE alternativa (
  id_alternativa INT AUTO_INCREMENT PRIMARY KEY,
  texto TEXT NOT NULL,
  correta BOOLEAN NOT NULL DEFAULT FALSE,
  id_exercicio INT NOT NULL,
  CONSTRAINT fk_alternativa_exercicio FOREIGN KEY (id_exercicio) REFERENCES exercicio(id_exercicio)
);

CREATE TABLE progresso_trilha (
  id_progresso_trilha INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_trilha INT NOT NULL,
  status ENUM('em_andamento','concluida','pausada') DEFAULT 'em_andamento',
  atualizado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_progtr_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  CONSTRAINT fk_progtr_trilha FOREIGN KEY (id_trilha) REFERENCES trilha(id_trilha),
  UNIQUE KEY ux_usuario_trilha (id_usuario, id_trilha) -- evita duplicatas
);

CREATE TABLE progresso_licao (
  id_progresso_licao INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_licao INT NOT NULL,
  status ENUM('pendente','em_andamento','concluida') DEFAULT 'pendente',
  data_conclusao DATETIME NULL,
  CONSTRAINT fk_proglic_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  CONSTRAINT fk_proglic_licao FOREIGN KEY (id_licao) REFERENCES licao(id_licao),
  UNIQUE KEY ux_usuario_licao (id_usuario, id_licao)
);