-- LÓGICA DE PROGRAMAÇÃO
INSERT INTO licoes (trilha_id, titulo, conteudo)
SELECT 1, 'Lógica de Programação',
'Aprenda os conceitos básicos de lógica para resolver problemas com algoritmos.'
WHERE NOT EXISTS (
    SELECT 1 FROM licoes WHERE titulo = 'Lógica de Programação'
);

-- HTML
INSERT INTO licoes (trilha_id, titulo, conteudo)
SELECT 1, 'HTML',
'HTML é a linguagem de marcação usada para estruturar páginas na web.'
WHERE NOT EXISTS (
    SELECT 1 FROM licoes WHERE titulo = 'HTML'
);

-- CSS
INSERT INTO licoes (trilha_id, titulo, conteudo)
SELECT 1, 'CSS',
'CSS é usado para estilizar páginas HTML, controlando cores, layouts e fontes.'
WHERE NOT EXISTS (
    SELECT 1 FROM licoes WHERE titulo = 'CSS'
);

-- JAVASCRIPT
INSERT INTO licoes (trilha_id, titulo, conteudo)
SELECT 1, 'JavaScript',
'JavaScript permite criar páginas interativas e dinâmicas.'
WHERE NOT EXISTS (
    SELECT 1 FROM licoes WHERE titulo = 'JavaScript'
);

-- PYTHON
INSERT INTO licoes (trilha_id, titulo, conteudo)
SELECT 1, 'Python',
'Python é uma linguagem simples e poderosa, muito usada em automação e dados.'
WHERE NOT EXISTS (
    SELECT 1 FROM licoes WHERE titulo = 'Python'
);

-- BANCO DE DADOS
INSERT INTO licoes (trilha_id, titulo, conteudo)
SELECT 1, 'Banco de Dados',
'Aprenda como os dados são armazenados, organizados e consultados.'
WHERE NOT EXISTS (
    SELECT 1 FROM licoes WHERE titulo = 'Banco de Dados'
);

-- LÓGICA DE PROGRAMAÇÃO
INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é um algoritmo?'
FROM licoes WHERE titulo = 'Lógica de Programação';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é uma variável na programação?'
FROM licoes WHERE titulo = 'Lógica de Programação';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é uma estrutura de decisão?'
FROM licoes WHERE titulo = 'Lógica de Programação';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Para que serve um laço de repetição?'
FROM licoes WHERE titulo = 'Lógica de Programação';

-- HTML
INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é HTML?'
FROM licoes WHERE titulo = 'HTML';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Para que serve a tag <head>?'
FROM licoes WHERE titulo = 'HTML';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Qual tag é usada para criar um link?'
FROM licoes WHERE titulo = 'HTML';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Qual a função da tag <form>?'
FROM licoes WHERE titulo = 'HTML';

-- CSS
INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é CSS?'
FROM licoes WHERE titulo = 'CSS';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Qual propriedade altera a cor do texto?'
FROM licoes WHERE titulo = 'CSS';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é o modelo de caixa (box model)?'
FROM licoes WHERE titulo = 'CSS';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Qual propriedade é usada para espaçamento interno?'
FROM licoes WHERE titulo = 'CSS';

-- JAVASCRIPT
INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é JavaScript?'
FROM licoes WHERE titulo = 'JavaScript';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Como declarar uma variável em JavaScript?'
FROM licoes WHERE titulo = 'JavaScript';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é uma função?'
FROM licoes WHERE titulo = 'JavaScript';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Para que serve o DOM?'
FROM licoes WHERE titulo = 'JavaScript';

-- PYTHON
INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é Python?'
FROM licoes WHERE titulo = 'Python';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Como imprimir algo na tela em Python?'
FROM licoes WHERE titulo = 'Python';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é uma lista em Python?'
FROM licoes WHERE titulo = 'Python';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Para que serve a indentação em Python?'
FROM licoes WHERE titulo = 'Python';

-- BANCO DE DADOS
INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é um banco de dados?'
FROM licoes WHERE titulo = 'Banco de Dados';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que significa SQL?'
FROM licoes WHERE titulo = 'Banco de Dados';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'O que é uma chave primária?'
FROM licoes WHERE titulo = 'Banco de Dados';

INSERT INTO exercicios (licao_id, enunciado)
SELECT id, 'Para que serve um relacionamento entre tabelas?'
FROM licoes WHERE titulo = 'Banco de Dados';

-- LÓGICA DE PROGRAMAÇÃO
INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um passo a passo para resolver um problema', 1, id
FROM exercicios WHERE enunciado = 'O que é um algoritmo?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um erro no código', 0, id FROM exercicios WHERE enunciado = 'O que é um algoritmo?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um tipo de hardware', 0, id FROM exercicios WHERE enunciado = 'O que é um algoritmo?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um banco de dados', 0, id FROM exercicios WHERE enunciado = 'O que é um algoritmo?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um espaço na memória para armazenar dados', 1, id
FROM exercicios WHERE enunciado = 'O que é uma variável na programação?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um comando de repetição', 0, id FROM exercicios WHERE enunciado = 'O que é uma variável na programação?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um erro lógico', 0, id FROM exercicios WHERE enunciado = 'O que é uma variável na programação?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um banco de dados', 0, id FROM exercicios WHERE enunciado = 'O que é uma variável na programação?';

-- HTML
INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Uma linguagem de marcação para estruturar páginas', 1, id
FROM exercicios WHERE enunciado = 'O que é HTML?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Uma linguagem de programação', 0, id FROM exercicios WHERE enunciado = 'O que é HTML?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um banco de dados', 0, id FROM exercicios WHERE enunciado = 'O que é HTML?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um sistema operacional', 0, id FROM exercicios WHERE enunciado = 'O que é HTML?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT '<a>', 1, id
FROM exercicios WHERE enunciado = 'Qual tag é usada para criar um link?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT '<link>', 0, id FROM exercicios WHERE enunciado = 'Qual tag é usada para criar um link?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT '<href>', 0, id FROM exercicios WHERE enunciado = 'Qual tag é usada para criar um link?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT '<url>', 0, id FROM exercicios WHERE enunciado = 'Qual tag é usada para criar um link?';

-- CSS
INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Uma linguagem para estilizar páginas HTML', 1, id
FROM exercicios WHERE enunciado = 'O que é CSS?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Uma linguagem de banco de dados', 0, id FROM exercicios WHERE enunciado = 'O que é CSS?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um framework JavaScript', 0, id FROM exercicios WHERE enunciado = 'O que é CSS?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um servidor web', 0, id FROM exercicios WHERE enunciado = 'O que é CSS?';

-- JAVASCRIPT
INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Uma linguagem que adiciona interatividade às páginas', 1, id
FROM exercicios WHERE enunciado = 'O que é JavaScript?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um banco de dados', 0, id FROM exercicios WHERE enunciado = 'O que é JavaScript?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Um sistema operacional', 0, id FROM exercicios WHERE enunciado = 'O que é JavaScript?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Uma linguagem de marcação', 0, id FROM exercicios WHERE enunciado = 'O que é JavaScript?';

-- PYTHON
INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'print()', 1, id
FROM exercicios WHERE enunciado = 'Como imprimir algo na tela em Python?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'echo()', 0, id FROM exercicios WHERE enunciado = 'Como imprimir algo na tela em Python?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'console.log()', 0, id FROM exercicios WHERE enunciado = 'Como imprimir algo na tela em Python?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'write()', 0, id FROM exercicios WHERE enunciado = 'Como imprimir algo na tela em Python?';

-- BANCO DE DADOS
INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Identifica unicamente um registro', 1, id
FROM exercicios WHERE enunciado = 'O que é uma chave primária?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Armazena textos grandes', 0, id FROM exercicios WHERE enunciado = 'O que é uma chave primária?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Conecta o banco à internet', 0, id FROM exercicios WHERE enunciado = 'O que é uma chave primária?';

INSERT INTO alternativas (texto, correta, id_exercicio)
SELECT 'Cria tabelas automaticamente', 0, id FROM exercicios WHERE enunciado = 'O que é uma chave primária?';
