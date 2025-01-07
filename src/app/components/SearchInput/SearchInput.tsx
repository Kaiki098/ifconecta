"use client";

import { ChangeEvent, useState } from "react";
import {
  InputWrapper,
  SearchIcon,
  Input,
  FilterButton,
  SearchBar,
  FilterLabel,
  FiltersPanel,
  FilterHeading,
  FilterOptions,
  SearchSection,
  ChevronDownIcon,
  ChevronRightIcon,
  GroupLabel,
} from "./styles";
import ThematicAreas from "../ThematicAreas/ThematicAreas";
import { Filters } from "@/app/types/filter";
import { X } from "lucide-react";

interface SearchInputProps {
  onSearch: (query: string) => void;
  onFilter: (filters: Filters) => void;
}

export default function SearchInput({ onSearch, onFilter }: SearchInputProps) {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    thematicAreas: [],
    groups: [],
  });

  function handleFilterClick() {
    setShowFilter((s) => !s);
  }
  const handleThematicAreaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedAreas = checked
      ? [...filters.thematicAreas, value]
      : filters.thematicAreas.filter((area) => area !== value);

    const newFilters = { ...filters, thematicAreas: updatedAreas };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleGroupChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedGroups = checked
      ? [...filters.groups, value]
      : filters.groups.filter((group) => group !== value);

    const newFilters = { ...filters, groups: updatedGroups };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <SearchSection $showFilter={showFilter}>
      <SearchBar>
        <InputWrapper>
          <SearchIcon />
          <Input
            type="search"
            placeholder="Pesquisar projetos"
            onChange={(e) => onSearch(e.target.value)}
          />
        </InputWrapper>
        <FilterButton onClick={handleFilterClick}>
          <FilterLabel $hideOnMobile>Filtros</FilterLabel>
          {showFilter ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </FilterButton>
      </SearchBar>
      <FiltersPanel $isVisible={showFilter}>
        <FilterHeading>Área Temática</FilterHeading>
        <FilterOptions>
          <ThematicAreas onChange={handleThematicAreaChange} />
        </FilterOptions>
        <FilterHeading>Perfil</FilterHeading>
        <FilterOptions>
          <GroupLabel $variant="Empresa">
            <input
              name="beneficiaryGroup"
              type="checkbox"
              value="Empresa"
              onChange={handleGroupChange}
            />
            Empresa
            <X />
          </GroupLabel>
          <GroupLabel $variant="Comunidade">
            <input
              name="beneficiaryGroup"
              type="checkbox"
              value="Comunidade"
              onChange={handleGroupChange}
            />
            Comunidade
            <X />
          </GroupLabel>
        </FilterOptions>
      </FiltersPanel>
    </SearchSection>
  );
}
