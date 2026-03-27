class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal(){
        console.log('Total: '+ (this.preco*this.quantidade));
    }
}

export function exercicio5(){
    const mousePad = new Produto("Mouse Pad", 29, 8);

    mousePad.calcularTotal();
}