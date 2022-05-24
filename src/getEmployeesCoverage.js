const data = require('../data/zoo_data');

const buscaNome = (nome) => data.employees.find(({firstName, id}) => firstName === nome || id === nome).firstName;
const sobrenome = (nome) => data.employees.find(({firstName, id}) => firstName === nome || id === nome).lastName;
const animaisID = (nome) => data.employees.find(({firstName, id}) => firstName === nome || id === nome).responsibleFor;


function getEmployeesCoverage(test) {
  
}
console.log(especies('e8481c1d-42ea-4610-8e11-1752cfc05a46'));
module.exports = getEmployeesCoverage;
