type displayLoader = "hidden" | "show";

export type loaderStyleProps = {
  container?: {
    width?: string;
    height?: string;
    backgroundColor?: string;
  };
  progressBarContainer?: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    display?: displayLoader;
    borderRadius?: string;
  };
  progressbar?: {
    height?: string;
    backgroundColor?: string;
  };
    progressPointer?: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    shadowColor?: string;
  };
  finalScreen?: {
    backgroundColor?: string;
    time?: number;
    class?: string
  };
};
export type loaderProps = {
  type?: string;
  time?: number;
  porcentageShow?: boolean;
  style?: loaderStyleProps;
};
