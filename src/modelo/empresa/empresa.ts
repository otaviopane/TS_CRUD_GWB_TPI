import Cliente from "../cliente/cliente"
import Produto from "./produto"
import Servico from "./servico"


export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor() {
        this.clientes = []
        this.produtos = []
        this.servicos = []
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