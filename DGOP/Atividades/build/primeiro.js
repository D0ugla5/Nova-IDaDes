// Função recebe dois números e retorne a soma.


function somar() {
   n1 = Number(prompt("N1: "))
   n2 = Number(prompt("N2: "))
   if (n1 + n2 == 2) {
      alert("Do you mean Red dead Redemption " + (n1+n2))
   } else {
      alert(n1 + n2)
   }
}
somar();