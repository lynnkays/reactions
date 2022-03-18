import React, { FC } from "react";
import styled, { css, keyframes } from "styled-components";
import { FadeProps } from "../Fade/Fade.types";
import { SlideProps } from "./Slide.types";

export const SlideInAnimation = keyframes`
    100% { transform: translateX(0%); }
`;

export const SlideOutAnimation = keyframes`
      0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
`;

export const SlideStyled = styled.div<SlideProps>`
  transform: translateX(-100%);
  animation-name: ${({ slideInOut }) =>
    slideInOut === "in"
      ? css`
          ${SlideInAnimation}
        `
      : css`
          ${SlideOutAnimation}
        `};
  animation-duration: ${({ duration }) =>
    duration === "short" ? "200ms" : duration === "medium" ? "500ms" : "1s"};
  animation-timing-function: ${({ timingFunction }) => timingFunction};
  animation-delay: ${({ delay }) => delay}ms;
  animation-iteration-count: ${({ iterationCount }) => iterationCount};
  animation-direction: ${({ direction }) => direction};
  animation-fill-mode: ${({ fillMode }) => fillMode};
`;

export const Slide: FC<SlideProps> = ({
  children,
  slideInOut = "in",
  duration = "medium",
  timingFunction = "linear",
  delay = 0,
  iterationCount = 1,
  direction = "normal",
  fillMode = "none",
  ...props
}) => {
  return (
    <SlideStyled
      slideInOut={slideInOut}
      duration={duration}
      timingFunction={timingFunction}
      delay={delay}
      iterationCount={iterationCount}
      direction={direction}
      fillMode={fillMode}
      {...props}
    >
      {children}
    </SlideStyled>
  );
};
