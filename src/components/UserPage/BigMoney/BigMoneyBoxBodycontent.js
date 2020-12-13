import React from "react";
import ClosedOfferBoxContentRows from "../../common/ClosedOfferBoxContentRows";
import "../../../scss/main.scss";

function BigMoneyBoxBodycontent(props) {
  const { arr, title, properties } = props;
  return (
    <tr
      className={
        props.kind.kind.toLowerCase() === "فروش"
          ? "Table__Light-row"
          : "Table__Dark-row"
      }
    >
      <ClosedOfferBoxContentRows
        className={
          arr
            ? "BigMoneyBoxBodyRows__firstCloumn BigMoneyBoxBodyRows__LastColumn "
            : "BigMoneyBoxBodyRows__firstCloumn BigMoneyBoxBodyRows__Column"
        }
      >
        {title}
      </ClosedOfferBoxContentRows>
      {properties.map((content, j) => (
        <>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "BigMoneyBoxBodyRows__Cloumn-16 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column BigMoneyBoxBodyRows__Cloumn-16"
            }
          >
            <span>{content.time}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "BigMoneyBoxBodyRows__Cloumn-0 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column BigMoneyBoxBodyRows__Cloumn-0"
            }
          >
            <span
              className={
                parseFloat(content.warningPricePrecent.replace("%", "")) > 0
                  ? "greenNumber"
                  : parseFloat(content.warningPricePrecent.replace("%", "")) ===
                    0
                  ? "zeroPrecent"
                  : "redPrecent"
              }
            >
              {content.warningPricePrecent}
            </span>
            {content.warningPrice}
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "BigMoneyBoxBodyRows__Cloumn-1 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-1"
            }
          >
            <span>{content.massive1}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-2 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-2"
            }
          >
            <span>{content.price1}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-3 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-3"
            }
          >
            <span>{content.price2}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-4 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-4"
            }
          >
            <span>{content.massive2}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-5 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-5"
            }
          >
            <span
              className={
                parseFloat(content.perBuy) > 2.71
                  ? "greenNumber"
                  : parseFloat(content.perBuy) >= 1.71 &&
                    parseFloat(content.perBuy) <= 2.7
                  ? "blueNumber"
                  : parseFloat(content.perBuy) >= 1 &&
                    parseFloat(content.perBuy) <= 1.7
                  ? "zeroPrecent"
                  : parseFloat(content.perBuy) >= 0.81 &&
                    parseFloat(content.perBuy) <= 0.99
                  ? "orangeNumber"
                  : "rednumber"
              }
            >
              {content.perBuy}
            </span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-6 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-6"
            }
          >
            <span
              className={
                parseFloat(content.buyerPower) > 33
                  ? "greenNumber"
                  : parseFloat(content.buyerPower) >= 20 &&
                    parseFloat(content.buyerPower) <= 33
                  ? "blueNumber"
                  : parseFloat(content.buyerPower) >= 17 &&
                    parseFloat(content.buyerPower) <= 28
                  ? "zeroPrecent"
                  : parseFloat(content.buyerPower) >= 12 &&
                    parseFloat(content.buyerPower) <= 17
                  ? "orangeNumber"
                  : "rednumber"
              }
            >
              {content.buyerPower}
            </span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-7 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-7"
            }
          >
            <span
              className={
                parseFloat(content.perSell) > 33
                  ? "rednumber"
                  : parseFloat(content.perSell) >= 20 &&
                    parseFloat(content.perSell) <= 33
                  ? "orangeNumber"
                  : parseFloat(content.perSell) >= 22 &&
                    parseFloat(content.perSell) <= 28
                  ? "zeroPrecent"
                  : parseFloat(content.perSell) >= 12 &&
                    parseFloat(content.perSell) <= 22
                  ? "greenNumber"
                  : "orangeNumber"
              }
            >
              {content.perSell}
            </span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-8 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-8"
            }
          >
            <span>{content.number}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "  BigMoneyBoxBodyRows__Cloumn-9 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column   BigMoneyBoxBodyRows__Cloumn-9"
            }
          >
            <span
              className={
                parseFloat(content.avrage.replace("B", "")) > 0
                  ? "greenNumber"
                  : parseFloat(content.avrage.replace("B", "")) === 0
                  ? "zeroPrecent"
                  : "redPrecent"
              }
            >
              {content.avrage}
            </span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "  BigMoneyBoxBodyRows__Cloumn-10 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column   BigMoneyBoxBodyRows__Cloumn-10"
            }
          >
            <span>{content.warningBuy}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "  BigMoneyBoxBodyRows__Cloumn-11 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column   BigMoneyBoxBodyRows__Cloumn-11"
            }
          >
            <span
              className={
                parseFloat(content.avrageSeller.replace("B", "")) > 8.0
                  ? "greenNumber"
                  : "zeroPrecent"
              }
            >
              {content.avrageSeller}
            </span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? "  BigMoneyBoxBodyRows__Cloumn-12 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column   BigMoneyBoxBodyRows__Cloumn-12"
            }
          >
            <span>{content.warningSell}</span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-13 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-13"
            }
          >
            <span
              className={
                parseFloat(content.avragebuyer.replace("B", "")) > 8.0
                  ? "rednumber"
                  : "zeroPrecent"
              }
            >
              {" "}
              {content.avragebuyer} -
            </span>{" "}
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-14 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-14"
            }
          >
            <span
              className={
                parseFloat(content.bigMoney.replace("B", "")) > 700
                  ? "greenLightNumber"
                  : parseFloat(content.bigMoney.replace("B", "")) > 0 &&
                    parseFloat(content.bigMoney.replace("B", "")) <= 700
                  ? "greenNumber"
                  : parseFloat(content.bigMoney.replace("B", "")) === 0
                  ? "zeroPrecent"
                  : parseFloat(content.bigMoney.replace("B", "")) < 0 &&
                    parseFloat(content.bigMoney.replace("B", "")) > -700
                  ? "redPrecent"
                  : "redStrongnumber"
              }
            >
              {content.bigMoney}
            </span>
          </ClosedOfferBoxContentRows>
          <ClosedOfferBoxContentRows
            className={
              arr
                ? " BigMoneyBoxBodyRows__Cloumn-15 BigMoneyBoxBodyRows__LastColumn "
                : "BigMoneyBoxBodyRows__Column  BigMoneyBoxBodyRows__Cloumn-15"
            }
          >
            <span
              className={
                content.kind.toLowerCase() === "فروش"
                  ? "rednumber"
                  : "greenNumber"
              }
            >
              {content.kind}
            </span>
          </ClosedOfferBoxContentRows>
        </>
      ))}
    </tr>
  );
}

export default BigMoneyBoxBodycontent;
