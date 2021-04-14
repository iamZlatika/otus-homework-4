import { generateField, resizeField, nextGeneration } from "./game-service";

describe("Generate field", () => {
  const trueCounter = (result: number, value: boolean) => (value ? result + 1 : result);
  const countFilledCells = (field: boolean[][]) =>
    field.map((row) => row.reduce(trueCounter, 0)).reduce((a, b) => a + b);

  it("Should generate empty field", () => {
    const field = generateField(3, 3, 0);
    expect(countFilledCells(field)).toEqual(0);
  });
  it("Should generate filled field", () => {
    const field = generateField(4, 4, 100);
    expect(countFilledCells(field)).toEqual(16);
  });
  it("Should generate partially filled field", () => {
    const field = generateField(10, 10, 17);
    expect(countFilledCells(field)).toEqual(17);
  });
});

describe("Resize field", () => {
  it("Should resize field", () => {
    const field = [
      [true, false, false],
      [false, true, false],
      [false, true, false],
    ];
    const expectedField = [
      [true, false, false, false],
      [false, true, false, false],
    ];
    expect(resizeField(2, 4, field)).toEqual(expectedField);
  });
});

describe("Game of life", () => {
  const emptyField = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  describe("Next Generation", () => {
    it("Should generate empty field from empty field", () => {
      expect(nextGeneration(emptyField)).toEqual(emptyField);
    });
    it("Should erase single cell", () => {
      const singeCellField = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ];
      expect(nextGeneration(singeCellField)).toEqual(emptyField);
    });
    it("Should make new generation", () => {
      const field = [
        [false, false, false, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, false, false, false],
      ];
      const expectedField = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ];
      expect(nextGeneration(field)).toEqual(expectedField);
    });
  });
});
