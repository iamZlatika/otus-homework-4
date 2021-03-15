import { mount } from "enzyme";
import FieldDencity from "./FieldDencity";
import React from "react";

describe("Field Dencity", () => {
  let handler;
  beforeEach(() => {
    handler = jest.fn();
  });
  it("Should render component", () => {
    const fieldDencity = mount(<FieldDencity id="123" label="Dencity" onUpdate={handler} value={20} />);
    expect(fieldDencity.find("label").text()).toBe("Dencity");
    expect(fieldDencity.find("input").prop("value")).toBe(20);
    expect(fieldDencity.find("input").prop("id")).toBe("123");
  });
  it("Should call onUpdate handler", () => {
    const fieldDencity = mount(<FieldDencity id="123" label="Dencity" onUpdate={handler} value={20} />);
    fieldDencity.find("input").simulate("change", { target: { value: 60 } });
    expect(handler).toBeCalledWith(60);
  });
});
