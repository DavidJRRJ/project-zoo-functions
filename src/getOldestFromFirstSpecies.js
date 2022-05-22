const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((name) => name.id === id)
    .responsibleFor[0];
  const maisVelho = data.species
    .find((name) => name.id === idAnimal)
    .residents.reduce((acc, curr) => {
      if (acc.age > curr.age) return acc;
      return curr;
    });
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
