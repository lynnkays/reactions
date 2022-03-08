import React from "react";
import { Fade } from "../components/Fade";

export default {
  title: "Fade",
  component: Fade,
  argTypes: {
    numChildren: { type: "number", defaultValue: 1 },
  },
};

const Template = ({ ...args }) => (
  <Fade {...args}>
    <div style={{ backgroundColor: "pink" }}>Hi</div>
  </Fade>
);

export const fade = Template.bind({});
fade.args = {
  duration: "2s"
};
