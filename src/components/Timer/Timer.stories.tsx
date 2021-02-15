import React from "react";
import Timer from "./Timer";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Timer",
  decorators: [withKnobs],
};

export const SimpleTimer: React.FC = () => <Timer onClose={action("Stop")} />;
