var readline = require("readline-sync")

var vendaSoftwares = readline.questionInt("Digite a quantidade de software vendido: ")
var salarioFixo = 500
var bonus = 50
var salarioFinal =  (vendaSoftwares * bonus) + salarioFixo


console.log("Salário Fixo: R$" + salarioFixo)
console.log("Bônus por venda: R$" + bonus)
console.log("Quantidade de softwares vendidos: " + vendaSoftwares)
console.log("Salário Final: R$" + salarioFinal)
