//Busca nomes

let nome = ["Vasco", "Douglas", "Robert"]
let buscNome = nome.includes("Vasco")


    if(buscNome === true){
        console.log("Posição " + ( 1 + nome.indexOf("Vasco")))
    }else{
        console,log("Não encontrado!")
    }
