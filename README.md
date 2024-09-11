# Backend - App Lojas

Este é o backend do aplicativo **App Lojas**, desenvolvido para gerenciar diversos setores de lojas, controlando empresas, funcionários, clientes, produtos e estoque, com controle de vendas e geração de relatórios.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript/TypeScript no backend.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **bcrypt**: Biblioteca para hash de senhas.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **prisma**: ORM para Node.js e TypeScript.

## Requisitos

Antes de iniciar o projeto, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) - versão LTS recomendada.
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar as dependências.

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### 1. Clone o repositório

```bash
git clone https://github.com/OPT120-DEV-MOBILE/app-loja-back-end
cd app-loja-back-end
```

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
DATABASE_URL=SEU_BANCO_DE_DADOS
SERVER_PORT=SUA_PORTA
JWT_SECRET=SUA_CHAVE_SECRETA
```

### 4. Execute o gerador de prisma

```bash
npx prisma generate
```

ou

```bash
yarn prisma generate
```

### 5. Execute as migrations

```bash
npx prisma migrate dev
```

ou

```bash
yarn prisma migrate dev
```

### 6. Execute o populate

```bash
node ./prisma/populate.js
```

### 7. Inicie o servidor

```bash
npm run dev
```

ou

```bash
yarn dev
```

## Acesso Padrão

Após executar o comando `populate`, o banco de dados será preenchido com dados de teste. Utilize as credenciais abaixo para acessar o sistema:

- **Email**: <admin@admin.com>
- **Senha**: 123456@

## Documentação

A documentação da API está disponível em [http://localhost:3000/api-docs](http://localhost:3333/api-docs) após iniciar o servidor.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
