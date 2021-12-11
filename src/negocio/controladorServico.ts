import Entrada from "../app/entrada"
import Cliente from "../modelo/cliente/cliente"
import Empresa from "../modelo/empresa/empresa"
import Servico from "../modelo/empresa/servico"
import Atualizacao from "./atualizacao"
import Cadastro from "./cadastro"
import Delete from "./delete"
import Listagem from "./listagem"

// CRUD - CREATE
export class CadastroServico extends Cadastro {
   private servicos: Array<Servico>
   private entrada: Entrada
   constructor(servicos: Array<Servico>) {
      super()
      this.servicos = servicos
      this.entrada = new Entrada()
   }

   public cadastrar(): void {
      console.log(`\nInicio do cadastro de um serviço`)
      let nomeServico = this.entrada.receberTexto(`Por favor, digite um nome para o serviço a ser cadastrado: `)
      let precoServico = this.entrada.receberNumero(`Por favor, digite o preço para o serviço a ser cadastrado: `)
      let servico = new Servico(nomeServico, precoServico)
      this.servicos.push(servico)
   }
}

// CRUD - READ
export class ListagemServicos extends Listagem {
   private servicos: Array<Servico>
   constructor(servicos: Array<Servico>) {
      super()
      this.servicos = servicos
   }

   public listar(): void {
      console.log(`\nListagem dos servicos disponiveis`)
      this.servicos.forEach(servico => {
         console.log(`--------------------------------------`);
         console.log(`Nome: ` + servico.nome);
         console.log(`Preço: ` + servico.preco);
      });
      console.log(`\n`);
   }
}

// CRUD - READ - ÚNICO
export class SelecionaServico extends Listagem {
   private servicos: Array<Servico>
   private entrada: Entrada
   constructor(servicos: Array<Servico>) {
      super()
      this.servicos = servicos
      this.entrada = new Entrada()
   }
   public listar(): void {
      console.log(`\nSeleção de servico`)
      let escolhaNome = this.entrada.receberTexto(`Por favor informe o nome do servico que quer selecionar: `)
      this.servicos.forEach(servico => {
         if (escolhaNome == servico.nome) {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.preco);
         }
      })

      console.log(`\nSeleção concluída :)\n`)
   }
}


// CRUD - UPDATE
export class AlteraServico extends Atualizacao {
   private servicos: Array<Servico>
   private entrada: Entrada
   constructor(servicos: Array<Servico>) {
      super()
      this.servicos = servicos
      this.entrada = new Entrada()
   }
   public atualizar(): void {
      console.log(`\nAlteração de cadastro do servico`)
      let escolhaNome = this.entrada.receberTexto(`Por favor informe o nome do serviço que quer alterar: `)
      this.servicos.forEach((servico) => {
         if (escolhaNome == servico.nome) {
            console.log(`\nAlteração de cadastro do serviço escolhido:`);
            let atualizarEscolha = this.entrada.receberNumero(`
               \nPor favor escolha uma opção de alteração:
               1 - Nome
               2 - Preço\n`)
            switch (atualizarEscolha) {
               case 1:
                  let nomeAtualizado = this.entrada.receberTexto('Por favor digite o nome atualizado: ')
                  servico.setNome(nomeAtualizado)
                  break;
               case 2:
                  let precoAtualizado = this.entrada.receberNumero('Por favor digite o preço atualizado: ')
                  servico.setPreco(precoAtualizado)
                  break;
            }
         } else {
            console.log(`Nome do serviço não encontrado!`)
         }
      })
      console.log(`\nAtualização concluída :)\n`);
   }
}


// CRUD - DELETE
export class DeletaServico extends Delete {
   private empresa: Empresa
   private entrada: Entrada
   constructor(empresa: Empresa) {
      super()
      this.empresa = empresa
      this.entrada = new Entrada()
   }
   public deletar(): void {
      console.log(`\nExclusão de cadastro do serviço`)
      let servicosAtualizados: Array<Servico> = []
      let escolhaNome = this.entrada.receberTexto(`Por favor informe o nome do servico que quer deletar: `)
      this.empresa.getServicos.forEach((servico) => {
         if (escolhaNome != servico.nome) {
            servicosAtualizados.push(servico)
         }
      })
      this.empresa.setServicos(servicosAtualizados)
      console.log(`\nExclusão concluída :)\n`)
   }
}


// SubMenu
export class menuServico {
   public listarSubMenuServicos(empresa: Empresa) {
      let execucao = true
      while (execucao) {
         console.log(`\nOpções:`)
         console.log(`1 - Cadastrar serviço`)
         console.log(`2 - Exibir serviço`)
         console.log(`3 - Alterar serviço`)
         console.log(`4 - Deletar serviço`)
         console.log(`5 - Listar todos os serviços`)
         console.log(`0 - Sair\n`)


         let entrada = new Entrada()
         let opcaoServico = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
         switch (opcaoServico) {
            case 1:
               let cadastroServico = new CadastroServico(empresa.getServicos)
               cadastroServico.cadastrar()
               break;
            case 2:
               let selecionaServico = new SelecionaServico(empresa.getServicos)
               selecionaServico.listar()
               break;
            case 3:
               let alteraServico = new AlteraServico(empresa.getServicos)
               alteraServico.atualizar()
               break;
            case 4:
               let deletaServico = new DeletaServico(empresa)
               deletaServico.deletar()
               break;
            case 5:
               let listagemServicos = new ListagemServicos(empresa.getServicos)
               listagemServicos.listar()
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