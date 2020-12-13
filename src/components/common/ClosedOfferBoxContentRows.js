import React from "react";

function ClosedOfferBoxContentRows(props) {
  return (
    <th
      className={props.className}
      style={{ borderRight: "none", borderLeft: "none" }}
    >
      {props.children}
    </th>
  );
}

export default ClosedOfferBoxContentRows;
