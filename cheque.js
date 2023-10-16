var readline = require("readline-sync")

var cheque = readline.questionFloat("Digite o valor do cheque: ")
var salario = 500
var saldo = cheque + salario

console.log("Saldo disponível: R$" + saldo)