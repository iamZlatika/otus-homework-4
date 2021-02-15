import GameOfLife from "./game-of-life";

describe("Game of life", () => {
  const emptyField = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  describe("Next Generation", () => {
    it("Should create new field", () => {
      expect(new GameOfLife([[]])).not.toBeUndefined();
    });
    it("Should generate empty field from empty field", () => {
      expect(new GameOfLife(emptyField).nextGeneration().field).toEqual(emptyField);
    });
    it("Should erase single cell", () => {
      const singeCellField = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ];
      expect(new GameOfLife(singeCellField).nextGeneration().field).toEqual(emptyField);
    });
    it("Should make new generation", () => {
      const field = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];
      const expectedField = [
        [false, false, false],
        [true, true, true],
        [false, false, false],
      ];
      expect(new GameOfLife(field).nextGeneration().field).toEqual(expectedField);
    });
  });

  describe("Count Neighbours", () => {
    it("Should count neighbours", () => {
      const field = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];

      expect(new GameOfLife(field).countNeighbours(1, 1)).toBe(2);
    });
  });

  describe("Get Cell", () => {
    it("Should return state of existing cell", () => {
      const field = [[true]];
      expect(new GameOfLife(field).isAlive(0, 0)).toBe(true);
    });
    it("Should return state of non existing cell", () => {
      const field = [[true]];
      expect(new GameOfLife(field).isAlive(0, 1)).toBe(false);
    });
    it("Should return state of non existing row", () => {
      const field = [[true]];
      expect(new GameOfLife(field).isAlive(-1, 1)).toBe(false);
    });
  });
});
