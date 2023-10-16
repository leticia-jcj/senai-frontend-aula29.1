var readline = require("readline-sync")

var nota1 = readline.questionFloat("Digite a 1º nota: ")
var nota2 = readline.questionFloat("Digite a 2º nota: ")
var nota3 = readline.questionFloat("Digite a 3º nota: ")
var nota4 = readline.questionFloat("Digite a 4º nota: ")

var media = (nota1 + nota2 + nota3 + nota4)/4
console.log("A media é: " + media)


