import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default GlobalStyle;
