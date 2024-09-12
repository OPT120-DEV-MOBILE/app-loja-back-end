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

// Objetos controllers
const jwttesteController = new JWTTesteController();
const loginUserController = new LoginUserController();
const registerUserController = new RegisterUserController();
const updateUserController = new UpdateUserController();
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
 * /users/JWTteste:
 *   get:
 *     tags:
 *       - JWT
 *     summary: Testar autenticação JWT
 *     description: Endpoint para verificar se o JWT está funcionando corretamente
 *     security:
 *       - JWT-Access: []
 *     responses:
 *       200:
 *         description: JWT válido
 */
userRoutes.get('/JWTteste', informativo, verificaJWT, jwttesteController.handle);


/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Realizar login de usuário
 *     description: Autenticação do usuário via login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "usuario@example.com"
 *               senha:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "minhasenha123"
 *     responses:
 *       201:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT retornado após login bem-sucedido
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Credenciais inválidas
 */
userRoutes.post('/login', informativo, loginUserController.handle);


/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Registrar um novo usuário
 *     description: Registro de novos usuários no sistema
 *     security:
 *       - JWT-Access: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *                 example: "usuario"
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "usuario@example.com"
 *               cpf:
 *                 type: string
 *                 description: CPF do usuário
 *                 example: "12345678912"
 *               role:
 *                 type: int
 *                 description: Cargo do usuario
 *                 example: 1
 *               idEmpresa:
 *                 type: int
 *                 description: Id da empresa do usuário
 *                 example: 2
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 */
userRoutes.post('/register', informativo, verificaJWT, registerUserController.handle);


/**
 * @swagger
 * /users/update:
 *   patch:
 *     tags:
 *       - Usuários
 *     summary: Atualizar dados do usuário
 *     description: Atualiza as informações do usuário
 *     security:
 *       - JWT-Access: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: int
 *                 description: ID do usuário
 *                 example: 1
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *                 example: "usuario"
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "usuario@example.com"
 *               senhaAntiga:
 *                 type: string
 *                 description: Senha atual do usuário
 *                 example: "senha123"
 *               senhaNova:
 *                 type: string
 *                 description: Nova senha do usuário
 *                 example: "novaSenha123"
 *               cpf:
 *                 type: string
 *                 description: CPF do usuário
 *                 example: "12345678912"
 *               role:
 *                 type: int
 *                 description: Cargo do usuario
 *                 example: 1
 *               idEmpresa:
 *                 type: int
 *                 description: Id da empresa do usuário
 *                 example: 2
 *     responses:
 *       201:
 *         description: Usuário atualizado com sucesso
 */
userRoutes.patch('/update', informativo, verificaJWT, updateUserController.handle);


/**
 * @swagger
 * /users/:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Listar todos os usuários
 *     description: Retorna uma lista de todos os usuários
 *     security:
 *       - JWT-Access: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
userRoutes.get('/', informativo, verificaJWT, getAllUserController.handle);


/**
 * @swagger
 * /users/getUser:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Obter um usuário específico
 *     description: Busca um usuário com base no seu ID
 *     security:
 *       - JWT-Access: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: int
 *                 description: ID do usuário
 *                 example: 1
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 */
userRoutes.get('/getUser', informativo, verificaJWT, getUserController.handle);

export { userRoutes };
