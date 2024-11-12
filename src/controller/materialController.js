import inserirService from "../service/material/inserirService.js";
import consultarService from "../service/material/consultarService.js";
import deletarService from "../service/material/deletarService.js";
import consultarPorIdService from "../service/material/consultarPorIdService.js";
import alterarService from "../service/material/alterarService.js";

import { autenticar } from "../utils/jwt.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/material/:idcolecao', autenticar, async (req, resp) => {
    try {
        let idColecao = req.params.idcolecao

        let material = req.body;
        const dataCriacao = new Date().toISOString().split('T')[0]; // Data atual em formato ISO 8601
        let id = await inserirService(material, dataCriacao, idColecao);

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


endpoints.put('/material/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let material = req.body;

        let linhasAfetadas = await alterarService(id, material);

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


endpoints.get('/materiais/:idcolecao', async (req, resp) => {
    try {
        let idColecao = req.params.idcolecao

        let registros = await consultarService(idColecao);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/material/:id', autenticar, async (req, resp) => {
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



endpoints.delete('/material/:id', autenticar, async (req, resp) => {
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
