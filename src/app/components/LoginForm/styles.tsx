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

  span {
    color: ${({ theme }) => `${theme.colors.red}AA`};
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & svg {
    position: absolute;
    left: 0.75em;
    color: ${({ theme }) => theme.colors.grey700};
    width: 16px;

    @media (min-width: 1024px) {
      width: 24px;
      left: 1em;
    }
  }
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
  font-family: ${({ theme }) => theme.font.family.default};
  border-radius: 8px;
  height: 2.5em;
  width: 14em;
  padding: 0.75em;
  padding-left: 2.5em;
  border: 2px solid ${({ $error }) => ($error ? "red" : "transparent")};

  &:focus {
    border-color: ${({ theme }) => theme.colors.green300};
    outline: none;
  }

  @media (min-width: 1024px) {
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

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.black800}DD`};
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 0.5em 1.5em;
    border-radius: 16px;
  }
`;
