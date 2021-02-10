const data = [
  {
    id: '1',
    descricao: 'Feminino',
  },
  {
    id: '2',
    descricao: 'Masculino',
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