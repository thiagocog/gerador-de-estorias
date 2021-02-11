// IMPORTANDO PACOTES
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


// CRIANDO A APLICAÇÃO
const app = express()


// FAZENDO A LIGAÇÃO COM OS CONTROLLERS DAS ROTAS
const aboutController = require('./controller/about-controller')
const formController = require('./controller/form-controller')


// ESTABELECENDO QUE A VIEW ENGINE UTILIZADA SERÁ O EJS
app.set('view engine', 'ejs')


// ESTABELECENDO QUAIS ARQUIVOS ESTÁTICOS SERÃO UTILIZADOS
app.use(express.static(path.join(__dirname, 'public')))


// CONFIGURANDO O BODY-PARSER
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// CONFIGURANDO O HANDLE RAIZ (HOME OU INDEX)
const handleHome = (req, res, next) => {
  res.render('index')
  // next();
}


// CONFIGURANDO AS ROTAS DA APLICAÇÃO
app.get('/', handleHome);
app.get('/form', formController.getForm)
app.post('/form', formController.postForm)
app.get('/about', aboutController.getAbout)


// ABRINDO O SERVIDOR NA PORTA 3001
app.listen(3001, () => {
  console.log('Server running at http://localhost:3001')
})