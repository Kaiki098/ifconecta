"use client";

import { House } from "lucide-react";
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
  cursor: pointer;

  & > span {
    display: none;
  }

  @media (min-width: 1024px) {
    & > span {
      display: block;
      font-size: 1.5rem;
      font-weight: 800;
    }

    padding: 0.5em 1em;
  }
`;

export const HouseIcon = styled(House)`
  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
    stroke-width: 3px;
  }
`;
