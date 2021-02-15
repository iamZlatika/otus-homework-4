export default class GameOfLife {
  constructor(readonly field: boolean[][]) {}

  nextGeneration(): GameOfLife {
    const newField: boolean[][] = this.field.map((row) => [...row]);
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        newField[i][j] = this.nextState(i, j);
      }
    }
    return new GameOfLife(newField);
  }

  nextState(i: number, j: number): boolean {
    const neighbours = this.countNeighbours(i, j);
    const isAlive = this.isAlive(i, j);
    if (neighbours === 3 && !isAlive) {
      return true;
    }
    if ((neighbours === 3 || neighbours === 2) && isAlive) {
      return true;
    }
    return false;
  }

  countNeighbours(i: number, j: number): number {
    let neighbours = 0;
    for (let x = i - 1; x <= i + 1; x++) {
      for (let y = j - 1; y <= j + 1; y++) {
        if (!(x === i && y === j) && this.isAlive(x, y)) {
          neighbours++;
        }
      }
    }
    return neighbours;
  }

  isAlive(x: number, y: number): boolean {
    return this.field[x] && this.field[x][y] ? this.field[x][y] : false;
  }
}
