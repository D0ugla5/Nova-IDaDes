let funci = ["Ana", "Paulo","jaime", "Estela"]
let salario = []
salario[0]= 1500.50
salario[1]= 2300.17
salario[2]= 4200.18
salario[3]= 3350.17
let maior = 0
for(let i = 0; i < salario.length; i++){
    if(salario[i] > maior){
        maior = salario[i]
    }
}
console.log(maior)