/*
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
 */

//OPÇÕES DE COMIDAS E O TEMPO PRÉ-DEFINIDO
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

//ESCOLHA DO PRATO 1 - 3
function menu(escolha, tempoUsuario2){
    switch(escolha){
        case 'pipoca':
            mensagem = tempoMedio(pipoca, tempoUsuario2);
            break;
        case 'macarrao':
            mensagem = tempoMedio(macarrao, tempoUsuario2);
            break;
        case 'carne':
            mensagem = tempoMedio(carne, tempoUsuario2);
            break;
        case 'feijao':
            mensagem = tempoMedio(feijao, tempoUsuario2);
            break;
        case 'brigadeiro':
            mensagem= tempoMedio(brigadeiro, tempoUsuario2);
            break;
        default:
            mensagem = 'Não temos esse prato';        
    }
    return mensagem;
}


//TEMPO MINIMO E MAXIMO 2
function tempoMedio(tempoReal, tempoUsuario){
    if(tempoUsuario >= tempoReal*2 && tempoUsuario < tempoReal*3){
        mensagem2 = 'A comida queimou';
    }else if(tempoUsuario < tempoReal){
        mensagem2 = 'Tempo insuficiente';
    }else if(tempoUsuario >= tempoReal*3){
        mensagem2 = 'Kabuuuum!';
    }else {
        mensagem2 = 'Bom Apetite!!';
    }
    return mensagem2;
}

console.log(menu('feijao', 14));





