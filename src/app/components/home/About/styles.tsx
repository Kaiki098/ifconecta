import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.grey500};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
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

    @media (max-height: 700px) {
      margin-bottom: 2em;
    }
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
  height: 100%;
  max-width: auto;

  //@media (max-width: 1240px) {
  // width: 400px;
  //height: auto;
  //}

  @media (max-width: 800px) {
    display: none;
  }
`;
