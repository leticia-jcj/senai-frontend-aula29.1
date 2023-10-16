var readline = require("readline-sync")

var anoNasc = readline.question("Digite o ano do seu nascimento: ")
var anoAtual = 2023
var idade = anoAtual - anoNasc
console.log("Sua idade é " + idade + " anos.")


