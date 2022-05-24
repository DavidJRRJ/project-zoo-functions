const data = require('../data/zoo_data');

const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const animais = (animal) => data.species.some(({ name }) => name === animal);
const pesqId = (animal) =>
  data.species.find(({ name }) => name === animal).availability;
const pesqDia = (dia) => Object.keys(data.hours).some((obj) => obj === dia);
const disponiveis = (dia) =>
  data.species
    .filter(({ availability }) => availability.includes(dia))
    .map(({ name }) => name);
const objetoDisp = (dia) => {
  const objeto = {
    [dia]: {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: disponiveis(dia),
    },
  };
  if (dia === 'Monday') return monday;
  return objeto;
};

const tudo = () => {
  const arr = [
    'Friday',
    'Monday',
    'Saturday',
    'Sunday',
    'Thursday',
    'Tuesday',
    'Wednesday',
    'Monday',
  ];
  let dias = {};
  arr.forEach((element) => {
    dias = {
      ...dias,
      ...objetoDisp(element),
    };
  });
  return dias;
};

function getSchedule(scheduleTarget) {
  if (animais(scheduleTarget) === true) return pesqId(scheduleTarget);
  if (scheduleTarget === 'Monday') return monday;
  if (pesqDia(scheduleTarget) === true) return objetoDisp(scheduleTarget);
  return tudo();
}

console.log(getSchedule('teste'));
module.exports = getSchedule;
