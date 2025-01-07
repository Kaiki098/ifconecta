import { type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    red: "red",
    black800: "#222222",
    green100: "#95FFC5",
    green300: "#00FF79",
    green400: "#25D066",
    green500: "#5FC385",
    green600: "#2FA676",
    green700: "#11A64A",
    white900: "#ffffff",
    grey500: "#e1e1e1",
    grey700: "#828282",
    groups: {
      Empresa: { primary: "#B34400", secondary: "#FFAD7B" },
      Comunidade: { primary: "#8EAC00", secondary: "#F1FFAF" },
    },
    thematics: {
      // Saúde é green100 e green 600
      Saúde: { primary: "#2FA676", secondary: "#95FFC5" },
      Tecnologia: { primary: "#540b90", secondary: "#cdb3e2" },
      Educação: { primary: "#8c4a1b", secondary: "#e4d3c7" },
      "Meio Ambiente": { primary: "#1a2577", secondary: "#c1c4e1" },
      Outro: { primary: "#a12a2a", secondary: "#e1b1b1" },
    },
  },
  font: {
    family: {
      default: "Open sans",
    },
    sizes: {
      xsmall: "0.75rem",
      small: "0.875rem",
      normal: "1rem",
      medium: "1.25rem",
      large: "2rem",
      xlarge: "3rem",
      xxlarge: "4rem",
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
