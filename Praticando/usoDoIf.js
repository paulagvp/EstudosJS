// var pais = "Brasil";

// if(pais == "Brasil"){
//     console.log("Você é Brasileiro")
// }else{
//     console.log("Você não é Brasileiro")
// }
// var diasem = 10;
// switch(diasem){
//     case 1:
//         console.log("Domingo")
//         break;
//     case 2:
//         console.log("Segunda")
//         break;
//     case 3:
//         console.log("Terça")
//         break;
//     case 4:
//         console.log("Quarta")
//         break;
//     case 5:
//         console.log("Quinta")
//         break;
//     case 6:
//         console.log("Sexta")
//         break;
//     case 7:
//         console.log("Sábado")
//         break;
//     default:
//         console.log("Este dia da semana não existe, digite um dia válido.")

// }

console.log("Olá, digite o numero da opção desejada: \n 1 - Café \n 2 - Leite \n 3 - Chá")

var bebida = 10;

switch(bebida){
    case 1:
        valor = 5;
        console.log("Você selecionou Café, o valor da sua bebida é R$ " + valor.toFixed(2) + ".")
        break;

    case 2:
        valor = 4;
        console.log("Você selecionou Leite, o valor da sua bebida é R$ " + valor.toFixed(2) + ".")
        break;
    case 3:
        valor = 3;
        console.log("Você selecionou Chá, o valor da sua bebida é R$ " + valor.toFixed(2) + ".")
        break;
    default:
        console.log("Esta opção não existe, digite uma opção válida.")
}