import { deletar } from "../../repository/colecaoRepository.js";


export default async function deletarService(id) {
    let linhasAfetadas = await deletar(id);
    return linhasAfetadas;
}