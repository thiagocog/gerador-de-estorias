
const handleForm = (req, res, next) => {
  res.render('form');
};

const handlePostForm = (req, res, next) => {
  
};



module.exports = {
  getForm: handleForm,
  postForm: handlePostForm,
}