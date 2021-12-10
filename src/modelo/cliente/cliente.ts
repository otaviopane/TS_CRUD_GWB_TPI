import Consumo from "../empresa/consumo"
import Produto from "../empresa/produto"
import Servico from "../empresa/servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: number
    private dataCadastro: Date
    public telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public listaConsumos: Array<Consumo>
    constructor(cpf: number, nome: string, nomeSocial: string, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.listaConsumos = []
    }
    // Get
    public get getCpf(): number {
        return this.cpf
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    // Set
    public setNome(nome: string) {
        this.nome = nome
    }
    public setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial
    }
    public setGenero(genero: string) {
        this.genero = genero
    }
    public adicionarTelefone(ddd: number, numero: number) {
        let TelefoneAdicionado = new Telefone(ddd, numero)
        this.telefones.push(TelefoneAdicionado)

    }
    public removerTelefone(ddd: number, numero: number) {
        let telefonesAtualizados: Array<Telefone> = []
        this.telefones.map(telefone => {
            if (telefone.getDdd != ddd && telefone.getNumero != numero) {
                telefonesAtualizados.push(telefone)
            }
        })
        this.telefones = telefonesAtualizados
    }
    public setProdutosConsumidos(produtosConsumidos: Array<Produto>) {
        this.produtosConsumidos = produtosConsumidos
    }
    public setServicosConsumidos(servicosConsumidos: Array<Servico>) {
        this.servicosConsumidos = servicosConsumidos
    }
}