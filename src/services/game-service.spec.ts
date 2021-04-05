import { generateField, resizeField } from "./game-service";

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
