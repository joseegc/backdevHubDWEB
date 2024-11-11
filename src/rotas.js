import colecao from './controller/colecaoController.js'
import material from './controller/materialController.js'
import login from './controller/loginController.js'


export default function adicionarRotas(servidor) {
    servidor.use(colecao);
    servidor.use(material);
    servidor.use(login);
}

