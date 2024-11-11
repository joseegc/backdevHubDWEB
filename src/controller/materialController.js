import inserirService from "../service/material/inserirService.js";
import consultarService from "../service/material/consultarService.js";
import excluirService from "../service/material/excluirService.js";
import consultarPorIdService from "../service/material/consultarPorIdService.js";
import alterarService from "../service/material/alterarService.js";

import { autenticar } from "../utils/jwt.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/material', autenticar, async (req, resp) => {
    try {
        let material = req.body;

        let id = await inserirService(material);

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
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/material', autenticar, async (req, resp) => {
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



endpoints.delete('/material/:id', async (req, resp) => {
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
