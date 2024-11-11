import { alterarPorId } from '../../repository/colecaoRepository.js'


export default async function alterarService(id, colecao) {
    let linhasAfetadas = await alterarPorId(id, colecao);
    return linhasAfetadas;
}

