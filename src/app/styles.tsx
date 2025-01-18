import styled from "styled-components";

export const Main = styled.main`
  & > section {
    @media (max-height: 700px) {
      max-height: 80vh;
    }
  }
`;
