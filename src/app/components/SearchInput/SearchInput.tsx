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
} from "./styles";
import ThematicAreas from "../ThematicAreas/ThematicAreas";
import { Filters } from "@/app/types/filter";

interface SearchInputProps {
  onSearch: (query: string) => void;
  onFilter: (filters: Filters) => void;
}

export default function SearchInput({ onSearch, onFilter }: SearchInputProps) {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    thematicAreas: [],
    group: "",
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
        <FilterOptions></FilterOptions>
      </FiltersPanel>
    </SearchSection>
  );
}
