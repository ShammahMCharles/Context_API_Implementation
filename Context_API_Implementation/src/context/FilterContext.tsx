import { createContext, useState, type ReactNode } from "react";

interface FilterContextProps {
  children: ReactNode;
}

type Filter = "all" | "active" | "completed";

interface FilterContextType {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: FilterContextProps) {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
