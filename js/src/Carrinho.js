class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Carrinho {
  constructor() {

    this.produtos = [];
  }

  adicionarProduto(produto) {

    this.produtos.push(produto);
  }

  mostrarCarrinho() {
    if (this.produtos.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }

    this.produtos.forEach((produto) => {
      console.log(`${produto.nome} | R$ ${produto.preco.toFixed(2)}`);
    });
  }

  calcularTotal() {
    let total = 0;
    this.produtos.forEach((produto) => {
      total += produto.preco;
    });
    return total;
  }
}

export function exercicio10(){
  
  const carrinho = new Carrinho();

  const produto1 = new Produto("Camiseta", 49.99);
  const produto2 = new Produto("Calça Jeans", 89.99);
  const produto3 = new Produto("Tênis", 129.99);

  carrinho.adicionarProduto(produto1);
  carrinho.adicionarProduto(produto2);
  carrinho.adicionarProduto(produto3);

  carrinho.mostrarCarrinho();

  console.log(`Total: R$ ${carrinho.calcularTotal().toFixed(2)}`);


}