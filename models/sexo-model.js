const data = [
  {
    id: '1',
    descricao: 'Menina',
  },
  {
    id: '2',
    descricao: 'Menino',
  }
];


const genderID = (id) => {
  const resposta = data.find((item) => {
    return item.id === id;
  });
  return resposta;
};

const getAllGender = () => {
  return data;
};


module.exports = {
  getAll: getAllGender,
  getGenderById: genderID,
};