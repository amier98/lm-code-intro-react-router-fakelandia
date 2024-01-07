import React, { ReactNode, createContext, useEffect, useState } from "react";
import useMisdeamnorContext from "./useContextMisdeamenour";
import { Misdemeanour } from "../../types/misdemeanours.types";

export interface FilterContextProps {
  filteredData: Misdemeanour[];
  selectedFilter: string;
  setFilteredData: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface child {
  children: ReactNode;
}
export const MisdeamnorFilterContext = createContext<
  FilterContextProps | undefined
>(undefined);

export const MisdeamnorFilterProvider: React.FC<child> = ({ children }) => {
  const allmisdeamnors = useMisdeamnorContext() as Misdemeanour[];
  const [filteredData, setFilteredData] =
    useState<Misdemeanour[]>(allmisdeamnors);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredData(allmisdeamnors);
    } else {
      const filter = allmisdeamnors.filter(
        (misdeamnor) => misdeamnor.misdemeanour === selectedFilter
      );
      setFilteredData(filter);
    }
  }, [selectedFilter, allmisdeamnors]);

  return (
    <MisdeamnorFilterContext.Provider
      value={{
        filteredData,
        setFilteredData,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </MisdeamnorFilterContext.Provider>
  );
};
