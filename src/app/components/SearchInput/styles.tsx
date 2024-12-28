"use client";

import styled from "styled-components";
import { ChevronRight as ChevronRightIcon } from "lucide-react";

export const InputContainer = styled.div`
  padding: 0.25em;
  background-color: ${({ theme }) => theme.colors.green700};
  border-radius: 1.6em;
  display: flex;
  align-items: center;
  gap: 1em;

  & input {
    border-radius: 1.6em;
    border-color: transparent;
    height: 100%;
    padding: 0.25em;
  }

  & input:focus {
    outline: none;
  }
`;

export const ChevronRight = styled(ChevronRightIcon)`
  color: ${({ theme }) => theme.colors.white900};
`;
