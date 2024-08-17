import { Router } from "express";
import { userRoutes } from "./user.routes";
import { informativo } from "../middlewares";
import { empresaRoute } from "./empresa.routes";
import { roleRouter } from "./roles.routes";
import { produtoRoute } from "./produto.routes";


const routes = Router();


// Rota para testar o servidor
routes.get('/', informativo, (req, res) => {
    res.send('Projeto Tennis - API BackEnd');
  });


routes.use('/users', userRoutes);

routes.use('/empresas', empresaRoute);

routes.use('/roles', roleRouter);

routes.use('/produtos', produtoRoute);

routes.use('/vendas', userRoutes);


export { routes };