import { Router } from "express";
import { informativo } from "../middlewares";
import { JWTTesteController, LoginUserController } from "../controllers/UsuariosController";
import { verificaJWT } from "../middlewares/verificaJWT";



const jwttesteController  = new JWTTesteController();
const loginUserController  = new LoginUserController();
const userRoutes = Router();


// Rota para testar o servidor
userRoutes.get('/JWTteste', informativo, verificaJWT, jwttesteController.handle);

// Rotas de Usuários
userRoutes.post('/login', informativo, loginUserController.handle);


export { userRoutes };
