import React from "react";

const reduser = (stat, action) => {
  switch (action.type) {
    case "EXIT":
      return !stat;
  }
};
export default reduser;
