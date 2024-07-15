let lista = [32, 98, 88, 20]

let verificaPares = lista.every(function(itens){
    return itens % 2 == 0
})
verificaPares ? console.log("Todos são pares") : console.log("Nem todos são pares")