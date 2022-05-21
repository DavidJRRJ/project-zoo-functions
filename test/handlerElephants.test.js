const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se o parâmetro count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se o parâmetro names retorna uma string esperada', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se o parâmetro averageAge retorna o valor esperado', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se retorna null com um parâmetro inválido', () => {
    expect(handlerElephants('barabam')).toBe(null);
  });
  it('Testa se retorna undefined com um parâmetro undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('Testa se retorna um erro ao usar um parâmetro que não é string', () => {
    expect(handlerElephants(71)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se o parâmetro popularity retorna o esperado', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
