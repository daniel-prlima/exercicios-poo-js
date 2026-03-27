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
    
    this.produtos.forEach((p) => {
      console.log(`${p.nome} - R$ ${p.preco.toFixed(2)}`);
    });
  }

  calcularTotal() {
    let total = 0;
    this.produtos.forEach((p) => {
      total += p.preco;
    });
    return total; 
  }
}