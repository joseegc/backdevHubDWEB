import { deletar } from "../../repository/materialRepository.js";


export default async function deletarService(id) {
    let linhasAfetadas = await deletar(id);
    return linhasAfetadas;
}