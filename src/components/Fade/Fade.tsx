import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { FadeProps } from "./Fade.types";

export const FadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}`;

export const FadeStyled = styled.div<FadeProps>`
  animation-name: ${FadeAnimation};
  animation-duration: ${({ duration }) =>
    duration === "short" ? "200ms" : duration === "medium" ? "500ms" : "1s"};
  animation-timing-function: ${({ timingFunction }) => timingFunction};
  animation-delay: ${({ delay }) => delay}ms;
  animation-iteration-count: ${({ iterationCount }) => iterationCount};
  animation-direction: ${({ direction }) => direction};
  animation-fill-mode: ${({ fillMode }) => fillMode};
`;

export const Fade: FC<FadeProps> = ({
  children,
  animName,
  duration = "medium",
  timingFunction = "linear",
  delay = 0,
  iterationCount = 1,
  direction = "normal",
  fillMode = "none",
  ...props
}) => {
  return (
    <FadeStyled
      duration={duration}
      timingFunction={timingFunction}
      delay={delay}
      iterationCount={iterationCount}
      direction={direction}
      fillMode={fillMode}
      {...props}
    >
      {children}
    </FadeStyled>
  );
};
