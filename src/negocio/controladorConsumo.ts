import Entrada from "../app/entrada"
import Cliente from "../modelo/cliente/cliente"
import Consumo from "../modelo/empresa/consumo"
import Empresa from "../modelo/empresa/empresa"
import Produto from "../modelo/empresa/produto"
import Servico from "../modelo/empresa/servico"
import Cadastro from "./cadastro"
import Listagem from "./listagem"

// CRUD - CREATE
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
         let nomeServico = this.entrada.receberTexto(`\nPor favor, digite o nome do serviço: \n`)
         let enquantoServ = this.entrada.receberNumero(`\nPor favor, digite o número da escolha:
            0 - Sem adição de Serviços
            1 - Adicionar novo Serviço\n`)
         this.servicos.forEach(servico => {
            if (nomeServico == servico.nome) {
               listaServicos.push(servico)
            }
         })
         enquantoServico = enquantoServ == 0 ? false : true
      } while (enquantoServico)
      let enquantoProduto = true
      do {
         let nomeProduto = this.entrada.receberTexto(`\nPor favor, digite o nome do produto: \n`)
         let enquantoProd = this.entrada.receberNumero(`\nPor favor, digite o número da escolha:
            0 - Sem adição de Produtos
            1 - Adicionar novo Produto \n`)
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
      clienteSelecionado[0].consumos.push(consumo)
   }
}


// CRUD - READ
export class ListagemConsumos extends Listagem {
   private consumos: Array<Consumo>
   constructor(consumos: Array<Consumo>) {
      super()
      this.consumos = consumos
   }

   public listar(): void {
      console.log(`\nListagem dos consumos disponiveis`)
      this.consumos.forEach(consumo => {
         console.log(`--------------------------------------`);
         console.log(`Data: ` + consumo.data);
         console.log(`Cpf do Consumidor: ` + consumo.clienteCpf);
         console.log(`Serviço: ` + consumo.servico);
         console.log(`Produto: ` + consumo.produto);
         console.log(`Produto: ` + consumo.quantiServico);
         console.log(`Produto: ` + consumo.quantiProduto);
      });
      console.log(`\n`);
   }
}

// CRUD - READ - ÚNICO
export class SelecionaConsumo extends Listagem {
   private consumos: Array<Consumo>
   private entrada: Entrada
   constructor(consumos: Array<Consumo>) {
      super()
      this.consumos = consumos
      this.entrada = new Entrada()
   }
   public listar(): void {
      console.log(`\nSeleção de recibo de consumo`)
      let escolhaCpf = this.entrada.receberNumero(`Por favor informe o cpf do consumidor: `)
      this.consumos.forEach(consumo => {
         if (escolhaCpf == consumo.clienteCpf) {
            console.log(`--------------------------------------`);
            console.log(`Data: ` + consumo.data);
            console.log(`Cpf do Consumidor: ` + consumo.clienteCpf);
            console.log(`Serviço: ` + consumo.servico);
            console.log(`Produto: ` + consumo.produto);
            console.log(`Produto: ` + consumo.quantiServico);
            console.log(`Produto: ` + consumo.quantiProduto);
         }
      })

      console.log(`\nSeleção concluída :)\n`)
   }
}

// CRUD - READ - 10 CLIENTES MAIS CONSUMIRAM
export class ListaClientesMaisConsumiram extends Listagem {
   public clientes: Array<Cliente>
   public servicos: Array<Servico>
   public produtos: Array<Produto>

   constructor(clientes: Array<Cliente>, servicos: Array<Servico>, produtos: Array<Produto>) {
      super()
      this.clientes = clientes
      this.servicos = servicos
      this.produtos = produtos
   }

   public listar(): void {
      let clientesMaisConsumiram: any[] = []
      console.log(`\nOs 10 Clientes que mais consumiram`)
      this.clientes.forEach(cliente => {
         let cliCpf: number = cliente.getCpf
         let cliConsumiu: number = cliente.getServicosConsumidos.length + cliente.getProdutosConsumidos.length
         clientesMaisConsumiram.push({ totalConsumidos: cliConsumiu, cpf: cliCpf })
      })

      let clientesMaisConsumiramDecrescente: any[] = []
      clientesMaisConsumiramDecrescente = clientesMaisConsumiram.sort((a, b) => {
         return b.cliConsumiu > a.cliConsumiu ? 1 : b.cliConsumiu < a.cliConsumiu ? -1 : 0
      })

      let dezPrimeirosConsumidores: any[] = clientesMaisConsumiramDecrescente.slice(0, 9)
      dezPrimeirosConsumidores.forEach(consumidor => {
         this.clientes.forEach(cliente => {
            if (cliente.getCpf == consumidor.cpf) {
               console.log(`Nome: ` + cliente.nome)
               console.log(`Total Consumido: ` + (cliente.getServicosConsumidos.length + cliente.getProdutosConsumidos.length))
            }
         })
      })

      console.log(`\nSeleção concluída :)\n`)
   }
}


// CRUD - READ - 10 CLIENTES MENOS CONSUMIRAM
export class ListaClientesMenosConsumiram extends Listagem {
   public clientes: Array<Cliente>
   public servicos: Array<Servico>
   public produtos: Array<Produto>

   constructor(clientes: Array<Cliente>, servicos: Array<Servico>, produtos: Array<Produto>) {
      super()
      this.clientes = clientes
      this.servicos = servicos
      this.produtos = produtos
   }

   public listar(): void {
      let clientesMenosConsumiram: any[] = []
      console.log(`\nOs 10 Clientes que mais consumiram`)
      this.clientes.forEach(cliente => {
         let cliCpf: number = cliente.getCpf
         let cliConsumiu: number = cliente.getServicosConsumidos.length + cliente.getProdutosConsumidos.length
         clientesMenosConsumiram.push({ totalConsumidos: cliConsumiu, cpf: cliCpf })
      })

      let clientesMenosConsumiramCrescente: any[] = []
      clientesMenosConsumiramCrescente = clientesMenosConsumiram.sort((a, b) => {
         return b.cliConsumiu < a.cliConsumiu ? 1 : b.cliConsumiu > a.cliConsumiu ? -1 : 0
      })

      let dezPrimeirosConsumidores: any[] = clientesMenosConsumiramCrescente.slice(0, 9)
      dezPrimeirosConsumidores.forEach(consumidor => {
         this.clientes.forEach(cliente => {
            if (cliente.getCpf == consumidor.cpf) {
               console.log(`Nome: ` + cliente.nome)
               console.log(`Total Consumido: ` + cliente.consumos)
            }
         })
      })

      console.log(`\nSeleção concluída :)\n`)
   }
}

// SubMenu
export class menuConsumo {
   public listarSubMenuConsumos(empresa: Empresa) {
      let execucao = true
      while (execucao) {
         console.log(`\nOpções:`)
         console.log(`1 - Registro de Consumo`)
         console.log(`2 - Exibir serviço`)
         console.log(`3 - Listar todos os serviços`)
         console.log(`4 - Listagem dos 10 clientes mais consumiram`)
         console.log(`5 - Listagem dos 10 clientes menos consumiram`)
         console.log(`0 - Sair\n`)

         let entrada = new Entrada()
         let opcaoConsumo = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
         switch (opcaoConsumo) {
            case 1:
               let registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getServicos, empresa.getProdutos)
               registroConsumo.cadastrar()
               break;
            case 2:
               let selecionaConsumo = new SelecionaConsumo(empresa.consumos)
               selecionaConsumo.listar()
               break;
            case 3:
               let listagemConsumos = new ListagemConsumos(empresa.consumos)
               listagemConsumos.listar()
               break;
            case 4:
               let listaClientesMaisConsumiram = new ListaClientesMaisConsumiram(empresa.getClientes, empresa.getServicos, empresa.getProdutos)
               listaClientesMaisConsumiram.listar()
               break;
            case 5:
               let listaClientesMenosConsumiram = new ListaClientesMenosConsumiram(empresa.getClientes, empresa.getServicos, empresa.getProdutos)
               listaClientesMenosConsumiram.listar()
               break;
            case 0:
               execucao = false
               console.log(`Até mais\n`)
               break;
            default:
               console.log(`Operação não entendida :(`)
         }
      }
   }
}