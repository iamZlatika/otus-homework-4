import React from "react";
import Cell from "./Cell";
import { action } from "@storybook/addon-actions";

export default {
  title: "Cell",
};
export const EmptyCell: React.FC = () => <Cell onClick={action("Cell clicked")}></Cell>;
export const FilledCell: React.FC = () => <Cell filled onClick={action("Cell clicked")}></Cell>;
