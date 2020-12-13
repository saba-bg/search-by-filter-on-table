import React from "react";
import ClosedOfferBoxContentRows from "./ClosedOfferBoxContentRows";

function TableFilter(props) {
  const filteredElements = props.elements
    .filter((e) => e.includes(props.value))
    .map((e) => (
      <ClosedOfferBoxContentRows className={props.className}>
        {e}
      </ClosedOfferBoxContentRows>
    ));
  return <div>{filteredElements}</div>;
}

export default TableFilter;
