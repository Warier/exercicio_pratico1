const Turma = require('./Turma');

class TurmaPresencial extends Turma {
  #frequencia;

  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.#frequencia = frequencia;
  }

  get frequencia() {
    return this.#frequencia;
  }

  set frequencia(frequencia) {
    this.#frequencia = frequencia;
  }

  aprovado() {
    const notaMinima = 8.0;
    const frequenciaMinima = 0.6;
    return this.nota >= notaMinima && this.frequencia >= frequenciaMinima;
  }
}

module.exports = TurmaPresencial;