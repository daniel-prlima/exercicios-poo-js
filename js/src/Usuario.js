class Usuario{
    #senha;
    constructor(nome, senha){
        this.nome = nome;
        this.#senha = senha;
    }

    verificarSenha(senhaDigitada){
        return senhaDigitada !== this.#senha;
    }    
}

export function exercicio8(){
    let senhaDigitada = prompt("Digite a senha:");
    const senha = new Usuario("Daniel", "abc123")

    while(senha.verificarSenha(senhaDigitada)){
        senhaDigitada = prompt("Digite uma nova senha:");
        console.log("Acesso negado");
    }

    console.log("Acesso permitido");
}