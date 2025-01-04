"use client";

import styled from "styled-components";

export const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.black800};
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1em;

  @media (min-width: 1024px) {
    right: 0;
    width: fit-content;
    padding: 4em;
  }
`;

export const Container = styled.main`
  position: absolute;
  margin: auto;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const Title1 = styled.h1`
  color: ${({ theme }) => theme.colors.green300};
  font-size: 2rem;
  font-weight: 800;
`;

export const Title2 = styled.h2`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1em;
`;

export const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.green700};
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1.75em;
  border-radius: 16px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    padding: 2.8em 2.5em;
  }
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 2rem;

    &::before {
      content: "•";
      margin-right: 0.25em;
      color: ${({ theme }) => theme.colors.white900};
    }
  }
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.white900};
  margin-bottom: 1em;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const LoginIntro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4em;
  border-left: 8px solid ${({ theme }) => theme.colors.green300};
  padding: 2em 2em 2em 4em;
  max-height: fit-content;
  max-width: 70ch;

  h1 {
    color: ${({ theme }) => theme.colors.green300};
    font-size: 3rem;
    font-weight: 800;

    &::before {
      content: "•";
      margin-right: 0.25em;
      color: ${({ theme }) => theme.colors.green300};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.white900};
    font-size: 1.25rem;
  }
`;
