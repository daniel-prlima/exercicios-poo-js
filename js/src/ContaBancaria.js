class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        this.saldo -= valor;
    }

    verSaldo(){
        console.log(`Saldo: R$ ${this.saldo}`)
    }
}

export function exercicio3(){
    const picpay = new ContaBancaria("Daniel", 1000);

    picpay.depositar(1000);
    picpay.sacar(200);
    picpay.verSaldo();
}