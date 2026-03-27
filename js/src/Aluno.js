class Aluno {
    constructor(nome, n1, n2){
        this.nome = nome;
        this.n1 = n1;
        this.n2 = n2
    }

    calcularMedia(){
        let media = (this.n1*this.n2)/2;

        if(media >= 7){
            console.log("Aprovado!!");
        }else{
            console.log("Reprovado!!");
        }
    }
}

export function exercicio6(){
    const aluno1 = new Aluno("Alberto", 5, 10);

    aluno1.calcularMedia();
}