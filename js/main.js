import { exercicio1 } from './src/Pessoa.js';
import { exercicio2 } from './src/Carro.js';
import { exercicio3 } from './src/ContaBancaria.js';
import { exercicio4 } from './src/Animal.js';
import { exercicio5 } from './src/Produto.js';
import { exercicio6 } from './src/Aluno.js';
import { exercicio7 } from './src/Livro.js';
import { exercicio8 } from './src/Usuario.js';
import { exercicio9 } from './src/Veiculo.js';
import { exercicio10 } from './src/Carrinho.js';


let resposta = parseInt(prompt('Digite o numero do exercicio ou 99 para sair: '));
let continuar = true;

do {
    resposta = parseInt(prompt('Digite o numero do exercicio ou 99 para sair: '));
    switch (resposta) {

        case 1:
            exercicio1();
            break;

        case 2:
            exercicio2();
            break;

        case 3:
            exercicio3();
            break;

        case 4:
            exercicio4();
            break;

        case 5:
            exercicio5();
            break;

        case 6:
            exercicio6();
            break;

        case 7:
            exercicio7();
            break;

        case 8:
            exercicio8();
            break;

        case 9:
            exercicio9();
            break;

        case 10:
            exercicio10();
            break;

        case 99:
            continuar = false;
            break;

        default:
            break;
    }
} while (continuar)
