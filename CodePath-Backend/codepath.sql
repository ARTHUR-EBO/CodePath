CREATE DATABASE IF NOT EXISTS codepath;
USE codepath;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    xp INT DEFAULT 0,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trilhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE licoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trilha_id INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    conteudo TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (trilha_id) REFERENCES trilhas(id)
);

CREATE TABLE exercicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    licao_id INT NOT NULL,
    enunciado TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (licao_id) REFERENCES licoes(id)
);

CREATE TABLE alternativas (
    id_alternativa INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    correta BOOLEAN NOT NULL,
    id_exercicio INT NOT NULL,
    FOREIGN KEY (id_exercicio) REFERENCES exercicios(id)
);

CREATE TABLE progresso_trilha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    trilha_id INT NOT NULL,
    progresso INT DEFAULT 0,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (trilha_id) REFERENCES trilhas(id)
);

CREATE TABLE progresso_licao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    licao_id INT NOT NULL,
    concluida BOOLEAN NOT NULL DEFAULT 0,
    data_conclusao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (licao_id) REFERENCES licoes(id)
);
