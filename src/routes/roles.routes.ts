import { Router } from "express";

import { verificaJWT } from "../middlewares/verificaJWT";
import { informativo } from "../middlewares";
import { GetAllRolesController } from "../controllers/RolesController";

const getAllRoles = new GetAllRolesController();
const roleRouter = Router();



/**
 * @swagger
 * tags:
 *   - name: Roles
 *     description: Operações relacionadas aos roles
 */


/**
 * @swagger
 * /roles/:
 *   get:
 *     tags:
 *       - Roles
 *     summary: Listar todos os roles(cargos)
 *     description: Retorna uma lista de todos os roles(cargos) registrados no sistema
 *     security:
 *       - JWT-Access: []
 *     responses:
 *       200:
 *         description: Lista de roles retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do role
 *                   nome:
 *                     type: string
 *                     description: Nome do role
 *       401:
 *         description: Token JWT ausente ou inválido
 */
roleRouter.get('/', informativo, verificaJWT, getAllRoles.handle);

export { roleRouter };
