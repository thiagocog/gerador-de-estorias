const data = [
  {
    id: '1',
    descricao: 'Acre',
  },
  {
    id: '2',
    descricao: 'Alagoas',
  },
  {
    id: '3',
    descricao: 'Amapá',
  },
  {
    id: '4',
    descricao: 'Amazonas',
  },
  {
    id: '5',
    descricao: 'Bahia',
  },
  {
    id: '6',
    descricao: 'Ceará',
  },
  {
    id: '7',
    descricao: 'Espírito Santo',
  },
  {
    id: '8',
    descricao: 'Goiás',
  },
  {
    id: '9',
    descricao: 'Maranhão',
  },
  {
    id: '10',
    descricao: 'Mata Grosso',
  },
  {
    id: '11',
    descricao: 'Mato Grosso do Sul',
  },
  {
    id: '12',
    descricao: 'Minas Gerais',
  },
  {
    id: '13',
    descricao: 'Pará',
  },
  {
    id: '14',
    descricao: 'Paraíba',
  },
  {
    id: '15',
    descricao: 'Paraná',
  },
  {
    id: '16',
    descricao: 'Pernambuco',
  },
  {
    id: '17',
    descricao: 'Piauí',
  },
  {
    id: '18',
    descricao: 'Rio de Janeiro',
  },
  {
    id: '19',
    descricao: 'Rio Grande do Norte',
  },
  {
    id: '20',
    descricao: 'Rio Grande do Sul',
  },
  {
    id: '21',
    descricao: 'Rondônia',
  },
  {
    id: '22',
    descricao: 'Roraima',
  },
  {
    id: '23',
    descricao: 'Santa Catarina',
  },
  {
    id: '24',
    descricao: 'São Paulo',
  },
  {
    id: '25',
    descricao: 'Sergipe',
  },
  {
    id: '26',
    descricao: 'Tocantins',
  },
  {
    id: '27',
    descricao: 'Distrito Federal',
  }
];


const stateID = (id) => {
  const resposta = data.find((item) => {
    return item.id === id;
  });
  return resposta;
};

const getAllStates = () => {
  return data;
};


module.exports = {
  getAll: getAllStates,
  getStateById: stateID,
};