import React from "react";
import DefaultBox from "../../common/DefaultBox";
import BigMoneyBoxBody from "./BigMoneyBoxBody";
import "../../../scss/main.scss";

function BigMoneyBox() {
  return (
    <DefaultBox className="BigMoneyBox">
      <thead>
        <tr>
          {BigMoneyBoxHeadInfo.map((i, index) => (
            <th className={`BigMoneyBox__Cloumn BigMoneyBox__Cloumn-${index}`}>
              {i.txt}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <BigMoneyBoxBody />
      </tbody>
    </DefaultBox>
  );
}

export default BigMoneyBox;

const BigMoneyBoxHeadInfo = [
  {
    txt: "نماد",
  },
  {
    txt: "زمان هشدار",
  },
  {
    txt: "قیمت هشدار",
  },
  {
    txt: "حجم",
  },
  {
    txt: "قیمت",
  },
  {
    txt: "قیمت",
  },
  {
    txt: "حجم",
  },
  {
    txt: "سرانه خرید",
  },
  {
    txt: "قدرت خریدار",
  },
  {
    txt: "سرانه فروش",
  },
  {
    txt: "تعداد",
  },
  {
    txt: "میانگین",
  },
  {
    txt: "هشدار خرید",
  },
  {
    txt: "میانگین خریداران",
  },
  {
    txt: "هشدار فروش",
  },
  {
    txt: "میانگین فروشندگان ",
  },
  {
    txt: "برآیند پول درشت ",
  },
  {
    txt: "نوع",
  },
];
