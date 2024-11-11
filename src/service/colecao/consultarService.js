import { consultar } from "../../repository/colecaoRepository.js";

export default async function consultarService() {
    let registros = await consultar();
    return registros;
}

