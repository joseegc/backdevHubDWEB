import { deletarPorId } from "../../repository/colecaoRepository.js";


export default async function deletarService(id) {
    let linhasAfetadas = await deletarPorId(id);
    return linhasAfetadas;
}