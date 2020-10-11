const express = require('express')
const app = express()
const mysql = require('mysql')

const bodyParser = require('body-parser')
const path = require('path')

// Body Parser
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Conexão com o Banco de Dados (MySQL)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

db.connect(err => {
    if (err) {
        console.log('Não foi possível conectar ao banco da dados')
    }

    // let sql = 'SELECT * FROM clientes'
    // db.query(sql, (err, results) => {
    //     console.log(results)
    // })
})

app.get('/', (req, resp) => {
    let query = db.query('SELECT * FROM clientes', (err, results) => {
        resp.render('index', { lista: results })
        console.log(results)
    })
})

app.get('/registrar', (req, resp) => {
    resp.render('cadastro', {})
})

app.post('/registrar', (req, resp) => {
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let empresa = req.body.empresa

    // Inserindo os valores no banco e dados
    db.query('INSERT INTO clientes (nome, sobrenome, empresa) VALUES (?, ?, ?)', [nome, sobrenome, empresa], (err, results) => {})

    resp.render('cadastro', {})
    console.log('Cadastro realizado com sucesso')
})


const port = '3000'
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})