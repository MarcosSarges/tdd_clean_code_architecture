import cpfValidator from './../utils/cpf/cpfValidator';

export default class User {
  private cpf: string;

  constructor(cpf: string) {
    if (!this.cpfIsValid(cpf)) throw new Error('CPF INVALIDO');

    this.cpf = cpf;
  }

  private cpfIsValid(cpf: string) {
    return cpfValidator(cpf);
  }

  getUserInfos() {
    return {
      cpf: this.cpf,
    };
  }
}
