import { Router } from "express";
import { informativo } from "../middlewares";
import { verificaJWT } from "../middlewares/verificaJWT";
import { DeleteVendaController, GetAllVendasController, GetVendaController, GetVendaUserController, RegisterVendasController, UpdateVendaController } from "../controllers/VendasController";



const registerVendasController  = new RegisterVendasController();
const updateVendaController  = new UpdateVendaController();
const deleteVendaController  = new DeleteVendaController();
const getAllVendasController  = new GetAllVendasController();
const getVendaController  = new GetVendaController();
const getVendaUserController  = new GetVendaUserController();
const vendaRoutes = Router();



// Rota para registrar um novo usuário
vendaRoutes.post('/register', informativo, registerVendasController.handle);

// Rota para atualizar um usuário
vendaRoutes.patch('/update', informativo, updateVendaController.handle);

// Rota para atualizar um usuário
vendaRoutes.delete('/delete', informativo, deleteVendaController.handle);

// Rota para listar todos os usuários
vendaRoutes.get('/', informativo, getAllVendasController.handle);

// Rota para listar todos os usuários
vendaRoutes.get('/getVenda', informativo, getVendaController.handle);

// Rota para listar todos os usuários
vendaRoutes.get('/getVendaUser', informativo, getVendaUserController.handle);

export { vendaRoutes };
