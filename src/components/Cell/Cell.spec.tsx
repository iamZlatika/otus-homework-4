import { shallow } from "enzyme";
import React from "react";
import Cell from "./Cell";

describe("Cell", () => {
  let handler;
  beforeEach(() => {
    handler = jest.fn();
  });
  it("Should render filled cell", () => {
    const cell = shallow(<Cell filled onClick={handler} />);
    expect(cell.hasClass("filled")).toBe(true);
    expect(cell.hasClass("cell")).toBe(true);
  });
  it("Should render empty cell", () => {
    const cell = shallow(<Cell onClick={handler} />);
    expect(cell.hasClass("filled")).toBe(false);
    expect(cell.hasClass("cell")).toBe(true);
  });
  it("Should call handler", () => {
    const cell = shallow(<Cell onClick={handler} />);
    cell.simulate("click");
    expect(handler).toBeCalled();
  });
});
