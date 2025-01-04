import styled from "styled-components";
import { ThematicArea } from "@/app/types/thematicArea";

export const Container = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;

  & label {
    display: flex;
    gap: 0.2em;
  }
`;

interface ThematicLabelProps {
  $variant: ThematicArea;
}

export const ThematicalLabel = styled.label<ThematicLabelProps>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  padding: 0.1em 0.6em;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transition: background-color 0.2s;
  background-color: ${({ $variant, theme }) =>
    theme.colors.thematics[$variant].secondary};
  color: ${({ $variant, theme }) => theme.colors.thematics[$variant].primary};
  font-weight: ${({ theme }) => theme.font.weights.semibold};
  font-size: ${({ theme }) => theme.font.sizes.small};

  &:hover {
    box-shadow: 0 0 2px 2px
      ${({ $variant, theme }) => `${theme.colors.thematics[$variant]}66`};
  }

  input[type="checkbox"] {
    display: none;

    &:checked + svg {
      display: block;
    }
  }

  & svg {
    width: 1em;
    height: 1em;
    color: ${({ $variant, theme }) => theme.colors.thematics[$variant].primary};
    display: none;
  }
`;
