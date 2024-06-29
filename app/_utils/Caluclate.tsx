export const calculate = (inputValue: string): number | undefined => {
  if (inputValue === "") return 0;
  // Normalize input: replace newlines with commas
  const normalizedInput = inputValue.replace(/\n/g, ",");

  // Split the normalized input string by commas, trim each segment, then parse into integers
  const numbers = normalizedInput
    .split(",")
    .map((numStr) => parseInt(numStr.trim(), 10));

  // Calculate the sum of the parsed numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum;
};
