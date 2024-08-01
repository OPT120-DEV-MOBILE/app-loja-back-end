import e, { NextFunction } from "express";
const jwt = require('jsonwebtoken');



export function verificaJWT(req: e.Request, res: e.Response, next: NextFunction) {
    const token = req.headers['jwt-access']

    if (!token) {
        console.log("JWT não encontrado");
        return res.status(401).json({
            status: "error",
            mensagem: "Acesso negado" });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        console.log("JWT válido, acesso permitido");
        return next();
    } catch (error) {
        console.log("JWT inválido");
        return res.status(401).json({
            status: "error",
            mensagem: "Acesso negado" });
    }
}