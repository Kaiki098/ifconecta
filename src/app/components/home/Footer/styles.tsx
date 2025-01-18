import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black800};
  display: flex;
  justify-content: center;
  padding: 4em 2em;
  color: ${({ theme }) => theme.colors.green300};

  & > div {
    display: flex;
    flex-wrap: wrap;

    & div {
      max-width: 250px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin: 1em;

      p {
        font-weight: ${({ theme }) => theme.font.weights.bold};
        font-size: ${({ theme }) => theme.font.sizes.medium};
      }

      a:first-of-type {
        margin-top: 1em;
      }

      a {
        margin: 0.2em 0;
        color: ${({ theme }) => theme.colors.white900};
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.sizes.small};
      }
    }
  }
`;
