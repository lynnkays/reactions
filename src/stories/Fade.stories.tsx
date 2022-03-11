import React from "react";
import { Fade } from "../components/Fade/Fade";

export default {
  title: "Animations/Fade",
  component: Fade,
  argTypes: {
    animName: {
      options: ["Fade"],
      type: "select",
    },
    iterationCount: {
      options: ["infinite", ...Array(50).keys()],
      defaultValue: 1,
      type: "select",
    },
    delay: {
      control: "number",
      options: 0,
    },
  },
};

const Template = ({ ...args }) => (
  <Fade {...args}>
    <div
      style={{
        backgroundColor: "#93B7BE",
        color: "#F1FFFA",
        width: "25vw",
        height: "20vh",
        padding: "1vh 1vw",
        textAlign: "center",
      }}
    >
      <h2>Animations</h2>
      <p>This is a animation library</p>
    </div>
  </Fade>
);

export const FadeIn = Template.bind({});
FadeIn.args = {
  timingFunction: "linear",
  duration: "medium",
  iterationCount: 1,
  direction: "normal",
};

export const FadeOut = Template.bind({});
FadeOut.args = {
  direction: "reverse",
  fillMode: "backwards",
};

export const Blink = Template.bind({});
Blink.args = {
  timingFunction: "ease-in-out",
  duration: "long",
  delay: 1,
  iterationCount: "infinite",
  direction: "normal",
};
