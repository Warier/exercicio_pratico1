const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');


const estudante = new Aluno('João', 'joao123', '12345');
console.log(estudante);


const turmaWeb = new Turma('web', 8.5);
console.log(turmaWeb);

const turmaMatematica = new TurmaPresencial('mat', 7, 0.8);
console.log(turmaMatematica);