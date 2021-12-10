import { listenerCount } from "process"
import Entrada from "../app/entrada"
import Empresa from "../modelo/empresa/empresa"
import Produto from "../modelo/empresa/produto"
import Atualizacao from "./atualizacao"
import Cadastro from "./cadastro"
import Delete from "./delete"
import Listagem from "./listagem"

// CRUD - CREATE
export class CadastroProduto extends Cadastro {
   private produtos: Array<Produto>
   private entrada: Entrada
   constructor(produtos: Array<Produto>) {
      super()
      this.produtos = produtos
      this.entrada = new Entrada()
   }

   public cadastrar(): void {
      console.log(`\nInicio do cadastro de um produto`)
      let nomeProduto = this.entrada.receberTexto(`Por favor, digite um nome para o produto a ser cadastrado: `)
      let precoProduto = this.entrada.receberNumero(`Por favor, digite o preço para o produto a ser cadastrado: `)
      let produto = new Produto(nomeProduto, precoProduto)
      this.produtos.push(produto)
   }
}

// CRUD - READ
export class ListagemProdutos extends Listagem {
   private produtos: Array<Produto>
   constructor(produtos: Array<Produto>) {
      super()
      this.produtos = produtos
   }

   public listar(): void {
      console.log(`\nListagem dos produtos disponiveis`)
      this.produtos.forEach(produto => {
         console.log(`--------------------------------------`);
         console.log(`Nome: ` + produto.nome);
         console.log(`Preço: ` + produto.preco);
      });
      console.log(`\n`);
   }
}

// CRUD - READ - ÚNICO
export class SelecionaProduto extends Listagem {
   private produtos: Array<Produto>
   private entrada: Entrada
   constructor(produtos: Array<Produto>) {
      super()
      this.produtos = produtos
      this.entrada = new Entrada()
   }
   public listar(): void {
      console.log(`\nSeleção de produto`)
      let escolhaNome = this.entrada.receberTexto(`Por favor informe o nome do produto que quer selecionar: `)
      this.produtos.forEach(produto => {
         if (escolhaNome == produto.nome) {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + produto.nome);
            console.log(`Preço: ` + produto.preco);
         }
      })

      console.log(`\nSeleção concluída :)\n`)
   }
}

// CRUD - UPDATE
export class AlteraProduto extends Atualizacao {
   private produtos: Array<Produto>
   private entrada: Entrada
   constructor(produtos: Array<Produto>) {
      super()
      this.produtos = produtos
      this.entrada = new Entrada()
   }
   public atualizar(): void {
      console.log(`\nAlteração de cadastro do produto`)
      let escolhaNome = this.entrada.receberTexto(`Por favor informe o nome do produto que quer alterar: `)
      this.produtos.forEach((produto) => {
         if (escolhaNome == produto.nome) {
            console.log(`\nAlteração de cadastro do produto escolhido:`);
            let atualizarEscolha = this.entrada.receberNumero(`
               \nPor favor escolha uma opção de alteração:
               1 - Nome
               2 - Preço\n`)
            switch (atualizarEscolha) {
               case 1:
                  let nomeAtualizado = this.entrada.receberTexto('Por favor digite o nome atualizado: ')
                  produto.setNome(nomeAtualizado)
                  break;
               case 2:
                  let precoAtualizado = this.entrada.receberNumero('Por favor digite o preço atualizado: ')
                  produto.setPreco(precoAtualizado)
                  break;
            }
         } else {
            console.log(`Nome do produto não encontrado!`)
         }
      })
      console.log(`\nAtualização concluída :)\n`);
   }
}


// CRUD - DELETE
export class DeletaProduto extends Delete {
   private empresa: Empresa
   private entrada: Entrada
   constructor(empresa: Empresa) {
      super()
      this.empresa = empresa
      this.entrada = new Entrada()
   }
   public deletar(): void {
      console.log(`\nExclusão de cadastro do produto`)
      let produtosAtualizados: Array<Produto> = []
      let escolhaNome = this.entrada.receberTexto(`Por favor informe o nome do produto que quer deletar: `)
      this.empresa.getProdutos.forEach((produto) => {
         if (escolhaNome != produto.nome) {
            produtosAtualizados.push(produto)
         }
      })
      this.empresa.setProdutos(produtosAtualizados)
      console.log(`\nExclusão concluída :)\n`)
   }
}


// SubMenu
export class menuProduto {
   public listarSubMenuProdutos(empresa: Empresa) {
      let execucao = true
      while (execucao) {
         console.log(`\nOpções:`)
         console.log(`1 - Cadastrar produto`)
         console.log(`2 - Exibir produto`)
         console.log(`3 - Alterar produto`)
         console.log(`4 - Deletar produto`)
         console.log(`5 - Listar todos os produtos`)
         // console.log(`6 - Listar os produtos mais consumidos`)
         // console.log(`7 - Listar os produtos mais consumidos por gênero`)
         console.log(`0 - Sair\n`)


         let entrada = new Entrada()
         let opcaoProduto = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
         switch (opcaoProduto) {
            case 1:
               let cadastroProduto = new CadastroProduto(empresa.getProdutos)
               cadastroProduto.cadastrar()
               break;
            case 2:
               let selecionaProduto = new SelecionaProduto(empresa.getProdutos)
               selecionaProduto.listar()
               break;
            case 3:
               let alteraProduto = new AlteraProduto(empresa.getProdutos)
               alteraProduto.atualizar()
               break;
            case 4:
               let deletaProduto = new DeletaProduto(empresa)
               deletaProduto.deletar()
               break;
            case 5:
               let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
               listagemProdutos.listar()
               break;
            // case 5:
            //     let listagemClientesGeneros = new ListagemClientesGeneros(clientes)
            //     listagemClientesGeneros.listar()
            //     break;
            // case 6:
            //     let listagemClientesMaisGastaram = new ListagemClientesMaisGastaram (empresa.getConsumos) // <--- 6) 5 + gastadores
            //     listagemClientesMaisGastaram .listar()
            //     break;
            // case 7:
            //     let listagemClientesMaisConsumiram = new ListagemClientesMaisConsumiram (empresa.getConsumos) // <--- 1) 10 + consumidores
            //     listagemClientesMaisConsumiram .listar()
            //     break;
            // case 8:
            //     let listagemClientesMenosConsumiram = new ListagemClientesMenosConsumiram (empresa.getConsumos ) // <--- 5) 10 - consumidores
            //     listagemClientesMenosConsumiram .listar()
            //     break;
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