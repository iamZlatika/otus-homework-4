import GameOfLife from "./game-of-life";

export const createEmptyField = (height: number, width: number): boolean[][] => {
  return Array.from({ length: height }, () => new Array(width).fill(false));
};

export const generateField = (height: number, width: number, dencity = 0): boolean[][] => {
  const cellsToFill = (height * width * dencity) / 100;
  const field = createEmptyField(height, width);
  let filledCells = 0,
    x = 0,
    y = 0;

  while (filledCells < cellsToFill) {
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    if (field[y][x]) continue;
    filledCells++;
    field[y][x] = true;
  }
  return field;
};

export const resizeField = (height: number, width: number, prevField: boolean[][]): boolean[][] => {
  const newField = createEmptyField(height, width);
  const h = Math.min(height, prevField.length);
  const w = Math.min(width, prevField[0].length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      newField[y][x] = prevField[y][x];
    }
  }
  return newField;
};

export const nextGeneration = (field: boolean[][]) => {
  return new GameOfLife(field).nextGeneration().field;
};
