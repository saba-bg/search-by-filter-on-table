import React, { useContext } from "react";
import SatateHandleChange from "../hook/SatateHandleChange";
import { SearchContex } from "../../Contex/SearchContex";
import "../../scss/main.scss";

function SearchBox(props) {
  const [reset] = SatateHandleChange("");
  const {  handleChange } = useContext(SearchContex);
  return (
    <div className="SearchBox">
      <input
        className={`SearchBox__input ${props.className}`}
        type="text"
        placeholder="جست و جو"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "جست و جو")}
        onChange={handleChange}
      />
      <span
        className="fas fa-search form-control-feedback"
        onClick={reset}
      ></span>
    </div>
  );
}

export default SearchBox;
