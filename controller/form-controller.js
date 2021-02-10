//-- IMPORTANDO BIBLIOTECAS
const ejs = require('ejs');
const fs = require('fs');
const htmlToPdf = require('html-pdf-node');

const modelGender = require('../models/sexo-model');
const modelAnimal = require('../models/animais-model')

//-- HANDLER GET FORM
const handleGetForm = (req, res, next) => {

  // Gênero
  const allGender = modelGender.getAll();
  const genderItens = allGender.map((item) => {
    return {
      value: item.id,
      label: item.descricao,
    };
  });

  // Animais
  const allAnimals = modelAnimal.getAll()
  const animalsItens = allAnimals.map((item) => {
    return {
      value: item.id,
      option: item.name
    }
  })

  const getViewModel = {
    sexo: genderItens,
    animal: animalsItens
  }


  res.render('form', getViewModel) // incluir o getViewModel como parâmetro neste método.
};



//-- HANDLER POST FORM
const handlePostForm = (req, res, next) => {

  const body = req.body;

  const genderResult = modelGender.getGenderById(body.childGender)
  const animalsResult = modelAnimal.getAnimalById(body.favoritePet)

  //-- ATRIBUTOS QUE O TEMPLATE USARÁ PARA CONSTRUIR O HTML DINAMICAMENTE
  const viewModel = {
    fatherName: body.fatherName, 
    motherName: body.motherName,
    email: body.email,
    childName: body.childName,
    childGender: genderResult.descricao,
    born: body.born,
    play: body.play,
    friendName: body.friendName,
    friendName2: body.friendName2,
    favoritePet: animalsResult.name
  }


  //-- TIRAR DÚVIDA (EZER) QUANDO À NECESSIDADE DESSA LINHA
  htmlText = fs.readFileSync('./views/estoria-pdf.ejs', 'utf8');


  //-- JUNTANDO O TEMPLATE COM OS DADOS RECOLHIDOS DO USUÁRIO
  htmlPronto = ejs.render(htmlText, viewModel);


  //-- CONFIGURANDO OS OBJETOS QUE SERÃO PASSADOS COMO ARGUMENTOS PARA A CRIAÇÃO DO PDF
  let file = {
    content: htmlPronto,
  };

  let options = {
    format: 'A4',
  };


  //-- GERANDO O PDF
  htmlToPdf.generatePdf(file, options)
    .then((pdfBuffer) => {
      res.contentType('application/pdf'); // informando ao browser o tipo de documento que será enviado
      res.send(pdfBuffer);
    });
};


//-- EXPORTAÇÃO DOS MÓDULOS
module.exports = {
  getForm: handleGetForm,
  postForm: handlePostForm, 
}