import { Router } from "express";
import { informativo } from "../middlewares";
import { verificaJWT } from "../middlewares/verificaJWT";
import { DeleteVendaController, GetAllVendasController, GetVendaController, GetVendasUserController, RegisterVendasController, RelatorioVendas, RelatorioVendasCliente, RelatorioVendasFuncionario, UpdateVendaController } from "../controllers/VendasController";



const registerVendasController  = new RegisterVendasController();
const updateVendaController  = new UpdateVendaController();
const deleteVendaController  = new DeleteVendaController();
const getAllVendasController  = new GetAllVendasController();
const getVendaController  = new GetVendaController();
const getVendasUserController  = new GetVendasUserController();
const relatorioVendasCliente = new RelatorioVendasCliente();
const relatorioVendasFuncionario = new RelatorioVendasFuncionario();
const relatorioVendas = new RelatorioVendas();
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

// Rota para relatorio de vendas para funcionarios
vendaRoutes.get('/relatorio/funcionario', informativo, verificaJWT, relatorioVendasFuncionario.handle);

// Rota para relatorio de vendas para clientes
vendaRoutes.get('/relatorio/cliente', informativo, verificaJWT, relatorioVendasCliente.handle);

// Rota para relatorio de vendas
vendaRoutes.get('/relatorio', informativo, verificaJWT, relatorioVendas.handle);

export { vendaRoutes };
