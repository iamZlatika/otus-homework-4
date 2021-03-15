import { mount, shallow } from "enzyme";
import React from "react";
import Cell from "../components/Cell";
import Game from "./Game";

describe("Game", () => {
  it("Should render game", () => {
    const game = shallow(<Game height={0} width={0} />);
    expect(game).not.toBeUndefined();
  });

  it("Should render 3X3 field", async () => {
    const game = mount(<Game height={3} width={3} />);
    await game.instance().componentDidMount();
    game.update();
    expect(game.find(Cell)).toHaveLength(9);
  });

  it("Should toggle cell on click", async () => {
    const game = mount(<Game height={3} width={3} />);
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
    const game = mount(<Game height={3} width={3} dencity={100} />);
    game.instance().nextGeneration();
    expect(game.state().field).toEqual([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]);
  });

  it("Should update size", () => {
    const game = mount(<Game height={3} width={3} />);
    game.setProps({ height: 2, width: 2, dencity: 100, isActive: true, updateInterval: 2000 });
    expect(game.state().field).toEqual([
      [true, true],
      [true, true],
    ]);
  });
});
