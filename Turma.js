class Turma {
    #codigo;
    #nota;
  
    constructor(codigo, nota) {
      this.#codigo = codigo;
      this.#nota = nota;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    get nota() {
      return this.#nota;
    }
  
    set nota(nota) {
      this.#nota = nota;
    }
  
    aprovado() {
        const notaMinima = 6.0;
        const frequenciaMinima = 0.70;
        return this.nota >= notaMinima && this.frequencia >= frequenciaMinima;
    }
  }
  
  module.exports = Turma;