export interface SlideProps {
  slideInOut?: "in" | "out";
  duration?: "short" | "medium" | "long";
  timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  delay?: number;
  iterationCount?: "infinite" | number;
  direction?: "normal" | "reverse" | "alternate" | "alertnate-reverse";
  fillMode?: "forwards" | "backwards" | "both" | "none";
  children: JSX.Element | JSX.Element[];
}
