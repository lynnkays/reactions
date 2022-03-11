import React from "react";
import { Fade } from "../components/Fade/Fade";

export default {
  title: "Fade",
  component: Fade,
  argTypes: {},
};

const Template = ({ ...args }) => (
  <Fade {...args}>
    <div style={{ backgroundColor: "pink" }}>Hi</div>
  </Fade>
);

export const fade = Template.bind({});
fade.args = {
  duration: "medium",
};
