import { calculate, saveLogs } from "../app/_utils/Caluclate";
const generateLongString = (numValues: number): string => {
  const values = Array.from({ length: numValues }, (_, index) => index + 1);
  return values.join(",");
};

describe("calculate function", () => {
  it("returns 0 when inputValue is empty", () => {
    const result = calculate("");
    expect(result).toBe(0);
  });
  it("calculate returns the correct sum for comma-separated numbers", () => {
    const result1 = calculate("1,2,3");
    const result2 = calculate("9,5,3,20");
    const result3 = calculate("0,0,0,2");
    expect(result1).toBe(6); // Expected sum of 1 + 2 + 3
    expect(result2).toBe(37); // Expected sum of 9 + 5 + 3 + 20
    expect(result3).toBe(2); // Expected sum of 0 + 0 + 0 + 2
  });
  it("calculate returns the correct sum for a long comma-separated string", () => {
    const longInput = generateLongString(1000); // Generate a string with 10,000 values
    const expectedSum = (1000 * (1000 + 1)) / 2; // Sum of first 10,000 natural numbers (n* (n+1))/2
    const result = calculate(longInput);
    expect(result).toBe(expectedSum);
  });
  test("calcualte returns the correct sum for newline and comma-reprated numbers", () => {
    const result1 = calculate("1\n2,3");
    const result2 = calculate("1\n3,6\n6,2\n7");
    expect(result1).toBe(6);
    expect(result2).toBe(25);
  });
  it("calculate returns the correct sum with support for different delimiters", () => {
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
    const input = "testing";
    expect(() => calculate(input)).toThrow(
      "Please enter valid input as described in the Sample Input Strings"
    );
  });
  it("should ignore numbers greater than 1000", () => {
    const result = calculate("1,1001,2,2001");
    expect(result).toBe(3);
  });
});

describe("saveLogs function", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  it("should save a log entry to localStorage", () => {
    // Define test input and output
    const input = "1,2,3";
    const output = 6;

    // Call the function under test
    saveLogs(input, output);

    // Retrieve logs from localStorage and parse them
    const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");

    // Assert the storedLogs contains the correct log entry
    expect(storedLogs).toHaveLength(1); // Ensure there is exactly one log entry
    expect(storedLogs[0].input).toBe(input); // Check input value
    expect(storedLogs[0].output).toBe(output); // Check output value
  });
  it("calculate returns the correct sum with support for delimiters can be of any length", () => {
    const result1 = calculate("//[***]\n1***2***3");
    expect(result1).toBe(6);
    const result2 = calculate("//[$$$$]\n1$$$$2$$$$3$$$$6");
    expect(result2).toBe(12);
  });
});
