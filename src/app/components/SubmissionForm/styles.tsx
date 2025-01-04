import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  margin: auto;
  padding: 0.1em;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
  }
`;

export const Legend = styled.legend`
  font-weight: ${({ theme }) => theme.font.weights.semibold};
  font-size: ${({ theme }) => theme.font.sizes.medium};

  padding-bottom: 0.5em;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0 1em;
  padding-top: 0;
  border: none;
  max-width: 450px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.black800};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1em;
  outline: none;

  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.green500};
  }
`;

export const ContactGroup = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.font.weights.medium};
`;

export const OnlyWhatsappLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.3em;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;

export const BeneficiaryGroup = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    display: flex;
    align-items: center;
    gap: 0.3em;
    font-weight: ${({ theme }) => theme.font.weights.semibold};
  }
`;

export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface CounterProps {
  $isOverLimit: boolean;
}

export const CharacterCounter = styled.span<CounterProps>`
  position: absolute;
  right: 1em;
  bottom: 1em;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme, $isOverLimit }) =>
    $isOverLimit ? theme.colors.red : theme.colors.grey700};
  transition: color 0.2s ease;
`;

export const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.black800};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1em;
  padding-bottom: 4em;
  outline: none;
  min-height: 150px;
  resize: vertical;
  width: 100%;

  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.green500};
  }
`;

export const ConfirmButton = styled.button`
  grid-column: -1/1;
  display: block;
  margin: 0 auto 3em auto;
  padding: 0.75em 1.5em;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.green700};
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.white900};
  font-weight: ${({ theme }) => theme.font.weights.extrabold};
  text-transform: uppercase;
  border: none;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    margin: 0 auto;
  }
`;
