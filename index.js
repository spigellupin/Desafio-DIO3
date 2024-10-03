class Heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
}
let hero = new Heroi("Samuel", "24", "arqueiro", "chuva de Flecha");

console.log("O " + hero.tipo + " atacou usando " + hero.ataque);