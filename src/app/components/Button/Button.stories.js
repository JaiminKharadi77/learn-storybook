import React from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  // decorators: [(story) => <div className="flex justify-center">{story()}</div>], // Can wrap entire compoennt like this 
  argTypes: {
    children: { control: "text" }, // Allows text editing in Storybook
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
};
