import React from 'react'


export default {
  title: "Test",
  component: Animation,
  argTypes: {
 
  },
};

const Template = ({ ...args }) => (
  <AnimationStyle {...args}>
    <div style={{ backgroundColor: "pink" }}>Hi</div>
  </AnimationStyle>
);

export const fade = Template.bind({});
fade.args = {
  duration: "2s",
};
