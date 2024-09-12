import { Router } from "express";

import { verificaJWT } from "../middlewares/verificaJWT";
import { informativo } from "../middlewares";
import { DeleteEmpresaController, GetAllEmpresasController, RegisterEmpresaController, UpdateEmpresaController } from "../controllers/EmpresaController";

const getAllEmpresas = new GetAllEmpresasController();
const registerEmpresaController = new RegisterEmpresaController();
const updateEmpresaController = new UpdateEmpresaController();
const deleteEmpresaController = new DeleteEmpresaController();
const empresaRoute = Router();



/**
 * @swagger
 * tags:
 *   - name: Empresas
 *     description: Operações relacionadas às empresas
 */


/**
 * @swagger
 * /empresas/:
 *   get:
 *     tags:
 *       - Empresas
 *     summary: Listar todas as empresas
 *     description: Retorna uma lista de todas as empresas registradas no sistema
 *     security:
 *       - JWT-Access: []
 *     responses:
 *       200:
 *         description: Lista de empresas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID da empresa
 *                   nome:
 *                     type: string
 *                     description: Nome da empresa
 *                   cnpj:
 *                     type: string
 *                     description: CNPJ da empresa
 *       401:
 *         description: Token JWT ausente ou inválido
 */
empresaRoute.get('/', informativo, verificaJWT, getAllEmpresas.handle);


/**
 * @swagger
 * /empresas/register:
 *   post:
 *     tags:
 *       - Empresas
 *     summary: Registrar uma nova empresa
 *     description: Cria um novo registro de empresa
 *     security:
 *       - JWT-Access: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - cnpj
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da empresa
 *                 example: "Empresa X"
 *               cnpj:
 *                 type: string
 *                 description: CNPJ da empresa
 *                 example: "00.000.000/0000-00"
 *     responses:
 *       201:
 *         description: Empresa registrada com sucesso
 *       400:
 *         description: Falha ao registrar a empresa
 *       401:
 *         description: Token JWT ausente ou inválido
 */
empresaRoute.post('/register', informativo, verificaJWT, registerEmpresaController.handle);


/**
 * @swagger
 * /empresas/update:
 *   patch:
 *     tags:
 *       - Empresas
 *     summary: Atualizar informações de uma empresa
 *     description: Atualiza os dados de uma empresa existente
 *     security:
 *       - JWT-Access: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nome
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID da empresa a ser atualizada
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               nome:
 *                 type: string
 *                 description: Novo nome da empresa
 *                 example: "Empresa Y"
 *               cnpj:
 *                 type: string
 *                 description: Novo CNPJ da empresa (opcional)
 *                 example: "00.000.000/0000-00"
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso
 *       400:
 *         description: Falha ao atualizar a empresa
 *       401:
 *         description: Token JWT ausente ou inválido
 */
empresaRoute.patch('/update', informativo, verificaJWT, updateEmpresaController.handle);


/**
 * @swagger
 * /empresas/delete:
 *   delete:
 *     tags:
 *       - Empresas
 *     summary: Deletar uma empresa
 *     description: Remove o registro de uma empresa do sistema
 *     security:
 *       - JWT-Access: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID da empresa a ser deletada
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Empresa deletada com sucesso
 *       400:
 *         description: Falha ao deletar a empresa
 *       401:
 *         description: Token JWT ausente ou inválido
 */
empresaRoute.delete('/delete', informativo, verificaJWT, deleteEmpresaController.handle);



export { empresaRoute };
