import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 0.875rem;
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

interface InputProps {
  $error?: boolean;
}

export const Input = styled.input<InputProps>`
  border-radius: 8px;
  height: 2.5em;
  width: 14em;
  padding: 0.75em;
  border: 2px solid ${({ $error }) => ($error ? "red" : "transparent")};

  &:focus {
    border-color: ${({ theme }) => theme.colors.green300};
    outline: none;
  }

  @media (min-width: 1024px) {
    width: 18em;
    border: 4px solid ${({ $error }) => ($error ? "red" : "transparent")};
    border-radius: 16px;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  background-color: ${({ theme }) => theme.colors.black800};
  color: ${({ theme }) => theme.colors.white900};
  border: none;
  border-radius: 8px;
  font-weight: 800;
  width: fit-content;
  margin: 1.5em auto 0.5em auto;
  cursor: pointer;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 1em 3em;
    margin: 2em auto 1em auto;
    border-radius: 16px;
  }
`;
