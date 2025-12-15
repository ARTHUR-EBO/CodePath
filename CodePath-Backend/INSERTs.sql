-- ==============================
-- 4️⃣ Inserir usuário padrão
-- ==============================
INSERT INTO users (nome, email, senha)
VALUES ('Aluno Teste', 'teste@codepath.com', '123456');

-- ==============================
-- 5️⃣ Inserir trilha padrão
-- ==============================
INSERT INTO trilhas (titulo, descricao)
VALUES ('Trilha de Programação', 'Trilha básica de programação com várias linguagens e fundamentos');

-- ==============================
-- 6️⃣ Inserir lições
-- ==============================
INSERT INTO licoes (trilha_id, titulo, conteudo) VALUES
(1, 'Lógica de Programação', 'Conceito de algoritmos e lógica de programação\nVariáveis e tipos de dados\nOperadores aritméticos e lógicos\nEstruturas de decisão (if, else)\nEstruturas de repetição (for, while)'),
(1, 'HTML', 'Estrutura básica de um documento HTML (<!DOCTYPE html>, <html>, <head>, <body>)\nPrincipais tags: <h1> a <h6>, <p>, <a>, <img>, <ul>, <ol>, <li>\nAtributos comuns: href, src, alt'),
(1, 'CSS', 'Conceito de CSS e sua função na estilização de páginas HTML\nSeletores: por tag, classe (.) e id (#)\nPropriedades básicas: color, background-color, font-size, margin, padding\nBox model e posicionamento'),
(1, 'JavaScript', 'Introdução ao JavaScript e uso em páginas HTML\nVariáveis (var, let, const)\nFunções e eventos\nCondicionais e loops\nManipulação de elementos do DOM'),
(1, 'Python', 'Sintaxe básica e indentação\nTipos de dados: int, float, str, bool\nOperadores aritméticos e lógicos\nEstruturas condicionais e loops\nFunções'),
(1, 'Banco de Dados', 'Conceitos de banco de dados e SGBD\nTipos de dados básicos: INT, VARCHAR, DATE\nComandos SQL: SELECT, INSERT, UPDATE, DELETE\nNoções de chave primária e estrangeira');

-- ==============================
-- 7️⃣ Inserir exercícios
-- ==============================
-- Lição 1 – Lógica de Programação
INSERT INTO exercicios (licao_id, enunciado) VALUES
(1, 'Qual é o valor da variável x após a execução do código: x = 5 x = x + 3'),
(1, 'Qual estrutura é usada quando queremos repetir um bloco de código enquanto uma condição for verdadeira?'),
(1, 'Qual operador lógico representa "E"?');

-- Lição 2 – HTML
INSERT INTO exercicios (licao_id, enunciado) VALUES
(2, 'Qual tag é usada para criar um link?'),
(2, 'Qual atributo define o endereço de uma imagem?'),
(2, 'Qual tag representa um parágrafo?');

-- Lição 3 – CSS
INSERT INTO exercicios (licao_id, enunciado) VALUES
(3, 'Qual a sintaxe correta para mudar a cor do texto de um parágrafo para vermelho?'),
(3, 'Qual seletor CSS seleciona um elemento com id "menu"?'),
(3, 'Qual propriedade define o espaço interno de um elemento?');

-- Lição 4 – JavaScript
INSERT INTO exercicios (licao_id, enunciado) VALUES
(4, 'Qual comando exibe uma mensagem na tela do usuário?'),
(4, 'Como declarar uma variável que não pode ser alterada?'),
(4, 'Qual estrutura permite repetir código enquanto uma condição for verdadeira?');

-- Lição 5 – Python
INSERT INTO exercicios (licao_id, enunciado) VALUES
(5, 'Qual função imprime uma mensagem no console?'),
(5, 'Qual é a saída de len("Python")?'),
(5, 'Qual palavra-chave define uma função em Python?');

-- Lição 6 – Banco de Dados
INSERT INTO exercicios (licao_id, enunciado) VALUES
(6, 'Qual comando SQL seleciona dados de uma tabela?'),
(6, 'Qual comando adiciona um novo registro em uma tabela?'),
(6, 'Qual é a função de uma chave primária?');

-- ==============================
-- 8️⃣ Inserir alternativas
-- ==============================
-- Lição 1
INSERT INTO alternativas (texto, correta, id_exercicio) VALUES
('5', FALSE, 1),
('3', FALSE, 1),
('8', TRUE, 1),
('0', FALSE, 1),
('if', FALSE, 2),
('while', TRUE, 2),
('switch', FALSE, 2),
('function', FALSE, 2),
('&&', TRUE, 3),
('||', FALSE, 3),
('!', FALSE, 3),
('==', FALSE, 3);

-- Lição 2
INSERT INTO alternativas (texto, correta, id_exercicio) VALUES
('<link>', FALSE, 4),
('<a>', TRUE, 4),
('<p>', FALSE, 4),
('<href>', FALSE, 4),
('alt', FALSE, 5),
('src', TRUE, 5),
('href', FALSE, 5),
('title', FALSE, 5),
('<p>', TRUE, 6),
('<div>', FALSE, 6),
('<span>', FALSE, 6),
('<h1>', FALSE, 6);

-- Lição 3
INSERT INTO alternativas (texto, correta, id_exercicio) VALUES
('p { color: red; }', TRUE, 7),
('p { font-color: red; }', FALSE, 7),
('p { text-color: red; }', FALSE, 7),
('p { color: #fff; }', FALSE, 7),
('.menu', FALSE, 8),
('#menu', TRUE, 8),
('menu', FALSE, 8),
('*menu', FALSE, 8),
('margin', FALSE, 9),
('padding', TRUE, 9),
('border', FALSE, 9),
('gap', FALSE, 9);

-- Lição 4
INSERT INTO alternativas (texto, correta, id_exercicio) VALUES
('console.log("Oi")', FALSE, 10),
('alert("Oi")', TRUE, 10),
('print("Oi")', FALSE, 10),
('echo("Oi")', FALSE, 10),
('var x', FALSE, 11),
('let x', FALSE, 11),
('const x', TRUE, 11),
('static x', FALSE, 11),
('if', FALSE, 12),
('for', FALSE, 12),
('while', TRUE, 12),
('switch', FALSE, 12);

-- Lição 5
INSERT INTO alternativas (texto, correta, id_exercicio) VALUES
('echo()', FALSE, 13),
('print()', TRUE, 13),
('console.log()', FALSE, 13),
('display()', FALSE, 13),
('5', FALSE, 14),
('6', TRUE, 14),
('7', FALSE, 14),
('0', FALSE, 14),
('function', FALSE, 15),
('def', TRUE, 15),
('func', FALSE, 15),
('define', FALSE, 15);

-- Lição 6
INSERT INTO alternativas (texto, correta, id_exercicio) VALUES
('INSERT', FALSE, 16),
('UPDATE', FALSE, 16),
('SELECT', TRUE, 16),
('DELETE', FALSE, 16),
('SELECT', FALSE, 17),
('INSERT', TRUE, 17),
('UPDATE', FALSE, 17),
('DROP', FALSE, 17),
('Identificar unicamente cada registro', TRUE, 18),
('Conectar duas tabelas', FALSE, 18),
('Alterar dados', FALSE, 18),
('Excluir registros', FALSE, 18);