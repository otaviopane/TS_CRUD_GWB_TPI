import Cliente from "../cliente/cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Consumo {
   readonly data: Date
   public clienteCpf: number
   public servico?: Array<Servico>
   public produto?: Array<Produto>
   public quantiServico: number
   public quantiProduto: number



   constructor(data: Date, clienteCpf: number, quantiServico: number, quantiProduto: number, servico?: Array<Servico>, produto?: Array<Produto>) {
      this.data = data
      this.clienteCpf = clienteCpf
      this.servico = servico
      this.produto = produto
      this.quantiServico = quantiServico
      this.quantiProduto = quantiProduto
   }
}