import Cliente from "../cliente/cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Consumo {
   readonly data: Date
   public cliente: Cliente
   public servico?: Servico
   public produto?: Produto
   public quantiServico: number
   public quantiProduto: number



   constructor(data: Date, cliente: Cliente, servico: Servico, quantiServico: number, quantiProduto: number) {
      this.data = data
      this.cliente = cliente
      this.servico = servico
      this.quantiServico = quantiServico
      this.quantiProduto = quantiProduto
   }


   public get getCliente(): Cliente {
      return this.cliente
   }
   public get getServico(): Servico {
      return this.servico!
   }
   public get getProduto(): Produto {
      return this.produto!
   }
}