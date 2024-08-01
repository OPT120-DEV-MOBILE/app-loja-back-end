import e, { NextFunction } from 'express';
import { prisma } from '../prisma/client';
import { AppError } from '../errors/AppErrors';


export async function autenticacao(req: e.Request, res: e.Response, next: NextFunction) {

    console.log('\n');
    console.log('Autenticando:');
    console.log(`ID: ${req.headers["x-access-id"]}`);
    console.log(`ID: ${req.body.id}`);
    console.log(`Email: ${req.headers["x-access-email"]}`);


    if(req.headers["x-access-id"] != req.body.id){
        console.log('Falha na Autenticação');
        throw new AppError('Falha na Autenticação', 401);
    }

    console.log('\n');
    console.log('Autenticado com sucesso!');


    return next();
}

