const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.some((chefe) => chefe === id));
}

function getRelatedEmployees(managerId) {
  try {
    if (!isManager(managerId)) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
    return data.employees.filter((element) => element.managers.some((chefe) => chefe === managerId))
      .map((nome) => `${nome.firstName} ${nome.lastName}`);
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
