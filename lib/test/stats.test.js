"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stats_1 = require("../core/stats");
describe("Stats should", () => {
    it("calculates the sum of all elements of the array", () => {
        const result = (0, stats_1.sum)([1, 2, 3]);
        const expected = 6;
        expect(result).toBe(expected);
    });
    it("calculates the average of all elements of the array", () => {
        const result = (0, stats_1.average)([1, 2, 3]);
        const expected = 2;
        expect(result).toBe(expected);
    });
});
//# sourceMappingURL=stats.test.js.map