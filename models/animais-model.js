const data = [
  { 
    id: '1',
    name: 'Cachorro',
  },
  { 
    id: '2',
    name: 'Gato',
  },
  { 
    id: '3',
    name: 'Coelho',
  },
  { 
    id: '4',
    name: 'Tartaruga',
  },
]


const getAll = () => {
  return data
}

getAnimalById = (id) => {
  const result = data.find(item => {
    return item.id == id
  })
  return result
}

module.exports = {
  getAll,
  getAnimalById
}