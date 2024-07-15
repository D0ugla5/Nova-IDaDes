let produtos = ["Red dead redmption", "Red dead redmption 2", "Red dead redmption undead nightmare", "Gta v", "Gta VI"]
let preços = ["98.90", "250.49", "50", "39", "500"]
let prodInfQ50 = 0
let prodEnt50e100 = ""
let soma = 0
let qtdMaior100 = 0
let media = 0
// for (let i = 0; i < 5; i++){
//     produtos[i] = prompt("Digite o produto: ")
//     preços[i] = Number(prompt("Digite o preço: "))
// }
// alert(produtos + '\n' + preços)
for(i = 0; i < preços.length; i++){
    if(preços[i] < 50){
    prodInfQ50
    }if(preços[i] > 50 && preços[i] < 100){
        prodEnt50e100 +=  ' ' + produtos[i]
    }
    if(preços[i] > 100){
        soma += preços[i]
        qtdMaior100++
    }
    media = soma / qtdMaior100
}
console.log(prodInfQ50)
console.log(prodEnt50e100)
console.log(media)