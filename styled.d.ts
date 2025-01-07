import { ThematicArea } from "@/app/types/thematicAreaAndGroups";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string;
      black800: string;
      green100: string;
      green300: string;
      green400: string;
      green500: string;
      green600: string;
      green700: string;
      white900: string;
      grey500: string;
      grey700: string;
      groups: {
        [K in Group]: { primary: string; secondary };
      };
      thematics: {
        [K in ThematicArea]: { primary: string; secondary: string };
      };
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
        xxlarge: string;
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
