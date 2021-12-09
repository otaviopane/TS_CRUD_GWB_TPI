// import Cliente from "../modelo/cliente/cliente";
// import Produto from "../modelo/empresa/produto";
// import Servico from "../modelo/empresa/servico";
// import Cadastro from "../negocio/cadastro";

// class RegistrosBase extends Cadastro {
//    private clientes: Array<Cliente>
//    private produtos: Array<Produto>
//    private servicos: Array<Servico>

//    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
//       super()
//       this.clientes = clientes
//       this.produtos = produtos
//       this.servicos = servicos
//    }

//    public cadastrar(): void {
//       console.log(`\nInício do cadastro automático`)
//       this.clientes.push(new Cliente(
//          19191919119, 'Jalvaro Jias', 'Jalvinho', 'M', 019, 919191919
//       )
//       this.clientes.push(new Cliente(
//          51515151151, 'Jabo Jaciolo', 'Jacinho', 'M', 051, 951515151
//       )
//       this.clientes.push(new Cliente(
//          25151515151, 'Juelene Jalduino', 'Juja', 'F', 051, 951515102
//       )
//       this.clientes.push(new Cliente(
//          12121212112, 'Jiro Jomes', 'Jiro da Jassa', 'M', 012, 912121212
//       )
//       this.clientes.push(new Cliente(
//          21212121212, 'Játia Jabreu', 'Jotoserra', 'F', 012, 912121202
//       )
//       this.clientes.push(new Cliente(
//          27272727127, 'Jeymael', 'Jemocrata Jristão', 'M', 027, 927272727
//       )
//       this.clientes.push(new Cliente(
//          13131313113, 'Jernando Jaddad', 'Jandrade', 'M', 013, 913131313
//       )
//       this.clientes.push(new Cliente(
//          21313131313, 'Januela Javila', 'Janu', 'F', 013, 913131302
//       )
//       this.clientes.push(new Cliente(
//          45454545145, 'Jeraldo Jalckmin', 'Jalvinho', 'M', 045, 945454545
//       )
//       this.clientes.push(new Cliente(
//          24545454545, 'Jana Jamélia', 'Jamelinha', 'F', 045, 945454502
//       )
//       this.clientes.push(new Cliente(
//          50505050150, 'Juilherme Joulos', 'Joulos', 'M', 050, 950505050
//       )
//       this.clientes.push(new Cliente(
//          25050505050, 'Jônia Juajajara', 'Juajajara', 'F', 050, 950505002
//       )
//       this.clientes.push(new Cliente(
//          15151515115, 'Jenrique Jeirelles', 'Jerely', 'M', 015, 915151515
//       )
//       this.clientes.push(new Cliente(
//          17171717117, 'Kair Jolsonaro', 'Jiliciany', 'M', 017, 917171717
//       )
//       this.clientes.push(new Cliente(
//          21717171717, 'Jamilton Jourão', 'Jeneraly', 'M', 017, 917171702
//       )
//       this.clientes.push(new Cliente(
//          30303030130, 'Koão Jamoêdo ', 'Jamoio', 'M', 030, 930303030
//       )
//       this.clientes.push(new Cliente(
//          54545454154, 'Koão Joulart Jilho', 'Joumuny', 'M', 054, 954545454
//       )
//       this.clientes.push(new Cliente(
//          18181818118, 'Jarina Jilva', 'Jarininha', 'F', 018, 918181818
//       )
//       this.clientes.push(new Cliente(
//          21818181818, 'Jeduardo Korge', 'Juda', 'M', 018, 918181802
//       )
//       this.clientes.push(new Cliente(
//          16161616116, 'Jera Júcia', 'Jerinha', 'F', 016, 916161616
//       )
//       this.clientes.push(new Cliente(
//          31313131313, 'Juis Jinacio', 'Jula', 'M', 013, 913131303
//       )
//       this.clientes.push(new Cliente(
//          41313131313, 'Jilma Jousseff', 'Jilmae', 'F', 013, 913131304
//       )
//       this.clientes.push(new Cliente(
//          21515151515, 'Jichel Jemer', 'Jemer', 'M', 015, 915151502
//       )
//       this.clientes.push(new Cliente(
//          34545454545, 'Jernando Jenrique Jardoso', 'JJJ', 'M', 045, 945454503
//       )
//       this.clientes.push(new Cliente(
//          34545454545, 'Jármen Júcia', 'Jucy', 'F', 045, 945454503
//       )
//       this.clientes.push(new Cliente(
//          04444444444, 'Jowen Jurcum', 'Jurcum', 'NB', 044, 944444444
//       )
//       this.clientes.push(new Cliente(
//          04949494949, 'Jangela Jerkel', 'Jerkel', 'F', 049, 949494949
//       )
//       this.clientes.push(new Cliente(
//          06464646464, 'Kacinda Jardern', 'Kacinda', 'F', 064, 964646464
//       )
//       this.clientes.push(new Cliente(
//          00101010101, 'Jarack Jobama', 'Jobama', 'M', 001, 901010101
//       )
//       this.clientes.push(new Cliente(
//          20101010101, 'Jonald Jrump', 'Jrump', 'M', 001, 901010102
//       )
      
//       this.produtos.push(new Produto(
//          "Shampoo Cabelos Lisos", 199
//       ))
//       this.produtos.push(new Produto(
//          "Shampoo Cabelos Ondulados", 159
//       ))
//       this.produtos.push(new Produto(
//          "Shampoo Cabelos Cacheados", 239
//       ))
//       this.produtos.push(new Produto(
//          "Shampoo Cabelos Crespos", 269
//       ))
//       this.produtos.push(new Produto(
//          "Shampoo Anti-Queda", 269
//       ))
//       this.produtos.push(new Produto(
//          "Shampoo Masculino", 26
//       ))
//       this.produtos.push(new Produto(
//          "Shampoo para barba", 26
//       ))
//       this.produtos.push(new Produto(
//          "Condicionador Cabelos Lisos", 279
//       ))
//       this.produtos.push(new Produto(
//          "Condicionador Cabelos Ondulados", 209
//       ))
//       this.produtos.push(new Produto(
//          "Condicionador Cabelos Cacheados", 259
//       ))
//       this.produtos.push(new Produto(
//          "Condicionador Cabelos Crespos", 299
//       ))
//       this.produtos.push(new Produto(
//          "Condicionador Anti-Queda", 399
//       ))
//       this.produtos.push(new Produto(
//          "Condicionador para barba", 23
//       ))
//       this.produtos.push(new Produto(
//          "Creme Facial Anti-rugas", 450
//       ))
//       this.produtos.push(new Produto(
//          "Creme Corporal Anti-estrias", 560
//       ))
//       this.produtos.push(new Produto(
//          "Batom", 42
//       ))
//       this.produtos.push(new Produto(
//          "Esmalte", 22
//       ))
//       this.produtos.push(new Produto(
//          "Protetor Térmico", 129
//       ))
//       this.produtos.push(new Produto(
//          "Creme Anti-oleosidade", 69
//       ))
//       this.produtos.push(new Produto(
//          "Creme Anti-frizz", 99
//       ))
//       this.produtos.push(new Produto(
//          "Creme Estimula Crescimento de Cabelo", 189
//       ))
//       this.produtos.push(new Produto(
//          "Creme Estimula Crescimento de Barba", 139
//       ))
//       this.produtos.push(new Produto(
//          "Creme Depilatório", 89
//       ))

//       this.servicos.push(new Servico(
//          "Corte Cabelo Feminino", 99
//       ))
//       this.servicos.push(new Servico(
//          "Corte Cabelo Masculino", 30
//       ))
//       this.servicos.push(new Servico(
//          "Manicure", 30
//       ))
//       this.servicos.push(new Servico(
//          "Pedicure", 30
//       ))
//       this.servicos.push(new Servico(
//          "Design de Sobrancelhas", 30
//       ))
//       this.servicos.push(new Servico(
//          "Pintura de Cabelos", 299
//       ))
//       this.servicos.push(new Servico(
//          "Pigmentação Mechas", 199
//       ))
//       this.servicos.push(new Servico(
//          "Pintura Californiana", 249
//       ))
//       this.servicos.push(new Servico(
//          "Remoção de rugas", 449
//       ))
//       this.servicos.push(new Servico(
//          "Remoção de manchas na pele", 429
//       ))
//       this.servicos.push(new Servico(
//          "Aplicação de Botox", 829
//       ))
//       this.servicos.push(new Servico(
//          "Tratamento para Emagrecimento", 1229
//       ))
//       this.servicos.push(new Servico(
//          "Redução de Medidas", 629
//       ))
//       this.servicos.push(new Servico(
//          "Corte de Barba", 69
//       ))
//       this.servicos.push(new Servico(
//          "Modelagem de Barba", 99
//       ))
//       this.servicos.push(new Servico(
//          "Tratamento para Quedas de Cabelo", 399
//       ))
//       this.servicos.push(new Servico(
//          "Tratamento para Crescimento de Barba", 199
//       ))
//       this.servicos.push(new Servico(
//          "Depilação", 99
//       ))
//    }
