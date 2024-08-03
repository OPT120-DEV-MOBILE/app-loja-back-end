import { Router } from "express";

import { verificaJWT } from "../middlewares/verificaJWT";
import { GetAllEmpresasController } from "../controllers/EmpresaController";

const getAllEmpresas = new GetAllEmpresasController();
const empresaRoute = Router();


// Rota para testar o servidor
empresaRoute.get('/', verificaJWT, getAllEmpresas.handle);


export { empresaRoute };
