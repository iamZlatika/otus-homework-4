import React from "react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

export default {
  title: "DefaultButton",
};

export const DefaultButton = () => <Button onClick={action("Clicked")}>{text("Button", "Click me")}</Button>;
