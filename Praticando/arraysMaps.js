var num = [1,2,3,4,5,6,7,8,9,10];
//Uma boa opção para utilizar ao invés do if para fazer incremento em arrays
var numeros = num.map(function(valor){
    return valor * 2
})

console.log(numeros);

var funcionarios = [
    {nome: "Luiz", idade: 72},
    {nome: "Gil", idade: 42},
    {nome: "Davi", idade: 82},
    {nome: "Lucas", idade: 22}
]
nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);