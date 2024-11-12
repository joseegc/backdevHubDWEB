import inserirService from "../service/colecao/inserirService.js";
import consultarService from "../service/colecao/consultarService.js";
import deletarService from "../service/colecao/deletarService.js";
import consultarPorIdService from "../service/colecao/consultarPorIdService.js";
import alterarService from "../service/colecao/alterarService.js";

import { autenticar } from "../utils/jwt.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/colecao', autenticar, async (req, resp) => {
    try {
        let colecao = req.body;
        const dataCriacao = new Date().toISOString().split('T')[0]; // Data atual em formato ISO 8601
        console.log(dataCriacao)
        let id = await inserirService(colecao, dataCriacao);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/colecao/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let colecao = req.body;

        let linhasAfetadas = await alterarService(id, colecao);

        resp.send({
            idAlterado: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/colecao', autenticar, async (req, resp) => {
    try {
        let registros = await consultarService();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/colecao/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let registros = await consultarPorIdService(id);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.delete('/colecao/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await deletarService(id);

        resp.send({
            idDeletado: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default endpoints;
