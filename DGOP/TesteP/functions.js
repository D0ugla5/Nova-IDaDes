function Palindromar(go) {
    go = go.replace(/\s+/g, '').toLowerCase();
                //transforma em array//
    return go === go.split('').reverse().join('');
}

console.log(Palindromar("Arsenal sem bala")); 
console.log(Palindromar("vasco ocsav"));
console.log(Palindromar("L o l"));