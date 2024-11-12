import con from "./connection.js";
import { consultarMateriaisDaColecao } from "./materialRepository.js";

export async function inserir(colecao, dataCriacao) {
    const comando = `
    insert into tb_colecao (nome,
                            descricao,
                            data_criacao
                            )
                             values (?,?, ?)
    `

    let [info] = await con.query(comando, [colecao.nome, colecao.descricao, dataCriacao])

    console.log("oooi")
    console.log(dataCriacao)
    return info.insertId;
}


export async function consultar() {
    const comando = `
    SELECT
        colecao.id_colecao AS idColecao,
        colecao.nome,
        colecao.descricao,
        colecao.data_criacao AS dataCriacao
    FROM 
        tb_colecao colecao
    ORDER BY
        colecao.id_colecao
        DESC
    `

    let [registros] = await con.query(comando);

    return registros;
}

export async function consultarPorId(idParaConsultar) {
    const comando = `
    SELECT
        colecao.id_colecao AS idColecao,
        colecao.nome,
        colecao.descricao,
        colecao.data_criacao AS dataCriacao
        
    FROM 
        tb_colecao colecao
     WHERE 
        colecao.id_colecao = ?;
        `

    let [registros] = await con.query(comando,[idParaConsultar]);
    return registros[0];
}

export async function alterarPorId(idParaAlterar, corpoParaAlterar) {
    const comando = `
    UPDATE tb_colecao
    SET
        nome = ?, 
        descricao = ?
    WHERE 
        id_colecao = ?
    `

    let [registros] = await con.query(comando, 
        [corpoParaAlterar.nome,
        corpoParaAlterar.descricao,
        idParaAlterar]);
    return registros[0];
}

export async function deletarPorId(idParaDeletar) {
    const comando = `
    delete from tb_colecao WHERE id_colecao = ?
    `

    let [info] = await con.query(comando, [idParaDeletar])

    return info.affectedRows;
}