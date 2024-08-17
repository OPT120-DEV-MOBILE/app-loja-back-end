import { Router } from "express";
import { informativo } from "../middlewares";
import { GetAllUserController, GetUserController, JWTTesteController, LoginUserController, RegisterUserController, UpdateUserController } from "../controllers/UsuariosController";
import { verificaJWT } from "../middlewares/verificaJWT";



const jwttesteController  = new JWTTesteController();
const loginUserController  = new LoginUserController();
const registerUserController  = new RegisterUserController();
const updateUserController  = new UpdateUserController();
const getAllUserController = new GetAllUserController();
const getUserController = new GetUserController();
const userRoutes = Router();


// Rota para testar o servidor
userRoutes.get('/JWTteste', informativo, verificaJWT, jwttesteController.handle);

// Rotas de Usuários
userRoutes.post('/login', informativo, loginUserController.handle);

// Rota para registrar um novo usuário
userRoutes.post('/register', informativo, verificaJWT, registerUserController.handle);

// Rota para atualizar um usuário
userRoutes.patch('/update', informativo, verificaJWT, updateUserController.handle);

// Rota para listar todos os usuários
userRoutes.get('/', informativo, verificaJWT, getAllUserController.handle);

// Rota para listar todos os usuários
userRoutes.get('/getUser', informativo, verificaJWT, getUserController.handle);

export { userRoutes };
