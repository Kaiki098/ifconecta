"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
`;

interface ResponsiveContentProps {
  $hideOnMobile?: boolean;
  $hideOnDesktop?: boolean;
}

export const ResponsiveContent = styled.div<ResponsiveContentProps>`
  display: ${({ $hideOnMobile }) => ($hideOnMobile ? "none" : "block")};

  @media (min-width: 1024px) {
    display: ${({ $hideOnDesktop }) => ($hideOnDesktop ? "none" : "block")};
  }
`;
