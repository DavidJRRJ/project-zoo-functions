const data = require('../data/zoo_data');

const expected = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'elephants',
      'giraffes',
    ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [
      'tigers',
      'otters',
      'frogs',
      'snakes',
      'elephants',
      'giraffes',
    ],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const animais = (animal) => data.species.some(({ name }) => name === animal);
const pesqId = (animal) =>
  data.species.find(({ name }) => name === animal).availability;
const pesqDia = (dia) => Object.keys(expected).some((obj) => obj === dia);
const objetoDia = (dia) => {
  const obj = {
    [dia]: expected[dia],
  };
  return obj;
};

function getSchedule(scheduleTarget) {
  if (animais(scheduleTarget) === true) return pesqId(scheduleTarget);
  if (scheduleTarget === 'Monday') return monday;
  if (pesqDia(scheduleTarget) === true) return objetoDia(scheduleTarget);
  if (animais(scheduleTarget) === false) return expected;
}

module.exports = getSchedule;
