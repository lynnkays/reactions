import React, { FC } from "react";
import { keyframes } from "styled-components";
import { AnimationProps } from "./Animation.types";

export const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}`;

export const Test: FC<AnimationProps> = ({animName = 'Fade'}) => {
  return (
    <>
      <Animation animName={animName}></Animation>
    </>
  );
};
