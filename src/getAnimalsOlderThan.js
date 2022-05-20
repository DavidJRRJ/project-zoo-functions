const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((element) => animal === element.name).residents.every((idade) => idade.age > age);    
}
console.log(getAnimalsOlderThan('lions', 5))

module.exports = getAnimalsOlderThan;
