const data = require('../data/zoo_data');

console.log(data.employees.find(object => console.log(object)).responsibleFor.map((obj) => console.log(obj)));

function getEmployeesCoverage() {
  // seu código aqui
}

module.exports = getEmployeesCoverage;
