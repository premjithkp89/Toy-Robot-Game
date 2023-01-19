import { getKeyFromIndex } from "./uniqueId";

describe("Test Uniquie Id generator", () => {
  it("Should return an id using the row and column number", () => {
    const row = 2;
    const column = 4;
    const expectedId = "4-2";
    expect(getKeyFromIndex(row, column)).toEqual(expectedId);
  });
});
