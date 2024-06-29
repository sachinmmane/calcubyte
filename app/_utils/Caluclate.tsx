export const calculate = (inputValue: string): number | undefined => {
  if (inputValue === "") return 0;

  let delimiter = ","; // Default delimiter
  let numbersString = inputValue;

  // Check if the input starts with a custom delimiter definition
  if (inputValue.startsWith("//")) {
    // Extract delimiter from the input
    const delimiterMatch = inputValue.match(/^\/\/(.*)\n/);
    if (delimiterMatch && delimiterMatch[1]) {
      delimiter = delimiterMatch[1];
      // Remove the delimiter definition from the input string
      numbersString = inputValue.substring(delimiterMatch[0].length);
    }
  }

  // Normalize input: replace newlines with commas
  const normalizedInput = numbersString.replace(/\n/g, delimiter);

  // Split the normalized input string by commas, trim each segment, then parse into integers
  const numbers = normalizedInput
    .split(delimiter)
    .map((numStr) => parseInt(numStr.trim(), 10));

  // Calculate the sum of the parsed numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum;
};
