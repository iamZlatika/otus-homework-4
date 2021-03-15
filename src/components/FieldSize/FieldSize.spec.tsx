import { mount } from "enzyme";
import FieldSize from "./FieldSize";
import React from "react";

describe("Field Size", () => {
  let handler;
  beforeEach(() => {
    handler = jest.fn();
  });
  it("Should render component", () => {
    const fieldSize = mount(<FieldSize label="Size" id="123" value={20} onUpdate={handler} />);
    expect(fieldSize.find("label").text()).toBe("Size:");
    expect(fieldSize.find("input").prop("value")).toBe(20);
    expect(fieldSize.find("input").prop("id")).toBe("123");
  });
  it("Should call onUpdate handler", () => {
    const fieldSize = mount(<FieldSize id="123" label="Size" onUpdate={handler} value={20} />);
    fieldSize.find("input").simulate("change", { target: { value: 40 } });
    expect(handler).toBeCalledWith(40);
  });
});
