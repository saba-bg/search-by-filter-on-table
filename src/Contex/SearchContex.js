import React, { createContext } from "react";
import SatateHandleChange from "../components/hook/SatateHandleChange";

export const SearchContex = createContext();

export function SearchContexProvider(props) {
  const [value, handleChange] = SatateHandleChange("");

  return (
    <SearchContex.Provider value={{ value, handleChange }}>
      {props.children}
    </SearchContex.Provider>
  );
}
