import styled from "styled-components";
import { AnimationProps } from "../Animation/Animation.types";

export const AnimationStyled = styled.div<AnimationProps>`
  animation-name: ${({ animName }) => animName};
  animation-duration: ${({ duration }) =>
    duration === "short" ? "200ms" : duration === "medium" ? "500ms" : "1s"};
  animation-timing-function: ${({ timingFunction }) => timingFunction};
  animation-delay: ${({ delay }) => delay}ms;
  animation-iteration-count: ${({ iterationCount }) => iterationCount};
  animation-direction: ${({ direction }) => direction};
  animation-fill-mode: ${({ fillMode }) => fillMode};
`;
