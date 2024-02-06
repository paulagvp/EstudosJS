// var num = [1,2,3,4,5,6,7,8,9,10];

// //Uma forma de utilizar -> inline

// var filterEmAcao = num.filter(item => item % 2 === 0);
// console.log(filterEmAcao);

// //fazendo por meio de declaração de função
// var numFiltrados = num.filter(
//     function(valor){
//         return valor > 5;
//     }
// )
// console.log(numFiltrados);

// //usando funcao fora

// function buscarvalores(valor){
//     return valor < 5;
// }

// var numEncontrados = num.filter(buscarvalores);
// console.log(numEncontrados);

// //filter com objeto
// var funcionarios = [
//     {nome: "Luiz", idade: 72},
//     {nome: "Gil", idade: 42},
//     {nome: "Davi", idade: 82},
//     {nome: "Lucas", idade: 22}
// ]

// var pessoasListagem = funcionarios.filter(
//     function(valor){
//         console.log(valor.nome);
//         console.log(valor.idade);
//         //caso eu queira apenas os nomes com 4 letras
//         return valor.nome.length == 4
// })

// console.log(pessoasListagem);

//praticando: 

var produto = [
    {id: 1 , descricao: "Fogão", categoria: "Eletrodomesticos"},
    {id: 2 , descricao: "Geladeira", categoria: "Eletrodomesticos"},
    {id: 3 , descricao: "Celular", categoria: "Eletronico"}
]

var eletrodomesticosListagem = produto.filter(
    function(valor){
        return valor.categoria = "Eletrodomesticos";
    })
console.log(eletrodomesticosListagem);

