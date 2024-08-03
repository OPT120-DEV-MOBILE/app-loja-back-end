import "express-async-errors";
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppErrors";

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);



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