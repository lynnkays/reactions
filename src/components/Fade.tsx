import { JSXElement } from "@babel/types";
import React from "react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styled, { keyframes, ThemedStyledProps } from "styled-components";

interface FadeProps {
  duration?: number;
  delay?: number;
  iterationCount?: number;
  direction?: string;
  trigger?: "onHover" | "inScreen";
  isInfinite?: true | false;
  children: JSXElement | JSXElement[];
}

const animateFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}`;

export const Fade = styled.div<Pick<FadeProps, "duration">>`
  animation: ${animateFade} ${(p) => p.duration}s linear infinite;
`;


export const FadeAnimation: FC<FadeProps> = ({
  duration = 1,
  delay = 0,
  iterationCount = 1,
  direction = 'ltr',
  trigger,
  isInfinite,
  children
}) => {
  return(
    <div>
      {children}
    </div>
  )
}