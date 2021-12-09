import Cliente from "../modelo/cliente/cliente"
import Servico from "../modelo/empresa/servico"

export class Consumo {
   private cliente: Cliente
   private servico: Servico

   constructor(cliente: Cliente, servico: Servico) {
      this.cliente = cliente
      this.servico = servico
   }


   public get getCliente(): Cliente {
      return this.cliente
   }
   public get getServico(): Servico {
      return this.servico
   }
}