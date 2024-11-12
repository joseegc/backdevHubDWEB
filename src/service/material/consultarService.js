import { consultarMateriaisDaColecao } from "../../repository/materialRepository.js";

export default async function consultarService(idColecao) {
    let registros = await consultarMateriaisDaColecao(idColecao);
    return registros;
}

