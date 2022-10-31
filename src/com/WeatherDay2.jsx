import React from "react";
import wData from "../db/Weather.json";

export default function WeatherDay2(props) {

  const d = props.d; 
  const wd = wData.response.body.items.item[0];
  const keys2 = [`rnSt${d}`, `wf${d}`];

  const items2 = [];
  for (let k of keys2) {
    items2.push(wd[k]);
    //console.log(items2)
  }
  return (
    <>
      <ul>
        <li className="lis1">
          {d}일 후 <span className="red">예상 강수량</span> : {items2[0]} %  
        </li>
        <li className="lis1">
          {d}일 후 <span className="red">날씨예보</span> : {items2[1]}
        </li>
      </ul>
    </>
  );
}
