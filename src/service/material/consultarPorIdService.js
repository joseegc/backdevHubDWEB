import { consultarPorId } from "../../repository/materialRepository.js";

export default async function consultarPorIdService(id) {
    let registros = await consultarPorId(id);
    return registros;
}

