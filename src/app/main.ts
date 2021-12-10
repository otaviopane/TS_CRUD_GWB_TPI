import Empresa from "../modelo/empresa/empresa";
import { menuCliente } from "../negocio/controladorCliente";
import { menuConsumo } from "../negocio/controladorConsumo";
import { menuProduto } from "../negocio/controladorProduto";
import { menuServico } from "../negocio/controladorServico";
import Entrada from "./entrada";
import { RegistrosBase } from "./registros";

console.log(`Bem-vindo ao Grupo World Beauty`)
let empresa = new Empresa()
let registroBase = new RegistrosBase(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
let execucao = true
registroBase.cadastrar()

while (execucao) {
    console.log(`Menu de Opções:`)
    console.log(`1 - Clientes`)
    console.log(`2 - Serviços`)
    console.log(`3 - Produtos`)
    console.log(`4 - Consumos`)
    // console.log(`5 - Listar os 05 clientes que mais gastaram`)
    // console.log(`6 - Listar os 10 clientes que mais consumiram`)
    // console.log(`7 - Listar os 10 clientes que menos consumiram`)
    // console.log(`8 - Listar todos os clientes por gênero`)
    // console.log(`9 - Listar os servicos mais consumidos`)
    // console.log(`10 - Listar os servicos mais consumidos por gênero`)

    console.log(`0 - Sair\n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let subMenuClie = new menuCliente()
            subMenuClie.listarSubMenuClientes(empresa)
            break;
        case 2:
            let subMenuServ = new menuServico()
            subMenuServ.listarSubMenuServicos(empresa)
            break;
        case 3:
            let subMenuProd = new menuProduto()
            subMenuProd.listarSubMenuProdutos(empresa)
            break;
        case 4:
            let subMenuCons = new menuConsumo()
            subMenuCons.listarSubMenuConsumos(empresa)
            break;
        // case 5:
        //     let listagemClientesMaisGastaram = new ListagemClientesMaisGastaram (empresa.getConsumos) // <--- 6) 5 + gastadores
        //     listagemClientesMaisGastaram .listar()
        //     break;
        // case 6:
        //     let listagemClientesMaisConsumiram = new ListagemClientesMaisConsumiram (empresa.getConsumos) // <--- 1) 10 + consumidores
        //     listagemClientesMaisConsumiram .listar()
        //     break;
        // case 7:
        //     let listagemClientesMenosConsumiram = new ListagemClientesMenosConsumiram (empresa.getConsumos ) // <--- 5) 10 - consumidores
        //     listagemClientesMenosConsumiram .listar()
        //     break;
        // case 8:
        //     let listagemClientesGeneros = new ListagemClientesGeneros(empresa.getClientes) // <--------------------------------- 2) Clientes por genero
        //     listagemClientesGeneros.listar()
        //     break;
        // case 9:
        //     let listagemServicosMaisConsumidos = new ListagemServicosMaisConsumidos (empresa.getConsumos) // <--- 3) Servicos + consumidos
        //     listagemServicosMaisConsumidos .listar()
        //     break;
        // case 10:
        //     let listagemServicosMaisConsumidosGenero = new ListagemServicosMaisConsumidosGenero (empresa.getConsumos) // <--- 4) Servicos + consumidos por genero
        //     listagemServicosMaisConsumidosGenero .listar()
        //     break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}