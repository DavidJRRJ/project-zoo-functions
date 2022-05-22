const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((crianca) => crianca.age < 18).length,
    adult: entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50)
      .length,
    senior: entrants.filter((idoso) => idoso.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const quant = countEntrants(entrants);
  const senior = data.prices.senior * quant.senior;
  const child = data.prices.child * quant.child;
  const adult = data.prices.adult * quant.adult;
  return senior + child + adult;
}

module.exports = { calculateEntry, countEntrants };
