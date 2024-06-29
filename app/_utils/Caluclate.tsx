export const calculate = (inputValue: string): number | undefined => {
  if (inputValue === "") return 0;
  const numbers = inputValue
    .split(",")
    .map((numStr) => parseInt(numStr.trim(), 10));
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum;
};
