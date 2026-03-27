class Carro{
    constructor(marca, modelo, velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar(){
        this.velocidade += 10;
    }

    frear(){
        this.velocidade -= 5;
    }

    mostrarVelocidade(){
        console.log (this.velocidade + "km/h");
    }
}

export function exercicio2(){
    const giulia = new Carro("Alfa Romeu", "Giulia Quadrifoglio", 110);

    giulia.acelerar();
    giulia.frear();
    giulia.mostrarVelocidade();
}