import React from "react";

import NeverWearInputContainer from "./NeverWearInputContainer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/NeverWearInputContainer",
  component: NeverWearInputContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   label: { control: "color" },
  //   onChange: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NeverWearInputContainer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  neverWearChangeHandler: () => {},
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "NeverWearInputContainer",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "NeverWearInputContainer",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "NeverWearInputContainer",
// };
