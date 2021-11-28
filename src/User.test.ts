import User from './User';

const CPF_VALIDO = '553.566.310-73';
describe('User', () => {
  it('Deve criar uma instancia de user dado um cpf valido', () => {
    const user = new User(CPF_VALIDO);
    expect(user).toBeInstanceOf(User);
  });
  it('Deve retornar os dados do usuario', () => {
    const user = new User(CPF_VALIDO);
    expect(user.userInfos).toMatchSnapshot();
  });
  it('Deve lançar um erro dado um cpf invalido', () => {
    expect(() => {
      new User('553.566.310-00');
    }).toThrowError('CPF INVALIDO');
  });
});
