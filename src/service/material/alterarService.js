import { alterar } from '../../repository/materialRepository.js'


export default async function alterarService(id, material) {
    let linhasAfetadas = await alterar(id, material);
    return linhasAfetadas;
}

