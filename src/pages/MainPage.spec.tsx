import { mount, ReactWrapper } from "enzyme";
import MainPage from "./MainPage";
import React from "react";

describe("MainPage", () => {
  describe("reset", () => {
    let mainPage: ReactWrapper;
    let reset: ReactWrapper;
    beforeEach(() => {
      mainPage = mount(<MainPage onLogout={jest.fn()} login={"login"} />);
      reset = mainPage.find("#reset").first();
    });
    it("Should set field width to default value", () => {
      const width = mainPage.find("input#width").first();
      width.simulate("change", { target: { value: 40 } });
      expect(width.instance().value).toBe("40");
      reset.simulate("click");
      expect(width.instance().value).toBe("20");
    });
    it("Should set field height to default value", () => {
      const height = mainPage.find("input#height").first();
      height.simulate("change", { target: { value: 40 } });
      expect(height.instance().value).toBe("40");
      reset.simulate("click");
      expect(height.instance().value).toBe("20");
    });
    it("Should set field dencity to default value", () => {
      const dencity = mainPage.find("input#dencity").first();
      dencity.simulate("change", { target: { value: 40 } });
      expect(dencity.instance().value).toBe("40");
      reset.simulate("click");
      expect(dencity.instance().value).toBe("20");
    });
  });
});
