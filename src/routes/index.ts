import { Router } from "express";
import { userRoutes } from "./user.routes";
import { informativo } from "../middlewares";
import { empresaRoute } from "./empresa.routes";
import { roleRouter } from "./roles.routes";
import { vendaRoutes } from "./vendas.routes";
import { produtoRoute } from "./produto.routes";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const routes = Router();


// Configurações do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Lojas - Take Charger',
      version: '1.0.0',
      description: 'Documentação das rotas da API lojas. \n\nLink do repositório: <a href=\'https://github.com/OPT120-DEV-MOBILE/app-loja-back-end\'> app-loja-back-end </a>',
    },
    // servers: [
    //   {
    //     url: 'http://localhost:' + process.env.SERVER_PORT,
    //   },
    // ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);






/**
 * @swagger
 * tags:
 *   - name: Padrão
 *     description: Rotas padrões de teste
 */


/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Padrão
 *     summary: Rota Teste
 *     description: Rota padrão da API, para fins de teste (Hello Word).
 *     responses:
 *       200:
 *         description: JWT válido
 */
// Rota para testar o servidor
routes.get('/', informativo, (req, res) => {
  res.send('API Lojas BackEnd');
});



/**
 * @swagger
 * /api-docs:
 *   get:
 *     tags:
 *       - Padrão
 *     summary: Documentação da API
 *     description: Endpoint para visualizar toda a documentação de rotas da API
 *     responses:
 *       200:
 *         description: JWT válido
 */

// Rota para exibir a documentação no Swagger UI
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));




// Rotas separadas por tabelas/assuntos
routes.use('/users', userRoutes);

routes.use('/empresas', empresaRoute);

routes.use('/roles', roleRouter);

routes.use('/produtos', produtoRoute);

routes.use('/vendas', vendaRoutes);


export { routes };