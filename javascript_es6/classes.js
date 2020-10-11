class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade
    }
}

let pessoa = new Pessoa('Lucas', 23)
console.log(`Meu nome é ${pessoa.getNome()} e tenho ${pessoa.getIdade()} anos`)