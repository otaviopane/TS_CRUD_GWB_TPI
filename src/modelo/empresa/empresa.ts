import Cliente from "../cliente/cliente"
import Consumo from "./consumo"
import Produto from "./produto"
import Servico from "./servico"


export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    public consumos: Array<Consumo> // <--- NA VERDADE ESTÁ NO CLIENTE
    constructor() {
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.consumos = [] // <--- NA VERDADE ESTÁ NO CLIENTE
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