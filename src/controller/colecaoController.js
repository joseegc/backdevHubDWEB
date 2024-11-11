import inserirService from "../service/colecao/inserirService.js";
import consultarService from "../service/colecao/consultarService.js";
import excluirService from "../service/colecao/excluirService.js";
import consultarPorIdService from "../service/colecao/consultarPorIdService.js";
import alterarService from "../service/colecao/alterarService.js";

import { autenticar } from "../utils/jwt.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/colecao', autenticar, async (req, resp) => {
    try {
        let colecao = req.body;

        let id = await inserirService(colecao);

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
            novoId: id
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



endpoints.delete('/colecao/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await excluirService(id);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default endpoints;
