import { Router } from "express";
import { informativo } from "../middlewares";
import { verificaJWT } from "../middlewares/verificaJWT";
import { DeleteVendaController, GetAllVendasController, GetVendaController, GetVendasUserController, RegisterVendasController, UpdateVendaController } from "../controllers/VendasController";



const registerVendasController  = new RegisterVendasController();
const updateVendaController  = new UpdateVendaController();
const deleteVendaController  = new DeleteVendaController();
const getAllVendasController  = new GetAllVendasController();
const getVendaController  = new GetVendaController();
const getVendasUserController  = new GetVendasUserController();
const vendaRoutes = Router();



// Rota para registrar um novo usuário
vendaRoutes.post('/register', informativo, verificaJWT, registerVendasController.handle);

// Rota para atualizar um usuário
vendaRoutes.patch('/update', informativo, verificaJWT, updateVendaController.handle);

// Rota para atualizar um usuário
vendaRoutes.delete('/delete', informativo, verificaJWT, deleteVendaController.handle);

// Rota para listar todos os usuários
vendaRoutes.get('/', informativo, verificaJWT, getAllVendasController.handle);

// Rota para listar todos os usuários
vendaRoutes.get('/getVenda', informativo, verificaJWT, getVendaController.handle);

// Rota para listar todos os usuários
vendaRoutes.get('/getVendasUser', informativo, verificaJWT, getVendasUserController.handle);

export { vendaRoutes };
