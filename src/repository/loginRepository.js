import con from "./connection.js"


export async function login(credenciais) {
    const comando = `
        select id_login     as id,
               email
          from tb_login
         where email = ?
           and senha = ?
    `

    const [registros] = await con.query(comando, [credenciais.email, credenciais.senha])
    return registros[0];
}
