export default class User {
  private cpf: string | undefined;

  private static readonly COEFFICIENT = 11;

  constructor(cpf?: string) {
    if (cpf) {
      if (!this.cpfIsValid(cpf)) throw new Error('CPF INVALIDO');
      this.cpf = cpf;
    }
  }

  private cpfIsValid(cpf: string) {
    return this.cpfValidator(cpf);
  }

  getUserInfos() {
    return {
      cpf: this.cpf,
    };
  }

  private cleanCaractereSpecial(string: string) {
    return string.replace(/\D/g, '');
  }

  private isAllNumberAreEqual(string: string) {
    return this.cleanCaractereSpecial(string)
      .split('')
      .every((caractere: string) => caractere === string[0]);
  }

  private calculateMod = (accumulator: number) =>
    accumulator % User.COEFFICIENT;

  private calculateRuleMinusTwo = (mod: number) => {
    return mod < 2 ? 0 : User.COEFFICIENT - mod;
  };

  private calculateAccumulator(cpf: string) {
    return cpf
      .split('')
      .reverse()
      .reduce(
        (prev, current, index) => (prev += parseInt(current) * (index + 2)),
        0
      );
  }

  private isValidRawCpf = (rawCpf: string | null | undefined) => {
    if (rawCpf === null) return false;
    if (rawCpf === undefined) return false;
    if (rawCpf.length < 11 || rawCpf.length > 14) return false;
    if (this.isAllNumberAreEqual(rawCpf)) return false;

    return true;
  };

  cpfValidator(rawCpf: string | null | undefined) {
    if (!this.isValidRawCpf(rawCpf)) return false;

    const cpf = this.cleanCaractereSpecial(rawCpf!);

    const verifyingDigit1 = this.calculateRuleMinusTwo(
      this.calculateMod(this.calculateAccumulator(cpf.substring(0, 9)))
    );
    const verifyingDigit2 = this.calculateRuleMinusTwo(
      this.calculateMod(this.calculateAccumulator(cpf.substring(0, 10)))
    );

    const twoLastDigit = cpf.substring(cpf.length - 2, cpf.length);
    return twoLastDigit === `${verifyingDigit1}${verifyingDigit2}`;
  }
}
