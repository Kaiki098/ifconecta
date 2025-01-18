"use client";

import styled from "styled-components";

export const SubmissionContainer = styled.main`
  display: flex;
`;

export const SubmissionHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black800};
  padding: 1em;
  margin-bottom: 1em;

  & h1 {
    color: ${({ theme }) => theme.colors.white900};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weights.bold};
    font-size: ${({ theme }) => theme.font.sizes.normal};
    margin: 0 1em;
  }

  & button {
    margin-left: auto;
    width: fit-content;
  }

  @media (min-width: 1024px) {
    display: block;
    background-color: transparent;
    position: absolute;
    right: 1em;
    top: 1em;

    & h1 {
      display: none;
    }

    & img {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  padding: 1.5em 2em;
  background-color: ${({ theme }) => theme.colors.grey700};
  width: 100%;

  & p {
    text-align: center;
    color: ${({ theme }) => theme.colors.white900};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 20vw;
  min-width: 285px;
  background-color: ${({ theme }) => theme.colors.black800};
  justify-content: space-between;

  & img {
    margin-top: 2em;
  }

  & p {
    color: ${({ theme }) => theme.colors.white900};
    width: 70%;
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;

export const Triangle = styled.div`
  height: 25%;
  width: 100%;
  background: ${({ theme }) => theme.colors.green300};
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
`;
