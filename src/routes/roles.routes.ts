import { Router } from "express";

import { verificaJWT } from "../middlewares/verificaJWT";
import { informativo } from "../middlewares";
import { GetAllRolesController } from "../controllers/RolesController";

const getAllRoles = new GetAllRolesController();
const roleRouter = Router();


// Rota para testar o servidor
roleRouter.get('/', informativo, getAllRoles.handle);


export { roleRouter };
