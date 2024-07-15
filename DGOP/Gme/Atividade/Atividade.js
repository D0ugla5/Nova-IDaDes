function calculaAreaTerreno(largura, profundidade){
    let areaTotal = largura * profundidade
    return areaTotal
}

let medidaMansão = calculaAreaTerreno(100, 100)
let medida = calculaAreaTerreno(50,40)
let medidaSobrado = calculaAreaTerreno(30,40)
let medidaComercial = calculaAreaTerreno(40,40)

console.log(medidaMansão + "m²")
console.log(medida + "m²")
console.log(medidaSobrado + "m²")
console.log(medidaComercial + "m²")