import { switchStylesProps } from "darco-dark-mode";

const darkmodeVariables: switchStylesProps = [
    {
      theme: "Dark",
      variables: ["--background-color", "--color"],
      values: ["#000000", "#ffffff"],
    },
    {
      theme: "Light",
      variables: ["--background-color", "--color"],
      values: ["#ffffff", "#000000"],
    },
  ];

export default darkmodeVariables;