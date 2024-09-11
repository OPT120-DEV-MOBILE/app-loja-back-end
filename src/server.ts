import "express-async-errors";
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppErrors";
import swaggerAutoGen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Swagger
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.ts'];
const doc = {
  info: {
    version: "1.0.0",
    title: "API Loja",
    description: "Documentação da API Loja",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    { name: "Vendas", description: "Endpoints relacionados a vendas" },
    { name: "Produtos", description: "Endpoints relacionados a produtos" },
    { name: "Usuários", description: "Endpoints relacionados a usuários" },
    { name: "Empresas", description: "Endpoints relacionados a empresas" },
    { name: "Roles", description: "Endpoints relacionados a roles" },
  ],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
}

swaggerAutoGen(outputFile, endpointsFiles, doc);


const swaggerDocument = JSON.parse(require('fs').readFileSync(outputFile, 'utf-8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Função para tratar erros e mostra-lo de forma mais amigável
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError){
    console.log('\nErro:');
    console.log(err.message);

    return res.status(err.statusCode).json({
      status: 'error',
      error: err.message
    });
  }

  console.log('\nErro:');
  console.log(err.message);

  return res.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${err.message}`
  });
});





// Inicializa o servidor na porta da variavel de ambiente SERVER_PORT
app.listen(process.env.SERVER_PORT, () => {
  console.log('= = = = = = = = = = = = = = = = = = = =');
  console.log('Server is running on http://localhost:' + process.env.SERVER_PORT);
  console.log('= = = = = = = = = = = = = = = = = = = =');
});