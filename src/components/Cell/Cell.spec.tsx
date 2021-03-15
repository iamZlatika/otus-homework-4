import { mount, shallow } from "enzyme";
import { matchers } from "@emotion/jest";
import React from "react";
import Cell from "./Cell";

expect.extend(matchers);
describe("Cell", () => {
  let handler;
  beforeEach(() => {
    handler = jest.fn();
  });
  it("Should render filled cell", () => {
    const cell = mount(<Cell filled onClick={handler} />);
    expect(cell).toHaveStyleRule("background", "#1687a7");
  });
  it("Should render empty cell", () => {
    const cell = mount(<Cell onClick={handler} />);
    expect(cell).toHaveStyleRule("background", "#fff");
  });
  it("Should call handler", () => {
    const cell = shallow(<Cell onClick={handler} />);
    cell.simulate("click");
    expect(handler).toBeCalled();
  });
});
