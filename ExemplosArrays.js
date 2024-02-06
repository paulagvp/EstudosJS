// var valores = [1,10,11,25,16,18];
// console.log(valores[5]);

// for (var posicao = 0; posicao < valores.length; posicao++){
//     console.log("Posição " + posicao + " : " + valores[posicao]);
// }

// var carros = []
// carros[0] = "Volvo";
// carros[1] = "Jeep";

// console.log(carros)

// var motos = new Array("BMW", "Honda", "Yamaha");

// console.log(motos)

var nomesexercicios = new Array("Guilherme", "Manoel","Samuel", "Davi", "João");
//Acrescentar o nome "Mônica"
nomesexercicios.unshift("Mônica");
console.log(nomesexercicios);

//Retirar o ultimo elemento do Array
nomesexercicios.pop();
console.log(nomesexercicios);

//Encontrar a posição do Samuel
console.log("A posição do nome Samuel na lista é: " + nomesexercicios.indexOf("Samuel"));

//Trocar Manoel por Emanuel
nomesexercicios.splice(2,1,"Emanuel");
console.log(nomesexercicios.join("|"));

//recortar elementos de uma array e colocar em uma nova
var novaarry = nomesexercicios.slice(0,4);
console.log(novaarry);

//concatenação de arrays

var arrayconcat = novaarry.concat(nomesexercicios);
console.log(arrayconcat);
