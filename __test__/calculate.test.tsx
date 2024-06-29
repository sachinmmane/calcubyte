import { calculate } from "../app/_utils/Caluclate";

describe("calculate function", () => {
  test("returns 0 when inputValue is empty", () => {
    const result = calculate("");
    expect(result).toBe(0);
  });
});
