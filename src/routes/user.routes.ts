import { Router } from "express";
import { informativo } from "../middlewares";
import { CreateUserController } from "../EXAMPLES/criaUser/CreateUserController";
import { ListUserController } from "../EXAMPLES/listUser/ListUserController";
import { LoginUserController } from "../EXAMPLES/loginUser/LoginUserController";
import { LeUserController } from "../EXAMPLES/leUser/LeUserController";
import { AtualizaUserController } from "../EXAMPLES/atualizaUser/AtualizaUserController";
import { DeletaUserController } from "../EXAMPLES/deletaUser/DeletaUserController";
import { autenticacao } from "../middlewares/autenticacao";



const createUserController  = new CreateUserController();
const listUserController  = new ListUserController();
const loginUserController  = new LoginUserController();
const leUserController  = new LeUserController();
const atualizaUserController  = new AtualizaUserController();
const deletaUserController  = new DeletaUserController();
const userRoutes = Router();



// Rotas de Usuários
userRoutes.post('/cria', informativo, createUserController.handle);
userRoutes.get('/lista', informativo, listUserController.handle);
userRoutes.post('/login', informativo, loginUserController.handle);
userRoutes.get('/le', informativo, leUserController.handle);
userRoutes.patch('/atualiza', informativo, autenticacao, atualizaUserController.handle);
userRoutes.delete('/deleta', informativo, autenticacao, deletaUserController.handle);


export { userRoutes };
