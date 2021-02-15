import { mount, shallow } from "enzyme";
import React from "react";
import Cell from "../Cell/Cell";
import Field from "./Field";

describe("Field", () => {
  let handler;
  beforeEach(() => {
    handler = jest.fn();
  });

  it("Should render a field", () => {
    const field = shallow(<Field field={[[]]} onClick={handler} />);
    expect(field).not.toBeUndefined();
  });
  it("Should render 1X1 field", () => {
    const field = shallow(<Field field={[[false]]} onClick={handler} />);
    expect(field.find(Cell)).toHaveLength(1);
  });
  it("Should render 3X3 field", () => {
    const field = mount(
      <Field
        field={[
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ]}
        onClick={handler}
      />
    );
    expect(field.find(Cell)).toHaveLength(9);
    expect(field.find(".filled")).toHaveLength(1);
  });
  it("Should handle click", () => {
    const field = mount(
      <Field
        field={[
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ]}
        onClick={handler}
      />
    );
    field.find(".filled").simulate("click");
    expect(handler).toBeCalledWith(1, 1);
  });
});
