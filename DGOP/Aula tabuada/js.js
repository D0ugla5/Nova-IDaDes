// let numero, soma = 0

// for (i=0; i < 5; i++){
//     numero = Number(prompt("Digite um valor: "))
//     if(numero > 7){
//     soma += numero 
//     }
// }
// alert ("A soma dos números maiores que 7 é " + soma)
// Função para realizar a adição
// Função para realizar a adição
function adicao(num1, num2) {
    return num1 + num2;
}
function subtracao(num1, num2) {
    return num1 - num2;
}
function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro! Divisão por zero.";
    } else {
        return num1 / num2;
    }
}
function multiplicacao(num1, num2) {
    return num1 * num2;
}
function main() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let operacao = parseInt(prompt("Escolha a operação:\n1 - Adição\n2 - Subtração\n3 - Divisão\n4 - Multiplicação"));
    let resultado;
    switch (operacao) {
        case 1:
            resultado = adicao(num1, num2);
            break;
        case 2:
            resultado = subtracao(num1, num2);
            break;
        case 3:
            resultado = divisao(num1, num2);
            break;
        case 4:
            resultado = multiplicacao(num1, num2);
            break;
        default:
            resultado = "Opção inválida!";
    }
    alert("Resultado da operação: "+ num1  + resultado);
}
main();