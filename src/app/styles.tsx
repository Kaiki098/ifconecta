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
  color: ${({ theme }) => theme.colors.white900};
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 0.5em 1em;
  }

  @media (max-width: 580px) {
    & img {
      height: 60px;
      width: auto;
    }
  }
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

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.font.sizes.normal};
    }
  }

  @media (max-width: 810px) {
    display: none;
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
  transition:
    font-size 0.2s,
    background-color 0.2s;

  &:hover {
    font-size: calc(${({ theme }) => theme.font.sizes.normal} + 0.1rem);
    background-color: #0de974;
  }

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.small};

    &:hover {
      font-size: calc(${({ theme }) => theme.font.sizes.small} + 0.1rem);
      background-color: #0de974;
    }
  }

  @media (max-width: 440px) {
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    text-align: center;

    &:hover {
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      background-color: #0de974;
    }
  }
`;

export const Presentation = styled.section`
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
  height: 800px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 600px;
  }
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
  width: 40%;
  margin: 2em;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const IconsRight = styled(Image)`
  width: 40%;
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
    margin-bottom: 3em;
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

export const About = styled.section`
  background-color: ${({ theme }) => theme.colors.grey500};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
  padding: 8em 4em;
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

  @media (max-width: 1240px) {
    & span {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    & h1 {
      font-size: ${({ theme }) => theme.font.sizes.xlarge};
    }

    & h2 {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;

export const BigLogoImage = styled(Image)`
  border-radius: 32px;

  @media (max-width: 1240px) {
    width: 400px;
    height: auto;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const HowItWorks = styled.section`
  background-color: ${({ theme }) => theme.colors.green700};
  padding: 12em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  & h1 {
    position: absolute;
    top: 0.75em;
    left: 0.75em;
    color: ${({ theme }) => theme.colors.white900};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    font-weight: ${({ theme }) => theme.font.weights.extrabold};

    @media (max-width: 1240px) {
      font-size: ${({ theme }) => theme.font.sizes.xlarge};
      top: 1.25em;
      left: 1.25em;
    }

    @media (max-width: 900px) {
      position: initial;
      margin: 0 0 0.25em 1.5em;
    }

    @media (max-width: 900px) {
      font-size: ${({ theme }) => theme.font.sizes.large};
    }
  }

  @media (max-width: 900px) {
    padding: 3em 0;
  }
`;

export const WorkflowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > div {
    z-index: 2;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & h2 {
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.weights.extrabold};
    color: ${({ theme }) => theme.colors.white900};
    text-decoration: underline;
    margin-bottom: 0.5em;
  }

  & p {
    font-weight: ${({ theme }) => theme.font.weights.semibold};
    color: ${({ theme }) => theme.colors.white900};
  }

  @media (max-width: 1240px) {
    & > div {
      max-width: 200px;
    }

    & h2 {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    & p {
      font-weight: ${({ theme }) => theme.font.weights.semibold};
      color: ${({ theme }) => theme.colors.white900};
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;

    & > div {
      max-width: 100%;
      flex-direction: row;
      margin-right: 2em;
    }
  }
`;

export const WorkflowText = styled.div`
  margin: 1em;
  @media (max-width: 900px) {
    flex-direction: column;
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
    vector-effect: non-scaling-stroke;
  }

  @media (max-width: 900px) {
    width: 800px;
    left: 8em;
    transform: translate(-50%) rotate(90deg);
  }

  @media (max-width: 580px) {
    left: 6em;
    width: 600px;
  }
`;

export const IconWrapper = styled.div`
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.black800};
  border-radius: 50%;
  width: fit-content;
  margin: 2em;

  & svg {
    color: ${({ theme }) => theme.colors.green300};
    width: 140px;
    height: auto;

    @media (max-width: 1240px) {
      width: 100px;
    }

    @media (max-width: 580px) {
      width: 60px;
    }
  }

  @media (max-width: 900px) {
    order: -1;
    align-self: flex-start;
  }

  @media (max-width: 390px) {
    margin: 1em;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black800};
  display: flex;
  justify-content: center;
  padding: 8em 2em;
  color: ${({theme}) => theme.colors.green300};

  @media (max-width: 820px) {
    padding: 5em 2em;
  }

  & > div {
    display: flex;
    gap: 5em;
    flex-wrap: wrap;

    @media(min-width: 526px) {
      justify-content: f;
    }
    & div {
      max-width: 250px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin 1em;
      
      p{
        font-weight: ${({theme}) => theme.font.weights.bold};};
        font-size: ${({theme}) => theme.font.sizes.medium};
      }

      a:first-of-type { 
        margin-top: 1em;
      }
      a {
        margin: 0.2em 0;
        color: ${({theme}) => theme.colors.white900};
        text-decoration: none;
        font-size: ${({theme}) => theme.font.sizes.small};
      }
    } 
    
  }
`;