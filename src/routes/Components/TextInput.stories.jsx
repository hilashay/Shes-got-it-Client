import React from "react";

import TextInput from "./TextInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TextInput",
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   label: { control: "color" },
  //   onChange: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  onChange: () => {},
  label: "TextInput",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "TextInput",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "TextInput",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "TextInput",
// };
