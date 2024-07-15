// Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-
// o.
// Modifique os elementos do array de modo que a sequência de números fique do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

// Pergunta ao usuário para inserir 3 números e os armazena no array

    let numeros = [];


    for (let i = 0; i < 3; i++) {
        let numero = parseInt(prompt("Digite um número:"));
        numeros.push(numero);
    }
    alert("Números digitados: " + numeros.join(", "));
        let numerosInvertidos = numeros.slice().reverse();
    alert("Números invertidos: " + numerosInvertidos.join(", "));