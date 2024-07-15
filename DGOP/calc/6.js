// 6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
// Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
// no primeiro Array.
let arrei = []
let arrei2 = []

for(let rdr2 = 0; rdr2 < 10; rdr2++ ){
    arrei.push(Number(prompt("Digite um número: ")))
    alert(arrei)
}
for(let rdr2 = 0; rdr2 < arrei.length; rdr2++){
    if(arrei[rdr2] % 2 != 0){
        arrei2.push(arrei[rdr2])
    }
}
alert("Dos arrays " + "\n" + arrei + "\n" + "Esses são os impares: " + "\n" + arrei2)