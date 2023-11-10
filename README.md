# Teste Emprego 01: BackStore Inc - API de Gerenciamento de Inventário

Este projeto é uma API RESTful para gerenciar um inventário de produtos. Foi desenvolvido como parte de um teste de emprego, focando em operações CRUD para produtos.

## Configuração e Execução

### Pré-requisitos

- Node.js versão 20 ou superior.
- Npm.
- Git.

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/profissao-dev-backend-javascript/teste-emprego-01-back-store-inc.git
   ```
2. Entre no diretório do projeto:
   ```
   cd teste-emprego-01-back-store-inc
   ```
3. Instale as dependências:
   ```
   npm ci
   ```

### Configuração do Ambiente

1. Duplique o arquivo `.env.example` e renomeie para `.env`.
2. Preencha as variáveis de ambiente no arquivo `.env` com as credenciais do banco de dados fornecidas por e-mail.

### Executando o Projeto

- Para iniciar a API em modo de desenvolvimento:
  ```
  npm run dev
  ```
- Para iniciar em modo de produção:
  ```
  npm start
  ```

## Endpoints da API

- **GET `/`**: Endpoint principal, retorna uma mensagem de boas vindas.
- **CRUD de Produtos `/product`**:
  - **GET `/product`**: Lista todos os produtos.
  - **GET `/product/:id`**: Obtém um produto pelo ID.
  - **POST `/product`**: Cria um novo produto.
  - **PUT `/product/:id`**: Atualiza um produto existente pelo ID.
  - **DELETE `/product/:id`**: Remove um produto pelo ID.
