const data = require('../data/zoo_data');

const especie = (animal) =>
  data.species.find(({ name }) => name === animal).residents.length;
const especieSex = (animal, sexo) =>
  data.species
    .find(({ name }) => name === animal)
    .residents.filter(({ sex }) => sex === sexo).length;
const todos = data.species.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});

function countAnimals(animal = {}) {
  const { specie, sex } = animal;
  if (sex) return especieSex(specie, sex);
  if (specie) return especie(specie);
  return todos;
}

module.exports = countAnimals;
