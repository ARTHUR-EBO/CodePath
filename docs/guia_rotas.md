Usuário
🔹 Registrar
POST /api/user/register

Body:
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}
🔹 Login
POST /api/user/login



Resposta:
{
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com",
    "xp": 0
  }
}
🔹 Buscar usuário por ID
GET /api/user/:id
Status da API
GET /


Resposta:
{ "message": "API CodePath funcionando!" }
✅ checklist_publicacao.md
Backend




Segurança




Produção