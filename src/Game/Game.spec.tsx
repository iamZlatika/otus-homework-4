import { mount, shallow } from "enzyme";
import React from "react";
import Cell from "../components/Cell";
import Game from "./Game";
import * as gameService from "./game-service";

describe("Game", () => {
  beforeEach(() => {
    jest
      .spyOn(gameService, "fetchField")
      .mockImplementation(async (height, width) => gameService.emptyField(height, width));
  });

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
    expect(game.find(".filled")).toHaveLength(0);
    cell.simulate("click");
    expect(game.find(".filled")).toHaveLength(1);
    cell.simulate("click");
    expect(game.find(".filled")).toHaveLength(0);
  });

  describe("ShouldComponentUpdate", () => {
    it("Should update when field has changed", async () => {
      const nextField = [[true]];
      const game = shallow(<Game height={1} width={1} />);
      await game.instance().componentDidMount();
      const shouldUpdate = game
        .instance()
        .shouldComponentUpdate({ height: 1, width: 1 }, { field: nextField }, undefined);
      expect(shouldUpdate).toBe(true);
    });

    it("Should not update when field has not changed", async () => {
      const game = shallow(<Game height={1} width={1} />);
      await game.instance().componentDidMount();
      const shouldUpdate = game
        .instance()
        .shouldComponentUpdate({ height: 1, width: 1 }, { field: [[true]] }, undefined);
      expect(shouldUpdate).toBe(true);
    });
  });
});
