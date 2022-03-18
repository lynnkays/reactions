import React from "react";
import { Slide } from "../components/Slide/Slide";

export default {
  title: "Animations/Slide",
  component: Slide,
  argTypes: {
    animName: {
      options: ["Fade", "Slide"],
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
  <Slide slideInOut="in" {...args}>
    <div
      style={{
        backgroundColor: "#93B7BE",
        color: "#F1FFFA",
        width: "25vw",
        height: "20vh",
        padding: "1vh 1vw",
        textAlign: "center",
        position: "absolute",
      }}
    >
      <h2>Animations</h2>
      <p>This is a animation library</p>
    </div>
  </Slide>
);

export const SlideIn = Template.bind({});
SlideIn.args = {
  slideInOut: "in",
  iterationCount: 1,
  direction: "forwards",
};

export const SlideOut = Template.bind({});
SlideOut.args = {
  slideInOut: "out",
  iterationCount: 1,
  direction: "forwards",
};
