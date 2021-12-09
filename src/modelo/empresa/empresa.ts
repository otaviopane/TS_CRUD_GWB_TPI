import Cliente from "../cliente/cliente"
import Produto from "./produto"
import Servico from "./servico"


export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    // private consumos: Array<Consumo>
    constructor() {
        this.clientes = []
        this.produtos = []
        this.servicos = []
        // this.consumos = []
    }
    public get getClientes() {
        return this.clientes
    }
    public get getProdutos() {
        return this.produtos
    }
    public get getServicos() {
        return this.servicos
    }
    // public get getConsumos() {
    //     return this.consumos
    // }

    public setClientes(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public setProdutos(produtos: Array<Produto>) {
        this.produtos = produtos
    }
    public setServicos(servicos: Array<Servico>) {
        this.servicos = servicos
    }
}