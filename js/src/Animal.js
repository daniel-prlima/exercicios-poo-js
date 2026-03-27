class Animal{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Falei!!!`)
    }
}
class Cachorro extends Animal{
    falar(){
        console.log(`au au au!!`)
    }
}
class Gato extends Animal{
    falar(){
        console.log(`miau miau!!`)
    }
}

export function exercicio4(){
    const pessoa = new Animal ("Daniel");
    const cachorro = new Cachorro("snoopy");
    const gato = new Gato("Pandora");

    pessoa.falar();
    cachorro.falar();
    gato.falar();
}

