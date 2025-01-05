import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black800};
  color: var(--white-900);
  z-index: 10;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1em;
  list-style: none;

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white900};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    text-transform: uppercase;
    transition:
      background-color 0.2s ease,
      border-radius 0.2s ease,
      padding 0.2s ease;

    &.active {
      padding: 0.5em 1em;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      background-color: ${({ theme }) => theme.colors.grey700};
    }
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weights.extrabold};
  padding: 0.5em 1.5em;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.white900};
  background-color: ${({ theme }) => theme.colors.green700};
`;

export const Presentation = styled.section`
  background-color: transparent;
  width: 100vw;
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
`;

export const PresentationImage = styled(Image)`
  z-index: 0;
  width: 100%;
  height: auto;
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
  height: 80%;
`;

export const IconsRight = styled(Image)`
  height: 80%;
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
    margin-bottom: 3em;
    text-align: center;
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
`;

export const About = styled.section`
  background-color: ${({ theme }) => theme.colors.grey500};
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AboutContent = styled.div`
  max-width: 400px;

  & span {
    color: ${({ theme }) => theme.colors.green700};
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.weights.extrabold};

    &::before {
      content: "•";
      margin-right: 0.25em;
    }
  }

  & h1 {
    margin-bottom: 0.5em;
    color: ${({ theme }) => theme.colors.green700};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-weight: ${({ theme }) => theme.font.weights.extrabold};
  }

  & h2 {
    margin-bottom: 0.4em;
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.weights.bold};
  }

  & p:first-of-type {
    margin-bottom: 5em;
  }
`;

export const BigLogoImage = styled(Image)`
  border-radius: 32px;
`;

export const HowItWorks = styled.section`
  background-color: ${({ theme }) => theme.colors.green700};
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    margin-bottom: 2em;
    margin-left: 1em;
    color: ${({ theme }) => theme.colors.white900};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-weight: ${({ theme }) => theme.font.weights.extrabold};
  }
`;

export const WorkflowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & div {
    z-index: 2;
  }

  & p {
    max-width: 250px;
  }
`;

export const Line = styled.svg`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 80%;
  left: 50%;
  transform: translate(-50%);
  filter: drop-shadow(2px 2px 4px ${({ theme }) => theme.colors.black800});

  path {
    fill: none;
    stroke: ${({ theme }) => theme.colors.green300};
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 16;
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.black800};
  border-radius: 50%;
  width: fit-content;
  & svg {
    color: ${({ theme }) => theme.colors.green300};
    width: 140px;
    height: auto;
  }
`;
