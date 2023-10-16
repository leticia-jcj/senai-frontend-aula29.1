var readline = require("readline-sync")

var nome = readline.question("Digite seu nome: ")
var idade = readline.questionInt("Digite sua idade: : ")
var salario = readline.questionFloat("Digite seu salário: ")

console.log("Nome: " + nome)
console.log("Idade: " + idade)
console.log("Salário: R$" + salario)