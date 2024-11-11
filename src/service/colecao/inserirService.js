import { inserir } from '../../repository/colecaoRepository.js'


export default async function inserirService(colecao) {

    let id = await inserir(colecao);
    return id;
}

