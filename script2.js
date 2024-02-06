//Exemplo com utilizando o node:
let rlsSync = require('readline-sync')

let nome = rlsSync.question("Qual o seu nome? \n")
console.log(`Olá, ${nome}`)

let idade = rlsSync.question("Qual o seu idade? \n")
console.log(`Sua idade é:  ${idade}`)