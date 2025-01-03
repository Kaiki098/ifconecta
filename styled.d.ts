import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string;
      black800: string;
      green100: string;
      green300: string;
      green500: string;
      green600: string;
      green700: string;
      white900: string;
      grey700: string;
    };
    font: {
      family: {
        default: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        normal: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      weights: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
