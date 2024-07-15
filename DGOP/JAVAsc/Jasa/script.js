var pessoa = {
    idade: 32,
    altura: 172 + " cm",
    peso: 70,
    saudacao:function (){
    
    return ("Oi! Esse é " + this.altura + ".")
},
    asfaltado:false,
    endereco : {
        rua:'João',
        número:2,
    },
    times:[
        "vasco", "qatar", "Bayern", "Barcelona"
    ],
    salario:null

}
console.log(pessoa.salario)