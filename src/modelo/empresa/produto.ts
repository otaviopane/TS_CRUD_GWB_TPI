export default class Produto {
    public nome!: string
    public preco!: number

    // Set
    public setNome(nome: string) {
        this.nome = nome
    }
    public setPreco(preco: number) {
        this.preco = preco
    }
}