import { deletarPorId } from "../../repository/materialRepository.js";


export default async function deletarService(id) {
    let linhasAfetadas = await deletarPorId(id);
    return linhasAfetadas;
}