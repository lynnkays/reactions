import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { AnimationProps } from "./Animation.types";
import { Test } from "./Test";

export const Animation: FC<AnimationProps> = ({
  animName = "Fade",
  duration = "medium",
  timingFunction = "none",
  delay = 0,
  iterationCount = 1,
  direction = "normal",
  fillMode = "none",
  ...props
}) => {
  const AnimationStyled = styled.div<AnimationProps>`
        animation-name: ${(props) => props.animName}
        animation-duration: ${(props) =>
          props.duration === "slow"
            ? "800ms"
            : props.duration === "medium"
            ? "500ms"
            : "200ms"}
        animation-timing-function: ${(props) => props.timingFunction}
        animation-delay: ${(props) => props.delay}ms
        animation-iteration-count: ${(props) => props.iterationCount}
        animation-direction: ${(props) => props.direction}
        animation-fill-mode: ${(props) => props.fillMode}
    `;
  return (
    <>
      <AnimationStyled
        animName={animName}
        duration={duration}
        timingFunction={timingFunction}
        delay={delay}
        iterationCount={iterationCount}
        direction={direction}
        fillMode={fillMode}
        {...props}
      ></AnimationStyled>
    </>
  );
};
