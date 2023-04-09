import { average, sum } from "../core/stats";

describe("Stats should", () => {
  it("calculates the sum of all elements of the array", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;
    expect(result).toBe(expected);
  })

  it("calculates the average of all elements of the array", () => {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  })
});




