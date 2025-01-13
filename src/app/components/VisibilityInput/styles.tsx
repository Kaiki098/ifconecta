import { Eye, EyeClosed } from "lucide-react";
import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & svg:first-child {
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

interface InputProps {
  $error?: boolean;
}

export const Input = styled.input<InputProps>`
  border-radius: 8px;
  font-family: ${({ theme }) => theme.font.family.default};
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
    width: 18em;
    border: 4px solid ${({ $error }) => ($error ? "red" : "transparent")};
    border-radius: 16px;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;

const IconBase = css`
  position: absolute;
  right: 0.75em;
  color: ${({ theme }) => theme.colors.grey700};
  width: 16px;

  @media (min-width: 1024px) {
    width: 24px;
    right: 1em;
  }
`;

export const EyeIcon = styled(Eye)`
  ${IconBase}
`;

export const EyeClosedIcon = styled(EyeClosed)`
  ${IconBase}
`;
