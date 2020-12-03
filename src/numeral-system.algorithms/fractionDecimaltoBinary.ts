import { decimalToBinary } from "./decimalToBinary";

export const fractionDecimaltoBinary = (
  fraction: number,
  accuracy: number = 4
) => {
  if (fraction.toString().search(/[0-9]+\./) === -1) {
    throw new Error(`${fraction} is not a fraction`);
  }

  let number = parseFloat(fraction.toString().replace(/[0-9]+\./, "0."));
  let result = "";
  const pow = 2;

  for (let i = 0; i < accuracy; i += 1) {
    number *= pow;
    if (parseInt(number) > 0) {
      result += 1;
      number -= 1;
    } else {
      result += 0;
    }
  }
  return `${decimalToBinary(parseInt(fraction))}.${result}`;
};
