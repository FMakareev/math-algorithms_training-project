export const decimalToBinary = (number: number, pow: number = 2): string => {
  const numbersMap = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];

  if (number === 0) {
    return "0";
  }

  let result: any[] = [];

  while (number !== 0) {
    result.push(numbersMap[number % pow]);
    number = parseInt(number / pow);
  }
  return result.reverse().join("");
};
