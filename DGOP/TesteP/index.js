const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
                                                                     
app.post('/e-Palindromo', function (req,res){
    console.log(req.body.idade)})

app.get('/e-Palindromo', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(8787)