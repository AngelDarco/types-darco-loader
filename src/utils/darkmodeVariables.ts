import { switchStylesProps } from "darco-dark-mode";

const darkmodeVariables: switchStylesProps = [
  {
    theme: "Dark",
    variables: ["--background-color", "--color", "--bg-glass", "--color-glass"],
    values: ["#000000", "#ffffff", "#ffffff85", "#000"],
  },
  {
    theme: "Light",
    variables: ["--background-color", "--color", "--bg-glass", "--color-glass"],
    values: ["#ffffff", "#000000", "#00000085", "#fff"],
  },
];

export default darkmodeVariables;
