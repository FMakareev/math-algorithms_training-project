import { decimalToBinary } from "./decimalToBinary";
import { fractionDecimaltoBinary } from "./fractionDecimaltoBinary";

it("decimalToBinary", () => {
  expect(decimalToBinary(0)).toEqual("0");
  expect(decimalToBinary(1)).toEqual("1");
  expect(decimalToBinary(2)).toEqual("10");
  expect(decimalToBinary(26)).toEqual("11010");
  expect(decimalToBinary(26, 16)).toEqual("1A");
});
it("fractionDecimaltoBinary", () => {
  try {
    fractionDecimaltoBinary(0, 8);
  } catch (e) {
    expect(e.message).toEqual(`0 is not a fraction`);
  }

  expect(fractionDecimaltoBinary(0.1, 4)).toEqual("0.0001");
  expect(fractionDecimaltoBinary(0.1, 8)).toEqual("0.00011001");
  expect(fractionDecimaltoBinary(0.345, 8)).toEqual("0.01011000");
  expect(fractionDecimaltoBinary(2.345, 8)).toEqual("10.01011000");
});
