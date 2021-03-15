import React from "react";
import Login from "./Login";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Login",
  decorators: [withKnobs],
};

export const LoginForm: React.FC = () => <Login onStart={action("Send Action")}></Login>;
