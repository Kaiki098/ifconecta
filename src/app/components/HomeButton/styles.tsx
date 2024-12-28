import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey700};
  color: ${({ theme }) => theme.colors.white900};
  padding: 0.5em;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 800;
  gap: 0.625em;
  text-transform: uppercase;
  border: none;
`;
