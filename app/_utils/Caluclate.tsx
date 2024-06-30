export const calculate = (inputValue: string): number => {
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

  // Check for negative numbers
  const negativeNumbers = numbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    const negativeNumbersList = negativeNumbers.join(", ");
    throw new Error(`Negative numbers not allowed: ${negativeNumbersList}`);
  }

  // Calculate the sum of the parsed numbers
  const sum = numbers.reduce((acc, num) => {
    if (num <= 1000) {
      return acc + num;
    } else {
      return acc;
    }
  });

  // Handels Not a number error
  if (Number.isNaN(sum)) {
    throw new Error(
      `Please enter valid input as described in the Sample Input Strings`
    );
  }

  return sum;
};

export const saveLogs = (input: string, output: number) => {
  // Retrieve existing logs from local storage
  let logs: { input: string; output: number }[] = JSON.parse(
    localStorage.getItem("logs") || "[]"
  );

  // Create a new log entry
  const newItem = {
    input: input,
    output: output,
  };

  // Append the new log entry to the existing logs array
  logs.push(newItem);

  // Store the updated logs array back into local storage
  localStorage.setItem("logs", JSON.stringify(logs));
};
