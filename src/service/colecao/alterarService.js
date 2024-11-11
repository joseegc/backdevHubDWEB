import { alterar } from '../../repository/colecaoRepository.js'


export default async function alterarService(id, colecao) {
    let linhasAfetadas = await alterar(id, colecao);
    return linhasAfetadas;
}

