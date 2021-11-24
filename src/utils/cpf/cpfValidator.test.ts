import cpfValidator from './cpfValidator';

describe('Validator cpf', () => {
  it('Deve validar o cpf sem mascara e retorna valido', () => {
    const CPF_VALIDO = '111.444.777-35';

    expect(cpfValidator(CPF_VALIDO)).toBeTruthy();
  });
  it('Deve validar o cpf e passar no caso o ultimo digito for 0', () => {
    const CPF_VALIDO = '84260727710';

    expect(cpfValidator(CPF_VALIDO)).toBeTruthy();
  });
  it('Deve validar o cpf e passar no caso o penultimo digito for 0', () => {
    const CPF_VALIDO = '21415160805';
    expect(cpfValidator(CPF_VALIDO)).toBeTruthy();
  });

  it('Deve validar o cpf com mascara e retorna valido', () => {
    const CPF_VALIDO = '031.076.252-99';

    expect(cpfValidator(CPF_VALIDO)).toBeTruthy();
  });

  it('Deve retornar que o cpf é invalido', () => {
    const CPF_INVALIDO = '03107625202';
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });
  it('Deve retornar que o cpf é invalido para caso a string tenha numeros repetidos', () => {
    const CPF_INVALIDO = '111.111.111-11';
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });

  it('Deve retornar false caso o input seja null', () => {
    const CPF_INVALIDO = null;
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });

  it('Deve retornar false caso o input seja undefined', () => {
    const CPF_INVALIDO = undefined;
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });
  it('Deve retornar false caso o cpf tenha menos que 11 caracteres', () => {
    const CPF_INVALIDO = '123456789';
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });
  it('Deve retornar false caso o cpf tenha mais que 14 caracteres', () => {
    const CPF_INVALIDO = '123.456.789-091';
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });
  it('Deve retornar false caso o cpf tenha letras', () => {
    const CPF_INVALIDO = '123.456.789-av';
    expect(cpfValidator(CPF_INVALIDO)).not.toBeTruthy();
  });
});
