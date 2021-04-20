import { mount, shallow } from "enzyme";
import React from "react";
import Cell from "components/Cell";
import Game from "./GameField";
import { createEmptyField, generateField } from "services/game-service";

describe("Game", () => {
  it("Should render game", () => {
    const game = shallow(<Game height={0} width={0} initialField={[[]]} />);
    expect(game).not.toBeUndefined();
  });

  it("Should render 3X3 field", async () => {
    const game = mount(<Game height={3} width={3} initialField={createEmptyField(3, 3)} />);
    await game.instance().componentDidMount();
    game.update();
    expect(game.find(Cell)).toHaveLength(9);
  });

  it("Should toggle cell on click", async () => {
    const game = mount(<Game height={3} width={3} initialField={createEmptyField(3, 3)} />);
    await game.instance().componentDidMount();
    game.update();
    const cell = game.find(Cell).first();
    expect(game.find({ filled: true }).find(Cell)).toHaveLength(0);
    cell.simulate("click");
    expect(game.find({ filled: true }).find(Cell)).toHaveLength(1);
    cell.simulate("click");
    expect(game.find({ filled: true }).find(Cell)).toHaveLength(0);
  });

  it("Should make new generation", () => {
    const game = mount(<Game height={3} width={3} initialField={generateField(3, 3, 100)} />);
    game.instance().nextGeneration();
    expect(game.state().field).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  it("Should update size", () => {
    const game = mount(<Game height={3} width={3} initialField={generateField(3, 3, 100)} />);
    game.setProps({ height: 2, width: 2, isActive: true, updateInterval: 2000 });
    expect(game.state().field).toEqual([
      [true, true],
      [true, true],
    ]);
  });
});
