import { Router } from "express";
import { informativo } from "../middlewares";
import { JWTTesteController, LoginUserController, RegisterUserController } from "../controllers/UsuariosController";
import { verificaJWT } from "../middlewares/verificaJWT";



const jwttesteController  = new JWTTesteController();
const loginUserController  = new LoginUserController();
const registerUserController  = new RegisterUserController();
const userRoutes = Router();


// Rota para testar o servidor
userRoutes.get('/JWTteste', informativo, verificaJWT, jwttesteController.handle);

// Rotas de Usuários
userRoutes.post('/login', informativo, loginUserController.handle);

//Rota para registrar um novo usuário
userRoutes.post('/register', registerUserController.handle);

export { userRoutes };
