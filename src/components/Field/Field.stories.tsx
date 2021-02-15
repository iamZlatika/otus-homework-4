import React from "react";
import Field from "./Field";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
  title: "Field",
  decorators: [withKnobs],
};

export const EmptyField: React.FC = () => (
  <Field
    field={object("Field", [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])}
    onClick={action("Cell clicked")}
  ></Field>
);

export const FilledField: React.FC = () => (
  <Field
    field={object("Field", [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ])}
    onClick={action("Cell clicked")}
  ></Field>
);

export const PartiallyFilledField: React.FC = () => (
  <Field
    field={object("Field", [
      [true, false, true],
      [false, true, false],
      [true, false, true],
    ])}
    onClick={action("Cell clicked")}
  ></Field>
);
