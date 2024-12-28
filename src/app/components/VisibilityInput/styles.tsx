import { Eye, EyeClosed } from "lucide-react";
import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  border-radius: 8px;
  height: 2.5em;
  width: 14em;
  padding: 0.75em;
  border: 2px solid ${({ error }) => (error ? "red" : "transparent")};

  &:focus {
    border-color: ${({ theme }) => theme.colors.green300};
    outline: none;
  }
`;

const IconBase = css`
  position: absolute;
  right: 0.75em;
  color: var(--white);
  width: 16px;
`;

export const EyeIcon = styled(Eye)`
  ${IconBase}
`;

export const EyeClosedIcon = styled(EyeClosed)`
  ${IconBase}
`;
