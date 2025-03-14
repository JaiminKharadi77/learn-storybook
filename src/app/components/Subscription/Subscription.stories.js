import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default {
  title: "form/Subscription",
  component: Input, // Register component for controls
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    placeholder: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
    },
    children: {
      control: "text",
    },
  },
};

const Template = (args) => (
  <>
    <Input size={args.size} placeholder={args.placeholder} />
    <Button variant={args.variant}>{args.children}</Button>
  </>
);

export const PrimarySubscription = Template.bind({});
PrimarySubscription.args = {
  size: "medium",
  placeholder: "Enter email",
  variant: "primary",
  children: "Subscribe",
};
