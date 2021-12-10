import Cliente from "../modelo/cliente/cliente";
import Produto from "../modelo/empresa/produto";
import Servico from "../modelo/empresa/servico";
import Cadastro from "../negocio/cadastro";

export class RegistrosBase {
   private clientes: Array<Cliente>
   private produtos: Array<Produto>
   private servicos: Array<Servico>

   constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
      this.clientes = clientes
      this.produtos = produtos
      this.servicos = servicos
   }

   public cadastrar(): void {
      console.log(`\nInício do cadastro automático`)
      this.clientes.push(new Cliente(
         19191919119, 'Jalvaro Jias', 'Jalvinho', 'M'
      ),
         new Cliente(
            51515151151, 'Jabo Jaciolo', 'Jacinho', 'M'
         ),
         new Cliente(
            25151515151, 'Juelene Jalduino', 'Juja', 'F'
         ),
         new Cliente(
            12121212112, 'Jiro Jomes', 'Jiro da Jassa', 'M'
         ),
         new Cliente(
            21212121212, 'Játia Jabreu', 'Jotoserra', 'F'
         ),
         new Cliente(
            27272727127, 'Jeymael', 'Jemocrata Jristão', 'M'
         ),
         new Cliente(
            13131313113, 'Jernando Jaddad', 'Jandrade', 'M'
         ),
         new Cliente(
            21313131313, 'Januela Javila', 'Janu', 'F'
         ),
         new Cliente(
            45454545145, 'Jeraldo Jalckmin', 'Jalvinho', 'M'
         ),
         new Cliente(
            24545454545, 'Jana Jamélia', 'Jamelinha', 'F'
         ),
         new Cliente(
            50505050150, 'Juilherme Joulos', 'Joulos', 'M'
         ),
         new Cliente(
            25050505050, 'Jônia Juajajara', 'Juajajara', 'F'
         ),
         new Cliente(
            15151515115, 'Jenrique Jeirelles', 'Jerely', 'M'
         ),
         new Cliente(
            17171717117, 'Kair Jolsonaro', 'Jiliciany', 'M'
         ),
         new Cliente(
            21717171717, 'Jamilton Jourão', 'Jeneraly', 'M'
         ),
         new Cliente(
            30303030130, 'Koão Jamoêdo ', 'Jamoio', 'M'
         ),
         new Cliente(
            54545454154, 'Koão Joulart Jilho', 'Joumuny', 'M'
         ),
         new Cliente(
            18181818118, 'Jarina Jilva', 'Jarininha', 'F'
         ),
         new Cliente(
            21818181818, 'Jeduardo Korge', 'Juda', 'M'
         ),
         new Cliente(
            16161616116, 'Jera Júcia', 'Jerinha', 'F'
         ),
         new Cliente(
            31313131313, 'Juis Jinacio', 'Jula', 'M'
         ),
         new Cliente(
            41313131313, 'Jilma Jousseff', 'Jilmae', 'F'
         ),
         new Cliente(
            21515151515, 'Jichel Jemer', 'Jemer', 'M'
         ),
         new Cliente(
            34545454545, 'Jernando Jenrique Jardoso', 'JJJ', 'M'
         ),
         new Cliente(
            34545454545, 'Jármen Júcia', 'Jucy', 'F'
         ),
         new Cliente(
            14444444444, 'Jowen Jurcum', 'Jurcum', 'NB'
         ),
         new Cliente(
            14949494949, 'Jangela Jerkel', 'Jerkel', 'F'
         ),
         new Cliente(
            16464646464, 'Kacinda Jardern', 'Kacinda', 'F'
         ),
         new Cliente(
            10101010101, 'Jarack Jobama', 'Jobama', 'M'
         ),
         new Cliente(
            20101010101, 'Jonald Jrump', 'Jrump', 'M'
         ))

      this.produtos.push(new Produto(
         "Shampoo Cabelos Lisos", 199
      ),
         new Produto(
            "Shampoo Cabelos Ondulados", 159
         ),
         new Produto(
            "Shampoo Cabelos Cacheados", 239
         ),
         new Produto(
            "Shampoo Cabelos Crespos", 269
         ),
         new Produto(
            "Shampoo Anti-Queda", 269
         ),
         new Produto(
            "Shampoo Masculino", 26
         ),
         new Produto(
            "Shampoo para barba", 26
         ),
         new Produto(
            "Condicionador Cabelos Lisos", 279
         ),
         new Produto(
            "Condicionador Cabelos Ondulados", 209
         ),
         new Produto(
            "Condicionador Cabelos Cacheados", 259
         ),
         new Produto(
            "Condicionador Cabelos Crespos", 299
         ),
         new Produto(
            "Condicionador Anti-Queda", 399
         ),
         new Produto(
            "Condicionador para barba", 23
         ),
         new Produto(
            "Creme Facial Anti-rugas", 450
         ),
         new Produto(
            "Creme Corporal Anti-estrias", 560
         ),
         new Produto(
            "Batom", 42
         ),
         new Produto(
            "Esmalte", 22
         ),
         new Produto(
            "Protetor Térmico", 129
         ),
         new Produto(
            "Creme Anti-oleosidade", 69
         ),
         new Produto(
            "Creme Anti-frizz", 99
         ),
         new Produto(
            "Creme Estimula Crescimento de Cabelo", 189
         ),
         new Produto(
            "Creme Estimula Crescimento de Barba", 139
         ),
         new Produto(
            "Creme Depilatório", 89
         ))

      this.servicos.push(new Servico(
         "Corte Cabelo Feminino", 99
      ),
         new Servico(
            "Corte Cabelo Masculino", 30
         ),
         new Servico(
            "Manicure", 30
         ),
         new Servico(
            "Pedicure", 30
         ),
         new Servico(
            "Design de Sobrancelhas", 30
         ),
         new Servico(
            "Pintura de Cabelos", 299
         ),
         new Servico(
            "Pigmentação Mechas", 199
         ),
         new Servico(
            "Pintura Californiana", 249
         ),
         new Servico(
            "Remoção de rugas", 449
         ),
         new Servico(
            "Remoção de manchas na pele", 429
         ),
         new Servico(
            "Aplicação de Botox", 829
         ),
         new Servico(
            "Tratamento para Emagrecimento", 1229
         ),
         new Servico(
            "Redução de Medidas", 629
         ),
         new Servico(
            "Corte de Barba", 69
         ),
         new Servico(
            "Modelagem de Barba", 99
         ),
         new Servico(
            "Tratamento para Quedas de Cabelo", 399
         ),
         new Servico(
            "Tratamento para Crescimento de Barba", 199
         ),
         new Servico(
            "Depilação", 99
         ))
   }
}