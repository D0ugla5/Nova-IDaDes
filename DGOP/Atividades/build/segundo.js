//Crie uma função que receba um array de strings e retorne o maior string

function mostrarMaior() {

    let vasco = [' Copa do Brasil 2011 ', ' Carioca 2015 ', ' Carioca 2016 ', ' taça rio 2020 '];

    let stringM = vasco;

    let maiorS = vasco[0];

    for (let i = 0; i < stringM.length; i++) {
        if(vasco[i].length > maiorS.length){
            //troca o i
            maiorS = vasco[i]
        }
        alert("O maior string de " + '\n' + vasco + '\n' + " o string maior é : " + '\n' + maiorS)  
    }
}
mostrarMaior();
