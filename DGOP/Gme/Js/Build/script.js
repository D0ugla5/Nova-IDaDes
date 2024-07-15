let login = '', senha,aLink2, article, div, h3, p1, input, p2, span, alink, main, section, footer, h2, p3, span2

let usr = []
let snh = []
let produto = []
if(localStorage.prodArr){
    produto = JSON.parse(localStorage.getItem('prodArr'))
}

let cod = []
if(localStorage.codArr){
    produto = JSON.parse(localStorage.getItem('codArr'))
}

let preço = []
if(localStorage.preçoArr){
    produto = JSON.parse(localStorage.getItem('prodArr'))
}

let link = []
if(localStorage.linkArr){
    produto = JSON.parse(localStorage.getItem('linkArr'))
}

let qnt = []
if(localStorage.qntArr){
    produto = JSON.parse(localStorage.getItem('qntArr'))
}

let totalCompra = []
if(localStorage.totCompArr){
    produto = JSON.parse(localStorage.getItem('totCompArr'))
}

main = document.createElement('main')
main.setAttribute('class', 'container')
document.body.append(main)
section = document.createElement('section')
section.setAttribute('class', 'products-container')
main.append(section)
for(i in produto){
    article = document.createElement('article')
    article.setAttribute('class', 'card')
    section.append(article)
    div = document.createElement('div')
    div.setAttribute('class', 'product-image')
    div.setAttribute('id', 'img' + i)
    article.append(div)
    document.getElementById('img-'  + i).style.backgroundImage = 'url(Imagens/img)' + i + '.jpg)'
    h3 = document.createElement('h3')
    h3.setAttribute('id', 'nome' + i)
    article.append(h3)
    p1 = document.createElement('p1')
    p1.innerHTML = 'Qtd'
    article.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.setAttribute('min', '1')
    input.setAttribute('max', '10')
    input.setAttribute('id', 'qtd-' + i)
    p1.append(input)
    article.append(p1)
    p2 = document.createElement('p')
    p2.innerHTML = 'R$'
    span = document.createElement('span')
    span.setAttribute(cod[i])
    span.setAttribute('class', 'bold')
    span.innerHTML = preço[i].   (2).replace('.',',')
    p2.append(span)
    article.append(p2)
    alink = document.createElement('a')
    alink.setAttribute('onclick', 'compra(' + "'" + 'qtd-' + i + "'" + ',' + "'" + cod[i] + "'" + ',' + i + ')')
    alink.setAttribute('class', 'btn')
    alink.setAttribute('href', 'https://www.youtube.com/watch?v=uTGBnh__zYM' + link[i])
    alink.setAttribute('target', '_blank')
    alink.innerHTML = 'compra'
    article.append(aLink)

}
footer = document.createElement('footer')
footer.setAttribute('id', 'rodape')
document.body.append(footer)
h2 = document.createElement("h2")
h2.innerHTML = 'Site de vendas de esquisitos'
footer.append(h2)
p3 = documeny.createElement('p')
p3.innerHTML = 'Direitos reservados &copy; 2024'
footer.append(p3)


function criarLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt('login: ')
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh = prompt('senha: ')
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh) 
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("login criado!")
    }else{
        alert('No puede')
    }

    function abrirLogin() {
        if(localStorage.usrArr){
            usr = JSON.parse(localStorage.getItem('usrArr'))
        }
        if(localStorage.snhArr){
            snh = JSON.parse(localStorage.getItem('snhArr'))
        }

        let login = prompt("Login: ")
        let senha = prompt("Senha: ")
        let indUsr = usr.indexOf(login);
        if(usr[indUsr] == login && snh[indUsr] == senha){
            document.querySelector('#log').innerHTML = `Ben venido!, ${login}`
        }else{
            alert('ERRROU! ')
        }
    }
}