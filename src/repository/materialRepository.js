import con from "./connection.js";

export async function inserir(material, dataCriacao, idColecao) {
    const comando = `
    insert into tb_material (nome,
                            descricao,
                            url,
                            data_criacao,
                            fk_id_colecao
                            )
                             values (?, ?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [material.nome, material.descricao, material.url, dataCriacao, idColecao])

    console.log("oooi")
    console.log(dataCriacao)
    return info.insertId;
}

// id_material INT PRIMARY KEY  auto_increment,
// nome VARCHAR(255),
// descricao VARCHAR(255),
// url VARCHAR(255),
// data_criacao DATE,
// fk_id_material INT,
// FOREIGN KEY (fk_id_material) REFERENCES tb_material(id_material)



export async function consultarMateriaisDaColecao(idColecao) {
    const comando = `
    SELECT
        material.id_material AS idMaterial,
        material.nome,
        material.descricao,
        material.url,
        material.data_criacao AS dataCriacao
    FROM 
        tb_material material
    WHERE
        material.fk_id_colecao = ?
    `

    let [registros] = await con.query(comando, [idColecao]);
    return registros;
}

export async function consultarPorId(idParaConsultar) {
    const comando = `
    SELECT
        material.id_material AS idMaterial,
        material.nome,
        material.descricao,
        material.url,
        material.data_criacao AS dataCriacao,
        material.fk_id_colecao AS idColecao
    FROM 
        tb_material material
    WHERE
        material.id_material = ?
        `

    let [registros] = await con.query(comando,[idParaConsultar]);
    return registros[0];
}

export async function alterarPorId(idParaAlterar, corpoParaAlterar) {
    const comando = `
    UPDATE tb_material
    SET
        nome = ?, 
        descricao = ?,
        url = ?,
    WHERE 
        id_material = ?
    `

    let [registros] = await con.query(comando, 
        [corpoParaAlterar.nome,
        corpoParaAlterar.descricao,
        corpoParaAlterar.url,
        idParaAlterar]);
    return registros[0];
}

export async function deletarPorId(idParaDeletar) {
    const comando = `
    delete from tb_material WHERE id_material = ?
    `

    let [info] = await con.query(comando, [idParaDeletar])

    return info.affectedRows;
}



