import { inserir } from '../../repository/colecaoRepository.js'


export default async function inserirService(colecao, dataCriacao) {

    let id = await inserir(colecao, dataCriacao);
    return id;
}

