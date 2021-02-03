const handleAbout = (req, res, next) => {
  res.render('about');
};



module.exports = {
  getAbout: handleAbout,
}