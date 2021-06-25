import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#87A7B3",
  primaryBright: "#CDC7BE",
  primaryDark: "#766161",
  secondary: "#ACDBDF",
  success: "#96BB7C",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#87A7B3",
  textDisabled: "#E1F1DD",
  textSubtle: "#766161",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#CDC7BE",
  background: "#87A7B3",
  backgroundDisabled: "#766161",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#87A7B3",
  primaryDark: "#0098A1",
  tertiary: "#766161",
  text: "#EAE2FC",
  textDisabled: "#766161",
  textSubtle: "#c9c4d4",
  borderColor: "#96bb7c",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
