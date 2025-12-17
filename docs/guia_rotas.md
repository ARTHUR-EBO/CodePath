# Guia de Rotas – Fluxo Completo da Aplicação

Este guia explica **exatamente** como uma requisição percorre o sistema, desde o formulário no frontend até o banco de dados e o retorno da resposta.

O foco é **apenas** neste fluxo:

**Formulário → JavaScript → Rota → Controller → Model → Banco de Dados → Retorno**

---

## 1️⃣ Formulário (Frontend)

O processo começa quando o usuário interage com um formulário ou ação da interface (ex: clicar em um botão, enviar uma resposta, concluir uma lição).

Exemplos de ações:

* Enviar login
* Concluir uma lição
* Responder um exercício

O formulário **não fala diretamente com o backend**. Ele apenas dispara um evento em JavaScript.

---

## 2️⃣ Arquivo JavaScript (Frontend)

O arquivo `.js` do frontend captura a ação do usuário e faz uma requisição HTTP para a API.

Normalmente usando:

* `fetch()`
* método `POST`, `GET`, `PUT` ou `DELETE`

Exemplo conceitual:

```js
fetch("/api/progresso-licao/concluir", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ user_id, licao_id })
});
```

Esse JavaScript é responsável por:

* Montar os dados
* Enviar para a rota correta
* Receber a resposta

---

## 3️⃣ Rota (Routes)

A rota é o **ponto de entrada da API**.

Ela:

* Define a URL
* Define o método HTTP
* Encaminha a requisição para o controller correto

Exemplo conceitual:

```js
router.post("/concluir", progressoLicaoController.marcarConcluidaRoute);
```

A rota **não contém lógica de negócio**.
Ela apenas direciona o fluxo.

---

## 4️⃣ Controller

O controller é o **cérebro da aplicação**.

Responsabilidades:

* Validar dados recebidos
* Controlar regras de negócio
* Chamar models
* Decidir o que será retornado

Exemplo de responsabilidades:

* Verificar se a lição já foi concluída
* Calcular progresso
* Chamar atualização da trilha

O controller **não acessa o banco diretamente**, ele usa os models.

---

## 5️⃣ Model

O model é responsável por **toda comunicação com o banco de dados**.

Ele:

* Executa SQL
* Insere dados
* Atualiza registros
* Busca informações

Exemplo de responsabilidades:

* Inserir progresso da lição
* Atualizar progresso da trilha
* Buscar registros existentes

O model **não contém regras de negócio**, apenas operações de dados.

---

## 6️⃣ Banco de Dados

O banco de dados é onde tudo é persistido.

Ele armazena:

* Usuários
* Trilhas
* Lições
* Progresso

Operações comuns:

* `INSERT`
* `SELECT`
* `UPDATE`

O banco **não sabe nada sobre frontend ou regras**, apenas executa comandos.

---

## 7️⃣ Retorno da Resposta

Após o banco responder:

1. O **model** devolve os dados ao controller
2. O **controller** monta a resposta final
3. A **rota** envia o `JSON` de volta
4. O **JavaScript** recebe a resposta
5. O **frontend** atualiza a interface

Exemplo de retorno:

```json
{
  "message": "Lição marcada como concluída",
  "progresso": 40
}
```

---

## 📌 Resumo do Fluxo

```text
Formulário
   ↓
JavaScript (Frontend)
   ↓
Rota (API)
   ↓
Controller
   ↓
Model
   ↓
Banco de Dados
   ↑
Model
   ↑
Controller
   ↑
Resposta (JSON)
   ↑
Frontend
```

---

Este padrão garante:

* Organização
* Manutenção fácil
* Código limpo
* Separação correta de responsabilidades
