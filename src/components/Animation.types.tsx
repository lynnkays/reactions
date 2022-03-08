export interface AnimationProps {
  animName: string;
  duration?: "slow" | "medium" | "long";
  timingFunction?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "none";
  delay?: number;
  iterationCount?: number;
  direction?: "normal" | "reverse" | "alternate" | "alertnate-reverse";
  fillMode?: "forwards" | "backwards" | "both" | "initial" | "inherit" | "none";
}
