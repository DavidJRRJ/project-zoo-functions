const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const buscaNome = (nome) =>
  employees.find(({ firstName, id }) => firstName === nome || id === nome)
    .firstName;

const sname = (nome) =>
  employees.find(({ firstName, id }) => firstName === nome || id === nome)
    .lastName;

const location = (code) =>
  employees
    .find(({ id, firstName }) => id === code || firstName === code)
    .responsibleFor.map(
      (local) => species.find(({ id }) => id === local).location,
    );

const especies = (code) =>
  employees
    .find(({ id, firstName }) => id === code || firstName === code)
    .responsibleFor.map((local) => species.find(({ id }) => id === local).name);

const objeto = (value = {}) => {
  // const { name, id } = value;
  const obj = {
    id: employees.find(({ firstName }) => firstName === value).id,
    fullName: `${buscaNome(value)} ${sname(value)}`,
    species: especies(value),
    locations: location(value),
  };
  return obj;
};

function getEmployeesCoverage(value) {
  return objeto(value);
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
