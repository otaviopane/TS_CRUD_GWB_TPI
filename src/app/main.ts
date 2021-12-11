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
    console.log(`\nMenu de Opções:`)
    console.log(`1 - Clientes`)
    console.log(`2 - Serviços`)
    console.log(`3 - Produtos`)
    console.log(`4 - Consumos`)
    console.log(`0 - Sair\n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: \n`)


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
        case 0:
            execucao = false
            console.log(`Até mais\n`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}