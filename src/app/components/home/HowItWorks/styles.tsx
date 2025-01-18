import styled from "styled-components";

export const HowItWorksContainer = styled.section`
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
