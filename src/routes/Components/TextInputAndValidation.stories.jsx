import React from "react";

import TextInputAndValidation from "./TextInputAndValidation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TextInputAndValidation",
  component: TextInputAndValidation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   label: { control: "color" },
  //   onChange: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextInputAndValidation {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  labelText: "TextInputAndValidation",
  fieldName: "asd",
  shouldShowError: true,
  onChange: () => {},
};
