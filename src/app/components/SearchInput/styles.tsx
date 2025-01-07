"use client";

import styled from "styled-components";
import { ChevronDown, ChevronRight } from "lucide-react";
import { SearchOutlined } from "@mui/icons-material";
import { ResponsiveContent } from "@/app/styles/globals";
import { Group } from "@/app/types/thematicAreaAndGroups";

export const SearchSection = styled.div<SearchSectionProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 450px;
  clip-path: inset(0 0 -100vh 0 round 24px 24px 0 0);
`;

interface SearchSectionProps {
  $showFilter: boolean;
}

export const SearchBar = styled.div`
  padding: 0.375em;
  background-color: ${({ theme }) => theme.colors.green700};
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: 100%;
`;

export const ChevronRightIcon = styled(ChevronRight)`
  color: ${({ theme }) => theme.colors.white900};
`;

export const ChevronDownIcon = styled(ChevronDown)`
  color: ${({ theme }) => theme.colors.white900};
`;

export const FilterLabel = styled(ResponsiveContent).attrs({ as: "span" })`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white900};
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  left: 0.25em;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.grey700};
  width: 0.25em;
  height: 0.25em;

  @media (min-width: 810px) {
    width: 1.1em;
    height: 1.1em;
    left: 0.75em;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 1.6em;
  border-color: transparent;
  height: 100%;
  padding: 0.375em 0.75em 0.375em 2.5em;
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-align: center;

  &:focus {
    outline: none;
  }

  @media (min-width: 810px) {
    font-size: ${({ theme }) => theme.font.sizes.normal};
  }
`;

interface FiltersPanelProps {
  $isVisible: boolean;
}

export const FiltersPanel = styled.div<FiltersPanelProps>`
  position: inherit;
  top: calc(100% - 1.5em);
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(-100%)"};
  background-color: ${({ theme }) => theme.colors.green700};
  padding: 1em;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  width: -moz-available;
  width: -webkit-fill-available;
  z-index: -1;
  border-radius: 0 0 24px 24px;

  transition:
    visibility 0.4s,
    transform 0.4s;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};

  @media (min-width: 810px) {
    transform: ${({ $isVisible }) =>
      $isVisible ? "translateY(1.5em)" : "translateY(-100%)"};
    top: calc(100% - 3em);
  }
`;

export const FilterHeading = styled.h3`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  & {
    margin-top: 1rem;
  }

  @media (min-width: 810px) {
    font-size: 1rem;
  }
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface GroupLabelProps {
  $variant: Group;
}

export const GroupLabel = styled.label<GroupLabelProps>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  padding: 0.1em 0.6em;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transition: background-color 0.2s;
  background-color: ${({ theme, $variant }) =>
    theme.colors.groups[$variant].secondary};
  color: ${({ theme, $variant }) => theme.colors.groups[$variant].primary};
  font-weight: ${({ theme }) => theme.font.weights.semibold};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  &:hover {
    box-shadow: 0 0 2px 2px
      ${({ $variant, theme }) => `${theme.colors.groups[$variant].secondary}66`};
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
    color: ${({ theme, $variant }) => theme.colors.groups[$variant].primary};
    display: none;
  }

  @media (min-width: 480px) {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;
