import Entrada from "../app/entrada"
import Cliente from "../modelo/cliente/cliente"
import Consumo from "../modelo/empresa/consumo"
import Empresa from "../modelo/empresa/empresa"
import Produto from "../modelo/empresa/produto"
import Servico from "../modelo/empresa/servico"
import Cadastro from "./cadastro"

export class RegistroConsumo extends Cadastro {
   public clientes: Array<Cliente>
   public servicos: Array<Servico>
   public produtos: Array<Produto>
   private entrada: Entrada

   constructor(clientes: Array<Cliente>, servicos: Array<Servico>, produtos: Array<Produto>) {
      super()
      this.clientes = clientes
      this.servicos = servicos
      this.produtos = produtos
      this.entrada = new Entrada()
   }

   // CRUD - CREATE
   public cadastrar(): void {
      console.log(`\nInicio do registro de um consumo`)
      let cpfCliente = this.entrada.receberNumero(`\nPor favor, digite o cpf do cliente que consumiu: \n`)
      const clienteSelecionado = this.clientes.filter(cliente => {
         return cliente.getCpf == cpfCliente
      })
      let listaServicos: Array<Servico> = []
      let listaProdutos: Array<Produto> = []
      let enquantoServico = true
      do {
         let enquantoServ = this.entrada.receberNumero(`\nPor favor, digite o número da escolha:
            0 - Sem adição de Serviços
            1 - Adicionar novo Serviço\n`)
         let nomeServico = this.entrada.receberTexto(`\nPor favor, digite o nome do serviço: \n`)
         this.servicos.forEach(servico => {
            if (nomeServico == servico.nome) {
               listaServicos.push(servico)
            }
         })
         enquantoServico = enquantoServ == 0 ? false : true
      } while (enquantoServico)
      let enquantoProduto = true
      do {
         let enquantoProd = this.entrada.receberNumero(`\nPor favor, digite o número da escolha:
            0 - Sem adição de Produtos
            1 - Adicionar novo Produto \n`)
         let nomeProduto = this.entrada.receberTexto(`\nPor favor, digite o nome do produto: \n`)
         this.produtos.forEach(produto => {
            if (nomeProduto == produto.nome) {
               listaProdutos.push(produto)
            }
         })
         enquantoProduto = enquantoProd == 0 ? false : true
      } while (enquantoProduto)
      let consumo = new Consumo(
         new Date(),
         clienteSelecionado[0].getCpf,
         listaServicos.length,
         listaProdutos.length,
         listaServicos,
         listaProdutos
      )
      clienteSelecionado[0].listaConsumos.push(consumo)
   }
}


// SubMenu
export class menuConsumo {
   public listarSubMenuConsumos(empresa: Empresa) {
      let execucao = true
      while (execucao) {
         console.log(`Opções:`)
         console.log(`1 - Registro de Consumo`)
         console.log(`2 - Exibir serviço`)
         console.log(`3 - Alterar serviço`)
         console.log(`4 - Deletar serviço`)
         console.log(`5 - Listar todos os serviços`)
         // console.log(`6 - Listar os servicos mais consumidos`)
         // console.log(`7 - Listar os servicos mais consumidos por gênero`)
         console.log(`0 - Sair`)

         let entrada = new Entrada()
         let opcaoConsumo = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
         switch (opcaoConsumo) {
            case 1:
               let registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getServicos, empresa.getProdutos)
               registroConsumo.cadastrar()
               break;
            // case 2:
            //    let selecionaProduto = new SelecionaProduto(empresa.getProdutos)
            //    selecionaProduto.listar()
            //    break;
            // case 3:
            //    let alteraProduto = new AlteraProduto(empresa.getProdutos)
            //    alteraProduto.atualizar()
            //    break;
            // case 4:
            //    let deletaProduto = new DeletaProduto(empresa)
            //    deletaProduto.deletar()
            //    break;
            // case 5:
            //    let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            //    listagemProdutos.listar()
            //    break;
         }
      }
   }
}