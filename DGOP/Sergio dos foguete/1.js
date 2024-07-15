
let userName, password
function verificalogin() {
    userName = document.getElementById('login').value
    password = document.getElementById('senha').value
}
if(userName == 'John' && password == 'Marston'){
    alert("Parabéns, você sabe o óbvio!")

}else{
    alert("Você não é Fan seu coco!")
}
