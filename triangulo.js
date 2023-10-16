var readline = require("readline-sync")

var base = readline.questionFloat("Digite a base do triângulo: ")
var altura = readline.questionFloat("Digite a altura do triângulo: ")

var area = (base * altura)/2

console.log("A área do triângulo é: " + area)


