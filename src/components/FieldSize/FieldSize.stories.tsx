import React from "react";
import FieldSize from "./FieldSize";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "FieldSizeForm",
  decorators: [withKnobs],
};

export const FieldSizeForm: React.FC = () => (
  <FieldSize
    label={text("Label", "Height")}
    value={number("Value", 20)}
    id={text("id", "id")}
    onUpdate={action("Change size")}
  ></FieldSize>
);
