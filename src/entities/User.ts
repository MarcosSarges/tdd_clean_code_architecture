import cpfValidator from './../utils/cpf/cpfValidator';

export default class User {
  private cpf: string;

  constructor(cpf: string) {
    if (!cpfValidator(cpf)) throw new Error('CPF INVALIDO');

    this.cpf = cpf;
  }

  get userInfos() {
    return {
      cpf: this.cpf,
    };
  }
}
