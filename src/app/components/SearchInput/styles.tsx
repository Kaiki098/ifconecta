"use client";

import styled from "styled-components";
import { ChevronDown, ChevronRight } from "lucide-react";
import { SearchOutlined } from "@mui/icons-material";
import { ResponsiveContent } from "@/app/styles/globals";

export const SearchSection = styled.div<SearchSectionProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.green700};
  border-radius: 24px;
`;

interface SearchSectionProps {
  $showFilter: boolean;
}

export const SearchBar = styled.div`
  padding: 0.25em;
  display: flex;
  align-items: center;
  gap: 0.25em;
  max-width: 600px;

  @media (min-width: 1024px) {
    gap: 0.5em;
    padding: 0.375em;
  }
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

  @media (min-width: 1024px) {
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
  padding: 0.25em 0.5em 0.25em 2.5em;
  font-size: 0.75rem;
  text-align: center;

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    padding: 0.375em 0.75em 0.375em 2.5em;
    font-size: 1.2rem;
    max-width: 500px;
  }
`;

interface FiltersPanelProps {
  $isVisible: boolean;
}

export const FiltersPanel = styled.div<FiltersPanelProps>`
  position: absolute;
  top: calc(100% - 1.5em);
  padding-top: 0.75em;
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0.6em)" : "translateY(0))"};
  background-color: ${({ theme }) => theme.colors.green700};
  padding: 1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: -moz-available;
  width: -webkit-fill-available;
  z-index: -1;
  border-radius: ${({ $isVisible }) => ($isVisible ? "0 0 24px 24px" : "24px")};

  transition:
    visibility 0.2s ease-in-out,
    transform 0.2s ease-in-out,
    border-radius 0.2s ease-in-out;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};

  @media (min-width: 1024px) {
    transform: ${({ $isVisible }) =>
      $isVisible ? "translateY(1.5em)" : "translateY(0))"};
    top: calc(100% - 3em);
    padding-top: 1.5em;
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

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const FilterOptions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
