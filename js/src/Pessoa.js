class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`)
    }
}

export function exercicio1 (){
    
    const pessoa1 = new Pessoa("Daniel", 23);
    const pessoa2 = new Pessoa("Vitor", 25);

    pessoa1.apresentar();
    pessoa2.apresentar();
}