import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
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
    };
  }
}
