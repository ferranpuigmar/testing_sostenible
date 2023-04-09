"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const stats_1 = require("./stats");
const statsAsync = require("./statsAsync");
const testLibs_1 = require("./testLibs");
(0, testLibs_1.describe)("Stats should", () => {
    (0, testLibs_1.it)("calculates the sum of all elements of the array", () => {
        const result = (0, stats_1.sum)([1, 2, 3]);
        const expected = 6;
        (0, testLibs_1.expect)(result).toBe(expected);
    });
    (0, testLibs_1.it)("calculates the average of all elements of the array", () => {
        const result = (0, stats_1.average)([1, 2, 3]);
        const expected = 2;
        (0, testLibs_1.expect)(result).toBe(expected);
    });
});
(0, testLibs_1.describe)("Stats async should", () => {
    (0, testLibs_1.it)("Calculates the sum of all elements of the array (async)", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield statsAsync.sum([1, 2, 3]);
        const expected = 6;
        (0, testLibs_1.expect)(result).toBe(expected);
    }));
    (0, testLibs_1.it)("Calculates the average of all elements of the array (async)", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield statsAsync.average([1, 2, 3]);
        const expected = 2;
        (0, testLibs_1.expect)(result).toBe(expected);
    }));
});
//# sourceMappingURL=stats.test.js.map