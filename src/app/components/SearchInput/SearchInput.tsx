"use client";

import { useState } from "react";
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

export default function SearchInput() {
  const [showFilter, setShowFilter] = useState(false);

  function handleFilterClick() {
    setShowFilter((s) => !s);
  }

  return (
    <SearchSection $showFilter={showFilter}>
      <SearchBar>
        <InputWrapper>
          <SearchIcon />
          <Input type="search" placeholder="Pesquisar projetos" />
        </InputWrapper>
        <FilterButton onClick={handleFilterClick}>
          <FilterLabel $hideOnMobile>Filtros</FilterLabel>
          {showFilter ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </FilterButton>
      </SearchBar>
      <FiltersPanel $isVisible={showFilter}>
        <FilterHeading>Área Temática</FilterHeading>
        <FilterOptions></FilterOptions>
        <FilterHeading>Perfil</FilterHeading>
        <FilterOptions></FilterOptions>
      </FiltersPanel>
    </SearchSection>
  );
}
