/*Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).*/

module.exports = {
    curso: {
        nomeCurso: 'Curso JavaScript',
        notaAprovacao: 7,
        faltasMaximas: 10,
        listaEstudantes: [],
        alunoDois: function(estudante){
            this.listaEstudantes.push(estudante);
        },
        horaDaVerdade: function(aluno){
            let media = aluno.calcularMedia();
            if(aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao){
                return true;
            } else if (aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1)){
                return true;
            } else {
                return false;
            }
        },
        listaDaVerdade: function (){
            let vdd = [];
            for(let i = 0; i < this.listaEstudantes.length; i++){
                vdd.push(this.horaDaVerdade(this.listaEstudantes[i]));
            }
                return vdd;
            
        }
    }
}


