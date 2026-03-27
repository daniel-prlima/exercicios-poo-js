class Veiculo{
    constructor(marca,ano){
        this.marca = marca;
        this.ano = ano;
    }

    info(){
        console.log(this);
    }
}

class Carro extends Veiculo {
    constructor(marca,ano,portas){
        super(marca,ano);
        this.portas = portas;
    }
}

class Moto extends Veiculo {
    constructor(marca,ano,cilindradas){
        super(marca,ano);
        this.cilindradas = cilindradas;
    }
}

export function exercicio9(){
    const veiculo = new Veiculo("Skoda", 2022);
    const carro = new Carro("vw", 2025, 4);
    const moto = new Moto("Honda", 2024, 300);

    veiculo.info();
    carro.info();
    moto.info();
}