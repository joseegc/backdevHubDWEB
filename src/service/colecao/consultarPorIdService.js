import { consultarPorId } from "../../repository/colecaoRepository.js";

export default async function consultarPorIdService(id) {
    let registros = await consultarPorId(id);
    return registros;
}

