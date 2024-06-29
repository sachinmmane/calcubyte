import { calculate } from "../app/_utils/Caluclate";
const generateLongString = (numValues: number): string => {
  const values = Array.from({ length: numValues }, (_, index) => index + 1);
  return values.join(",");
};

describe("calculate function", () => {
  test("returns 0 when inputValue is empty", () => {
    const result = calculate("");
    expect(result).toBe(0);
  });
  test("calculate returns the correct sum for comma-separated numbers", () => {
    const result1 = calculate("1,2,3");
    const result2 = calculate("9,5,3,20");
    const result3 = calculate("0,0,0,2");
    expect(result1).toBe(6); // Expected sum of 1 + 2 + 3
    expect(result2).toBe(37); // Expected sum of 9 + 5 + 3 + 20
    expect(result3).toBe(2); // Expected sum of 0 + 0 + 0 + 2
  });
  test("calculate returns the correct sum for a long comma-separated string", () => {
    const longInput = generateLongString(10000); // Generate a string with 10,000 values
    const expectedSum = (10000 * (10000 + 1)) / 2; // Sum of first 10,000 natural numbers (n* (n+1))/2
    const result = calculate(longInput);
    expect(result).toBe(expectedSum);
  });
  test("calcualte returns the correct sum for newline and comma-reprated numbers", () => {
    const result1 = calculate("1\n2,3");
    const result2 = calculate("1\n3,6\n6,2\n7");
    expect(result1).toBe(6);
    expect(result2).toBe(25);
  });
  test("calculate returns the correct sum with support for different delimiters", () => {
    const result1 = calculate("//;\n1;2");
    expect(result1).toBe(3);
    const result2 = calculate("//;\n1\n2;6\n7;4");
    expect(result2).toBe(20);
  });
  it("throws an error for negative numbers", () => {
    const input = "//;\n1;-2;3";
    expect(() => calculate(input)).toThrow("Negative numbers not allowed: -2");
  });

  it("throws an error for multiple negative numbers", () => {
    const input = "//;\n1;-2;-3;4;-5";
    expect(() => calculate(input)).toThrow(
      "Negative numbers not allowed: -2, -3, -5"
    );
  });
  it("throws an error for not a number", () => {
    const input = "sadsa";
    expect(() => calculate(input)).toThrow(
      "Please enter valid input as described in the Sample Input Strings"
    );
  });
});
