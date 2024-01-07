import { useContext } from "react";
import {
  MisdeamnorFilterContext,
  FilterContextProps,
} from "../hooks/filterMisdemeanourContext";

export const useMisdeamnorFilter = (): FilterContextProps => {
  const context = useContext(MisdeamnorFilterContext);
  if (!context) {
    throw new Error(
      "useMisdeamnorFilter must be used within a MisdeamnorFilterContext Provider"
    );
  }
  return context;
};
