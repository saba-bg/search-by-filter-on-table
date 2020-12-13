import React from "react";
import DefaultBox from "../../common/DefaultBox";
import ico1 from "../../../img/Group 56.svg";
import "../../../scss/main.scss";

function LittleBox() {
  return (
    <div className="LittleBox__ContentBox">
      {LittleBoxInfo.map((index, i) => (
        <div className="LittleBox">
          <div className={`LittleBox__IcoBox LittleBox__IcoBox-${i}`}></div>
          <img src={index.img} alt={index.title} className="LittleBox__Ico" />
          <div className="LittleBox__TxtBox">
            <h4>{index.title} </h4>
            <p
              className={
                index.number.includes("%")
                  ? parseFloat(index.number.replace("%", "")) > 0
                    ? "LittleBox__Txt LittleBox__Txt-PlusAvrage"
                    : parseFloat(index.number.replace("%", "")) === 0
                    ? "LittleBox__Txt LittleBox__Txt-ZeroAvrage"
                    : "LittleBox__Txt LittleBox__Txt-NegativAvrage"
                  : "LittleBox__TxtNumber"
              }
            >
              {index.number}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LittleBox;

const LittleBoxInfo = [
  {
    img: ico1,
    title: "تعداد همه پیشنهادات",
    number: "5",
  },
  {
    img: ico1,
    title: "پیشنهادات در سود",
    number: "1",
  },
  {
    img: ico1,
    title: "پیشنهادات در ضرر",
    number: "1",
  },
  {
    img: ico1,
    title: "میانگین سود یا زیان پیشنهادات",
    number: "+11%",
  },
];
