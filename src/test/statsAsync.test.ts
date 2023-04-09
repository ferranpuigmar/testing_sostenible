import * as statsAsync from '../core/statsAsync';

describe("Stats async should", () => {
  it("Calculates the sum of all elements of the array (async)", async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;
    expect(result).toBe(expected);
  })

  it("Calculates the average of all elements of the array (async)", async () => {
    const result = await statsAsync.average([1, 2, 3]);
    const expected = 2;
    expect(result).toBe(expected);
  })
});