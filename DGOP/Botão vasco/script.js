
let Usuario = document.getElementById("Usuario")
let Senha = document.getElementById("Senha")

function Entrar(){
   console.log(Usuario.value) 
   console.log(Senha.value) 
    if(Usuario.value  == "vasco" && Senha.value == "vasco"){
        location.replace("https://vasco.com.br/")
    }else{
        location.replace("http://127.0.0.1:5500/Vasco/index.html")
    }
    if(Usuario.value  == "vasco" && Senha.value == "vasco"){
        alert("Entrou")
    }else{
        alert("Incorreto")
    }
}