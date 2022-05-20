const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((obj) => data.species.find((obj2) => obj2.id === obj));
}

module.exports = getSpeciesByIds;
