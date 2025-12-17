Pré-requisitos

Node.js 18+

Express

CORS

Multer

MySQL 

(XAMPP ou Docker)

Git

Passo a passo
git clone <repositorio>
cd CodePath-Backend
npm install


Configurar .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=codepath
DB_PORT=3306
JWT_SECRET=chave_super_secreta
PORT=3000


Criar banco de dados
mysql -u root -p < codepath.sql
Rodar servidor
node server.js

Servidor disponível em:
http://localhost:3000