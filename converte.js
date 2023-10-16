var readline = require("readline-sync")

var tempF = readline.questionFloat("Digite a temperatura em Fahrenheit: ")

var converte =  (5 * (tempF-32) / 9)
console.log("A media é: " + converte)


