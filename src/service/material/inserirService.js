import { inserir } from '../../repository/materialRepository.js'


export default async function inserirService(material) {

    let id = await inserir(material);
    return id;
}

