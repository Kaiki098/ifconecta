import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const PresentationContainer = styled.section`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: calc(90px + 2em);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 159, 53, 0.5); // #009f35 with opacity
    z-index: 1;
  }

  figure {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    text-align: end;

    figcaption {
      position: absolute;
      margin: 1em;
      bottom: 0;
      right: 0;
      font-weight: ${({ theme }) => theme.font.weights.bold};
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      color: ${({ theme }) => theme.colors.green100};
      z-index: 3;

      a {
        color: ${({ theme }) => theme.colors.green500};
      }

      @media (max-width: 1024px) {
        margin-top: calc(90px + 1em);
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: calc(90px + 1em);
  }

  @media (max-width: 580px) {
    margin-top: calc(60px + 1em);
  }
`;

export const PresentationImage = styled(Image)`
  z-index: 0;
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

export const PresentationContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const IconsLeft = styled(Image)`
  width: auto;
  height: 80%;
  margin: 2em;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const IconsRight = styled(Image)`
  width: auto;
  height: 80%;
  margin: 2em;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.5em;
    font-weight: ${({ theme }) => theme.font.weights.extrabold};
    color: ${({ theme }) => theme.colors.white900};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  }

  & p {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.colors.white900};
    font-weight: ${({ theme }) => theme.font.weights.extrabold};
    font-size: ${({ theme }) => theme.font.sizes.large};
    margin-bottom: 2em;
    text-align: center;
  }

  @media (max-width: 900px) {
    & h1 {
      font-size: ${({ theme }) => theme.font.sizes.xlarge};
    }

    & p {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;

export const SubmissionLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  color: ${({ theme }) => theme.colors.white900};
  padding: 1em 1.5em;
  background-color: ${({ theme }) => theme.colors.green400};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transition:
    font-size 0.2s,
    background-color 0.2s;

  &:hover {
    font-size: calc(${({ theme }) => theme.font.sizes.medium} + 0.1rem);
    background-color: #0de974;
  }

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.font.sizes.normal};

    &:hover {
      font-size: calc(${({ theme }) => theme.font.sizes.normal} + 0.1rem);
    }
  }
`;
