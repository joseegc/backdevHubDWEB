import { alterarPorId } from '../../repository/materialRepository.js'


export default async function alterarService(id, material) {
    let linhasAfetadas = await alterarPorId(id, material);
    return linhasAfetadas;
}

