import { type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    red: "red",
    black800: "#222222",
    green100: "#95FFC5",
    green300: "#00FF79",
    green500: "#5FC385",
    green600: "#2FA676",
    green700: "#11A64A",
    white900: "#ffffff",
    grey700: "#828282",
  },
  font: {
    family: {
      default: "Open sans, sans-serif",
    },
    sizes: {
      xsmall: "0.75rem",
      small: "0.875rem",
      normal: "1rem",
      medium: "1.25rem",
      large: "2rem",
      xlarge: "3rem",
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "16px",
  },
};
