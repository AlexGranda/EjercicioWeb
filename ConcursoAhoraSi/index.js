const express = require('express')
const bodyParser = require('body-parser')
const app = express();


app.use(express.static('html'))


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/crearUsuario', function (req, res) {
    res.render('html/crearUsuario.html')
})

app.listen(8080, function () {
    console.log("Example app listening on port 8080!")
})

app.



