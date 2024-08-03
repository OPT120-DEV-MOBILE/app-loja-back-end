import { Router } from "express";

import { verificaJWT } from "../middlewares/verificaJWT";
import { GetAllRolesController } from "../controllers/RolesController";

const getAllRoles = new GetAllRolesController();
const roleRouter = Router();


// Rota para testar o servidor
roleRouter.get('/', verificaJWT, getAllRoles.handle);


export { roleRouter };
