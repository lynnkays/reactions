import styled, { keyframes } from "styled-components";

interface FadeProps {
  duration?: Number;
  delay?: Number;
  iterationCount?: Number;
  direction?: String;
}

const animateFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}`;

export const Fade = styled.div<FadeProps>`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  animation: ${animateFade} 2s infinite;
`;
