import Entrada from "../app/entrada"
import Cliente from "../modelo/cliente/cliente"
import Telefone from "../modelo/cliente/telefone"
import Empresa from "../modelo/empresa/empresa"
import Atualizacao from "./atualizacao"
import Cadastro from "./cadastro"
import Delete from "./delete"
import Listagem from "./listagem"


// CRUD - CREATE
export class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let cpf = this.entrada.receberNumero(`Por favor informe o número do cpf: `)
        let ddd = this.entrada.receberNumero(`Por favor informe o ddd do seu telefone: `)
        let numero = this.entrada.receberNumero(`Por favor informe o número do seu telefone: `)
        let genero = this.entrada.receberTexto(`Por favor informe a identidade de gênero do cliente (F/M/NB): `)
        let cliente = new Cliente(cpf, nome, nomeSocial, genero)
        this.clientes.push(cliente)
        cliente.adicionarTelefone(ddd, numero)
        console.log(`\nCadastro concluído :)\n`)

    }
}

// CRUD - READ - TODOS
export class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            let telefoneImpressao = cliente.getTelefones.forEach((telefone) => {
                `(${telefone.getDdd}) ${telefone.getNumero}` // <---- TENTAAAAANDOOOOOO ISSO AINDA!!!!
            })
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`Telefones: ` + telefoneImpressao)
            console.log(`CPF: ` + cliente.getCpf)
            console.log(`Gênero: ` + cliente.genero)
        })
        console.log(`\nLeitura concluída :)\n`)
    }
}

// CRUD - READ - ÚNICO
export class SelecionaCliente extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nSeleção de cliente`)
        let escolhaCPF = this.entrada.receberNumero(`Por favor informe o cpf do cliente que quer selecionar: `)
        this.clientes.forEach(cliente => {
            if (escolhaCPF == cliente.getCpf) {
                console.log(`--------------------------------------`);
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial)
                // console.log(`Telefones: ` + telefoneImpressao) <-------
                console.log(`CPF: ` + cliente.getCpf)
                console.log(`Gênero: ` + cliente.genero)
            }
        })

        console.log(`\nSeleção concluída :)\n`)
    }
}

// CRUD - READ - GENERO
export class SelecionaClienteGenero extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nSeleção de cliente`)
        let escolhaGenero = this.entrada.receberTexto(`Por favor informe o gênero dos clientes que quer listar (F/M/NB): `)
        this.clientes.forEach(cliente => {
            if (escolhaGenero == cliente.genero) {
                console.log(`--------------------------------------`);
                console.log(`Gênero: ` + cliente.genero)
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial)
                // console.log(`Telefones: ` + telefoneImpressao) <-------
                console.log(`CPF: ` + cliente.getCpf)
            }
        })

        console.log(`\nSeleção concluída :)\n`)
    }
}

// CRUD - READ - TODOS GENEROS
// export class ListaTodosClientesGenero extends Listagem {
//     private clientes: Array<Cliente>
//     constructor(clientes: Array<Cliente>) {
//         super()
//         this.clientes = clientes
//     }
//     public listar(): void {
//         console.log(`\nLista de todos os clientes:`);
//         let clientesOrdenados = this.clientes.sort(Cliente[3])
//         this.clientes.forEach(cliente => {
//             let telefoneImpressao = cliente.getTelefones.forEach((telefone) => {
//                 `(${telefone.getDdd}) ${telefone.getNumero}` // <---- TENTAAAAANDOOOOOO ISSO AINDA!!!!
//             })
//             console.log(`--------------------------------------`);
//             console.log(`Nome: ` + cliente.nome)
//             console.log(`Nome social: ` + cliente.nomeSocial)
//             console.log(`Telefones: ` + telefoneImpressao)
//             console.log(`CPF: ` + cliente.getCpf)
//             console.log(`Gênero: ` + cliente.genero)
//         })
//         console.log(`\nLeitura concluída :)\n`)
//     }
// }


// CRUD - UPDATE
export class AlteraCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nAlteração de cadastro do cliente`)
        let escolhaCPF = this.entrada.receberNumero(`Por favor informe o número do cpf do cliente que quer alterar: `)
        let clienteEncontrado
        this.clientes.forEach((cliente) => {
            if (escolhaCPF == cliente.getCpf) {
                clienteEncontrado = cliente
            } else {
                console.log(`CPF de cliente não encontrado!`)
            }
        })
        console.log(`\nAlteração de cadastro do cliente escolhido:`);
        let atualizarEscolha = this.entrada.receberNumero(`
        \nPor favor escolha uma opção de alteração:
        1 - Nome
        2 - NomeSocial
        3 - Gênero
        4 - Adicionar Telefone
        5 - Remover Telefone\n`)
        switch (atualizarEscolha) {
            case 1:
                let nomeAtualizado = this.entrada.receberTexto('Por favor digite o nome atualizado: ')
                clienteEncontrado.setNome(nomeAtualizado)
                break;
            case 2:
                let nomeSocialAtualizado = this.entrada.receberTexto('Por favor digite o nome social atualizado: ')
                clienteEncontrado.setNomeSocial(nomeSocialAtualizado)
                break;
            case 3:
                let generoAtualizado = this.entrada.receberTexto('Por favor digite o gênero atualizado (F/M/NB): ')
                clienteEncontrado.setGenero(generoAtualizado)
                break;
            case 4:
                let dddA = this.entrada.receberNumero('Por favor digite o ddd do telefone adicionado: ')
                let numeroA = this.entrada.receberNumero('Por favor digite o numero do telefone adicionado: ')
                clienteEncontrado.adicionarTelefone(dddA, numeroA)
                break;
            case 5:
                let dddR = this.entrada.receberNumero('Por favor digite o ddd do telefone removido: ')
                let numeroR = this.entrada.receberNumero('Por favor digite o numero do telefone removido: ')
                clienteEncontrado.removerTelefone(dddR, numeroR)
                break;
        }
        console.log(`\nAtualização concluída :)\n`);
    }
}

// CRUD - DELETE
export class DeletaCliente extends Delete {
    private empresa: Empresa
    private entrada: Entrada
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nExclusão de cadastro do cliente`)
        let clientesAtualizados: Array<Cliente> = []
        let escolhaCPF = this.entrada.receberNumero(`Por favor informe o número do cpf do cliente que quer deletar: `)
        this.empresa.getClientes.forEach((cliente) => {
            if (escolhaCPF != cliente.getCpf) {
                clientesAtualizados.push(cliente)
            }
        })
        this.empresa.setClientes(clientesAtualizados)
        console.log(`\nExclusão concluída :)\n`)
    }
}




// SubMenu
export class menuCliente {
    public listarSubMenuClientes(empresa: Empresa) {
        let execucao = true
        while (execucao) {
            console.log(`-----  Opções:  -----`)
            console.log(`1 - Cadastrar cliente`)
            console.log(`2 - Exibir o cliente`)
            console.log(`3 - Alterar cliente`)
            console.log(`4 - Deletar cliente`)
            console.log(`5 - Listar todos os clientes`)
            console.log(`6 - Listar clientes de um gênero`)
            console.log(`7 - Listar todos os clientes por gênero`)
            console.log(`6 - Listar os 05 clientes que mais gastaram`)
            console.log(`7 - Listar os 10 clientes que mais consumiram`)
            console.log(`8 - Listar os 10 clientes que menos consumiram`)
            console.log(`0 - Sair`)


            let entrada = new Entrada()
            let opcaoCliente = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
            switch (opcaoCliente) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let selecionaCliente = new SelecionaCliente(empresa.getClientes)
                    selecionaCliente.listar()
                    break;
                case 3:
                    let alteraCliente = new AlteraCliente(empresa.getClientes)
                    alteraCliente.atualizar()
                    break;
                case 4:
                    let deletaCliente = new DeletaCliente(empresa)
                    deletaCliente.deletar()
                    break;
                case 5:
                    let listagemClientes = new ListagemClientes(empresa.getClientes)
                    listagemClientes.listar()
                    break;
                case 6:
                    let selecionaClienteGenero = new SelecionaClienteGenero(empresa.getClientes)
                    selecionaClienteGenero.listar()
                    break;
                // case 7:
                //     let listaTodosClientesGenero = new ListaTodosClientesGenero(empresa.getClientes)
                //     listaTodosClientesGenero.listar()
                //     break;
                // case 8:
                //     let listagemClientesMaisGastaram = new ListagemClientesMaisGastaram (empresa.getConsumos) // <--- 6) 5 + gastadores
                //     listagemClientesMaisGastaram .listar()
                //     break;
                // case 9:
                //     let listagemClientesMaisConsumiram = new ListagemClientesMaisConsumiram (empresa.getConsumos) // <--- 1) 10 + consumidores
                //     listagemClientesMaisConsumiram .listar()
                //     break;
                // case 10:
                //     let listagemClientesMenosConsumiram = new ListagemClientesMenosConsumiram (empresa.getConsumos ) // <--- 5) 10 - consumidores
                //     listagemClientesMenosConsumiram .listar()
                //     break;
                case 0:
                    execucao = false
                    console.log(`Até mais`)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }
}