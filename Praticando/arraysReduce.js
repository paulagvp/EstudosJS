var num = [1,2,3,4,5,6,7,8,9,10];
//Uma boa opção para utilizar ao invés do if para fazer incremento em arrays
var numeros = num.reduce(function(total, numero){
    return total + numero;
},0)

console.log(numeros)

