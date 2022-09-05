# Trybe Futebol Clube

## Iniciando a aplicação:

1) Clone o repositório na sua máquina, através do comando:
``git clone git@github.com:AdrianFadiga/frontend-secret.git``

2) Inicialize os servidores Back-End e Front-End no Docker, através do comando:
``npm run compose:up:dev``

Atenção:
- Você deve ter o Docker Compose instalado na sua máquina para inicializar a aplicação.
- O comando deve ser digitado na pasta raiz do projeto.

## Back-End:

O Back-End conta com as rotas:
- /login
- /teams
- /matches
- /leaderboards

Todas as rotas, exceto a de login, só podem ser acessadas por um usuário com um token válido.

## Front-End:

O Front-End foi fornecido pela Trybe, e consome as rotas criadas no Back-End.
Após a inicialização do servidor pelo Docker, para consumir a API, basta acessar a página:
localhost:3000