/*Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.*/

/*Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
em 1.*/

let curso = require('./curso/index2.js');



function Aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.faltas = function(){
        this.quantidadeFaltas += 1;
    }
    this.calcularMedia = function(){
        let soma = 0;
        for(let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
}


let aluno1 = new Aluno("Matheus", 10, [7, 7, 7, 7]);
let aluno2 = new Aluno("Tiago", 10, [7, 7, 7, 7]);
let aluno3 = new Aluno("Isabelly", 10, [7, 7, 7, 7]);

curso.curso.alunoDois(aluno1);
curso.curso.alunoDois(aluno2);
curso.curso.alunoDois(aluno3);

console.log(curso.curso.listaDaVerdade());


