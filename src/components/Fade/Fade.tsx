import React, { FC } from "react";
import { keyframes } from "styled-components";
import { AnimationProps } from "../Animation/Animation.types";
import { AnimationStyled } from "../Animation/Animation.styles";

export const FadeStyled = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}`;

export const Fade: FC<AnimationProps> = ({
  children,
  animName = "Fade",
  duration = "medium",
  timingFunction = "linear",
  delay = 0,
  iterationCount = 1,
  direction = "normal",
  fillMode = "none",
  ...props
}) => {
  return (
    <AnimationStyled
      animName={FadeStyled}
      duration={duration}
      timingFunction={timingFunction}
      delay={delay}
      iterationCount={iterationCount}
      direction={direction}
      fillMode={fillMode}
      {...props}
    >
      {children}
    </AnimationStyled>
  );
};
