README.md
 CodePath Backend
Backend de uma plataforma educacional EAD (Ensino a Distância) baseada em trilhas de aprendizado, com lições, exercícios, alternativas, sistema de XP e acompanhamento de progresso do usuário.


 Objetivo do Projeto
Fornecer uma API REST organizada e escalável para suportar plataformas EAD, permitindo:
Organização de conteúdos em trilhas
Avaliação por exercícios de múltipla escolha
Gamificação por XP
Monitoramento de progresso por lição e trilha



Funcionalidades Principais
Cadastro e autenticação de usuários (JWT)
Criação e listagem de trilhas
Gerenciamento de lições e conteúdos
Exercícios com alternativas corretas/incorretas
Sistema de XP por respostas
Progresso por lição (concluída/não concluída)
Progresso percentual por trilha


Arquitetura
O projeto segue o padrão MVC (Model–View–Controller):
Models: acesso ao banco de dados
Controllers: regras de negócio
Route: definição das rotas da API
Essa separação facilita manutenção, testes e evolução do sistema.




Tecnologias Utilizadas
Node.js (>= 18)
Express
MySQL
mysql2/promise
JWT (jsonwebtoken)
bcrypt
dotenv
cors




instrucoes_instalacao.md
Resumo rápido:
npm install
npm run dev


 
Documentação da API
A descrição detalhada de todas as rotas, métodos HTTP e exemplos de JSON está disponível em:
guia_rotas_api.md
Estrutura do Projeto


A organização de pastas e arquivos está documentada em:
estrutura_projeto.md
Segurança
Senhas criptografadas com bcrypt
Autenticação via JWT
Variáveis sensíveis protegidas no arquivo .env


Testes de API
As rotas podem ser testadas utilizando:
Thunder Client (VS Code)
Postman
Insomnia


Status do Projeto
Funcional 
Estrutura consolidada
Pronto para uso acadêmico e projetos EAD

Melhorias Futuras (Roadmap)
Middleware de autenticação por perfil
Histórico de respostas por usuário
Ranking global de XP
Painel administrativo
Integração com frontend (React / Vue)



Licença

Projeto desenvolvido para fins educacionais.