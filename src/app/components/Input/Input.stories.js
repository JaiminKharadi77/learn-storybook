import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    placeholder: {
      control: "text",
    },
  },
};

export const Large = () => <Input size={"large"} placeholder="Large Size" />;

const Template = (args) => <Input {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  size: "medium",
};
