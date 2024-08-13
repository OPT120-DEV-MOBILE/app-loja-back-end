import { Router } from "express";

import { verificaJWT } from "../middlewares/verificaJWT";
import { informativo } from "../middlewares";
import { DeleteEmpresaController, GetAllEmpresasController, RegisterEmpresaController, UpdateEmpresaController } from "../controllers/EmpresaController";

const getAllEmpresas = new GetAllEmpresasController();
const registerEmpresaController = new RegisterEmpresaController();
const updateEmpresaController = new UpdateEmpresaController();
const deleteEmpresaController = new DeleteEmpresaController();
const empresaRoute = Router();


// Rota para listar todas as empresas
empresaRoute.get('/', informativo, verificaJWT, getAllEmpresas.handle);

// Rota para registrar uma nova empresa
empresaRoute.post('/register', informativo, verificaJWT, registerEmpresaController.handle);

// Rota para atualizar uma empresa
empresaRoute.patch('/update', informativo, verificaJWT, updateEmpresaController.handle);

// Rota para deletar uma empresa
empresaRoute.delete('/delete', informativo, deleteEmpresaController.handle);


export { empresaRoute };
