const getOpeningHours = require('../src/getOpeningHours');

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Testa se retorna todos os horários quanto não tem parâmetro', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string  The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Erro caso não use uma numero para representar a hora', () => {
    expect(() => getOpeningHours('Wednesday', 'PP:00-PM')).toThrow('The hour should represent a number');
  });
  it('Erro caso use uma abreviação diferente de AM e PM', () => {
    expect(() => getOpeningHours('Monday', '09:00-CM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Erro caso use uma hora menor que 0 e maior que 12', () => {
    expect(() => getOpeningHours('Monday', '15:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Erro caso use um minuto menor que 0 e maior que 59', () => {
    expect(() => getOpeningHours('Monday', '09:65-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Erro caso use um dia inexistente', () => {
    expect(() => getOpeningHours('Barabam', '09:00-PM')).toThrow('he day must be valid. Example: Monday');
  });
});
