import { Router } from "express";
import { informativo } from "../middlewares";
import { 
  GetAllUserController, 
  GetUserController, 
  JWTTesteController, 
  LoginUserController, 
  RegisterUserController, 
  UpdateUserController 
} from "../controllers/UsuariosController";
import { verificaJWT } from "../middlewares/verificaJWT";
import swaggerJSDoc from "swagger-jsdoc";

const jwttesteController  = new JWTTesteController();
const loginUserController  = new LoginUserController();
const registerUserController  = new RegisterUserController();
const updateUserController  = new UpdateUserController();
const getAllUserController = new GetAllUserController();
const getUserController = new GetUserController();
const userRoutes = Router();

/**
 * @swagger
 * tags:
 *   - name: JWT
 *     description: Teste de autenticação JWT
 *   - name: Usuários
 *     description: Operações relacionadas aos usuários
 */

/**
 * @swagger
 * /JWTteste:
 *   get:
 *     tags:
 *       - JWT
 *     summary: Testar autenticação JWT
 *     description: Endpoint para verificar se o JWT está funcionando corretamente
 *     responses:
 *       200:
 *         description: JWT válido
 */
userRoutes.get('/JWTteste', informativo, verificaJWT, jwttesteController.handle);

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Realizar login de usuário
 *     description: Autenticação do usuário via login
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 */
userRoutes.post('/login', informativo, loginUserController.handle);

/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Registrar um novo usuário
 *     description: Registro de novos usuários no sistema
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 */
userRoutes.post('/register', informativo, verificaJWT, registerUserController.handle);

/**
 * @swagger
 * /update:
 *   patch:
 *     tags:
 *       - Usuários
 *     summary: Atualizar dados do usuário
 *     description: Atualiza as informações do usuário
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 */
userRoutes.patch('/update', informativo, verificaJWT, updateUserController.handle);

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Listar todos os usuários
 *     description: Retorna uma lista de todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
userRoutes.get('/', informativo, verificaJWT, getAllUserController.handle);

/**
 * @swagger
 * /getUser:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Obter um usuário específico
 *     description: Busca um usuário com base no seu ID
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 */
userRoutes.get('/getUser', informativo, verificaJWT, getUserController.handle);

export { userRoutes };
