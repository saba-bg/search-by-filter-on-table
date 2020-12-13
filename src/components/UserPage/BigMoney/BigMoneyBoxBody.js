import React, { useContext } from "react";
import { SearchContex } from "../../../Contex/SearchContex";
import TableFilter from "../../common/TableFilter";
import BigMoneyBoxBodycontent from "./BigMoneyBoxBodycontent";
import "../../../scss/main.scss";

function BigMoneyBoxBody(props) {
  const { value } = useContext(SearchContex);

  return (
    <>
      {value !== "" && BigMoneyBoxBodyInfo.includes(value) > -1
        ? BigMoneyBoxBodyInfo.filter((index) =>
            index.title.includes(value)
          ).map((filteredName, i, arr) => (
            <BigMoneyBoxBodycontent
              arr={arr.length - 1 === i}
              title={filteredName.title}
              properties={filteredName.properties}
              kind={filteredName.properties[0]}
            ></BigMoneyBoxBodycontent>
          ))
        : BigMoneyBoxBodyInfo.map((index, i, arr) => (
            <BigMoneyBoxBodycontent
              arr={arr.length - 1 === i}
              title={index.title}
              properties={index.properties}
              kind={index.properties[0]}
            ></BigMoneyBoxBodycontent>
          ))}
    </>
  );
}

export default BigMoneyBoxBody;

const BigMoneyBoxBodyInfo = [
  {
    title: "خودرو",
    properties: [
      {
        time: "10:53:33",
        warningPrice: "3250",
        warningPricePrecent: "5%",
        massive1: "256,000",
        price1: "42500",
        massive2: "256,000",
        price2: "42500",
        perBuy: "26.99",
        buyerPower: "6.21",
        perSell: "26.99",
        number: "3",
        avrage: "-3.60B",
        warningBuy: "3",
        avragebuyer: "3.60B",
        warningSell: "3",
        avrageSeller: "3.60B",
        bigMoney: "-10.48B",
        kind: "فروش",
      },
    ],
  },
  {
    title: "شپنا",
    properties: [
      {
        time: "10:53:33",
        warningPrice: "16750",
        warningPricePrecent: "-5%",
        massive1: "0",
        price1: "0",
        massive2: "15730",
        price2: "780,000",
        perBuy: "20.00",
        buyerPower: "2.99",
        perSell: "4.99",
        number: "5",
        avrage: "+8.06B",
        warningBuy: "5",
        avragebuyer: "8.06B",
        warningSell: "5",
        avrageSeller: "8.06B",
        bigMoney: "+499.99B",
        kind: "خرید",
      },
    ],
  },
  {
    title: "شپنا",
    properties: [
      {
        time: "10:53:33",
        warningPrice: "3250",
        warningPricePrecent: "5%",
        massive1: "2.256.000",
        price1: "42500",
        massive2: "0",
        price2: "0",
        perBuy: "36.99",
        buyerPower: "1.99",
        perSell: "36.99",
        number: "14",
        avrage: "+24.03B",
        warningBuy: "14",
        avragebuyer: "24.03B",
        warningSell: "14",
        avrageSeller: "24.03B",
        bigMoney: "+850.32B",
        kind: "خرید",
      },
    ],
  },
  {
    title: "شپنا",
    properties: [
      {
        time: "10:53:33",
        warningPrice: "3250",
        warningPricePrecent: "5%",
        massive1: "2.256.000",
        price1: "42500",
        massive2: "0",
        price2: "0",
        perBuy: "36.99",
        buyerPower: "1.99",
        perSell: "36.99",
        number: "14",
        avrage: "+24.03B",
        warningBuy: "14",
        avragebuyer: "24.03B",
        warningSell: "14",
        avrageSeller: "24.03B",
        bigMoney: "+499.99B",
        kind: "خرید",
      },
    ],
  },
  {
    title: "رمینا",
    properties: [
      {
        time: "10:53:33",
        warningPrice: "3250",
        warningPricePrecent: "5%",
        massive1: "5.256.000",
        price1: "13560",
        massive2: "0",
        price2: "0",
        perBuy: "19.99",
        buyerPower: "0.8",
        perSell: "19.99",
        number: "2",
        avrage: "-12.43B",
        warningBuy: "2",
        avragebuyer: "12.43B",
        warningSell: "2",
        avrageSeller: "12.43B",
        bigMoney: "-733.26B",
        kind: "فروش",
      },
    ],
  },
];
