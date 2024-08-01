import { Router } from "express";
import { informativo } from "../middlewares";
import { LoginUserController } from "../controllers/UsuariosController";



const loginUserController  = new LoginUserController();
const userRoutes = Router();



// Rotas de Usuários
userRoutes.post('/login', informativo, loginUserController.handle);


export { userRoutes };
