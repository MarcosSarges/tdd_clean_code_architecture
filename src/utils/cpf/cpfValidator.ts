const COEFFICIENT = 11;

const cleanCaracterSpecial = (string: string) => string.replace(/\D/g, '');

const isAllNumberAreEqual = (string: string) => {
  return cleanCaracterSpecial(string)
    .split('')
    .every((caracter: string) => caracter === string[0]);
};

const calculateMod = (accumulator: number) => accumulator % COEFFICIENT;

const calculateRuleMinusTwo = (mod: number) => {
  return mod < 2 ? 0 : COEFFICIENT - mod;
};

const calculateAccumulator = (cpf: string) => {
  return cpf
    .split('')
    .reverse()
    .reduce(
      (prev, current, index) => (prev += parseInt(current) * (index + 2)),
      0
    );
};

const isValidRawCpf = (rawCpf: string | null | undefined) => {
  if (rawCpf === null) return false;
  if (rawCpf === undefined) return false;
  if (rawCpf.length < 11 || rawCpf.length > 14) return false;
  if (isAllNumberAreEqual(rawCpf)) return false;

  return true;
};

function cpfValidator(rawCpf: string | null | undefined) {
  if (!isValidRawCpf(rawCpf)) return false;

  const cpf = cleanCaracterSpecial(rawCpf!);

  const verifyingDigit1 = calculateRuleMinusTwo(
    calculateMod(calculateAccumulator(cpf.substring(0, 9)))
  );
  const verifyingDigit2 = calculateRuleMinusTwo(
    calculateMod(calculateAccumulator(cpf.substring(0, 10)))
  );

  const twoLastDigit = cpf.substring(cpf.length - 2, cpf.length);
  return twoLastDigit === `${verifyingDigit1}${verifyingDigit2}`;
}

export default cpfValidator;
