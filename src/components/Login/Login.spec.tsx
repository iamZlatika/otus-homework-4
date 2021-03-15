import { mount } from "enzyme";
import Login from "./Login";
import React from "react";

describe("Login", () => {
  let handler;
  let login;
  beforeEach(() => {
    handler = jest.fn();
    login = mount(<Login onStart={handler} />);
  });
  it("Should render component", () => {
    expect(login).not.toBeUndefined();
  });
  it("Should call onStart handler", () => {
    login.find("input").simulate("change", { target: { value: "John" } });
    login.find("form").simulate("submit");
    expect(handler).toBeCalledWith("John");
  });
});
