import React from "react";
import "../../scss/main.scss";

function DefaultBox(props) {
  return (
    <table className={`DefaultBox ${props.className}`} >{props.children}</table>
  );
}

export default DefaultBox;
