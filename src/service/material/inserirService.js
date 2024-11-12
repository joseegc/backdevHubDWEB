import { inserir } from '../../repository/materialRepository.js'


export default async function inserirService(material, dataCriacao, idColecao) {

    let id = await inserir(material, dataCriacao, idColecao);
    return id;
}

