import React from "react";
import LittleBox from "../components/UserPage/LittelBox/LittleBox";
import BigMoneyBox from "../components/UserPage/BigMoney/BigMoneyBox";
import SearchBox from "../components/common/SearchBox";
import "../scss/main.scss";

function UserPage() {
  return (
    <div className="UserPage">
      <LittleBox />
      <SearchBox className="UserPage__SearchPart" key="1" />
      <div style={{ clear: "both" }}></div>
      <BigMoneyBox />
      <SearchBox className="UserPage__SearchPart" key="2" />
    </div>
  );
}

export default UserPage;
