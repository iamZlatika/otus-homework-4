export const nextGeneration = (field: boolean[][]) => {
  const isAlive = (x: number, y: number): boolean => {
    if (x === -1) {
      x = field.length - 1;
    } else if (x === field.length) {
      x = 0;
    }
    if (y === -1) {
      y = field[x].length - 1;
    } else if (y === field[x].length) {
      y = 0;
    }
    return field[x][y];
  };
  const nextState = (i: number, j: number): boolean => {
    const neighbours = countNeighbours(i, j);
    const alive = isAlive(i, j);
    if (neighbours === 3 && !alive) {
      return true;
    }
    if ((neighbours === 3 || neighbours === 2) && alive) {
      return true;
    }
    return false;
  };

  const countNeighbours = (i: number, j: number): number => {
    let neighbours = 0;
    for (let x = i - 1; x <= i + 1; x++) {
      for (let y = j - 1; y <= j + 1; y++) {
        if (!(x === i && y === j) && isAlive(x, y)) {
          neighbours++;
        }
      }
    }
    return neighbours;
  };

  const newField: boolean[][] = field.map((row) => [...row]);
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      newField[i][j] = nextState(i, j);
    }
  }
  return newField;
};

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
