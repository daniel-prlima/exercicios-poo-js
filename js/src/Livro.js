class Livro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

export function exercicio7(){
    const livro1 = new Livro("Entendendo Algoritmos","Aditya Y. Bhargava");
    const livro2 = new Livro("Código Limpo: Habilidades Práticas do Agile Software","Robert C. Martin");
    const livro3 = new Livro("Pense em Python – 3ª Edição: Pense como um cientista da computação","Allen B. Downey");

    const arrayLivros = [livro1, livro2, livro3];

    console.log(arrayLivros)
    for(let i=0; i < arrayLivros.length; i++){
        console.log(arrayLivros[i]);
    }
}