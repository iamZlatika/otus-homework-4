import React from "react";
import FieldDensity from "./FieldDencity";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
  title: "FieldDencityRange",
  decorators: [withKnobs],
};

export const FieldDencityRange: React.FC = () => (
  <FieldDensity
    id={text("id", "id")}
    label={text("Label", "Dencity: ")}
    value={number("Value", 20)}
    onUpdate={action("Change Value")}
  ></FieldDensity>
);
