export default class Servico {
    public nome!: string
    public preco!: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }

    // Set
    public setNome(nome: string) {
        this.nome = nome
    }
    public setPreco(preco: number) {
        this.preco = preco
    }
}
