import { consultar } from "../../repository/materialRepository.js";

export default async function consultarService() {
    let registros = await consultar();
    return registros;
}

