let array_altura = [1.90, 1, 11, 87]

console.log(array_altura.sort())

console.log(array_altura.sort((a,b)=>(a-b)))
console.log(array_altura.sort((a,b)=>{return a-b}))

console.log(array_altura.sort(function(a,b){return a,b}))