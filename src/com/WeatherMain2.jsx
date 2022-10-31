import React from "react";
import Wdata2 from "../db/Weather2.json";
import wItem from "../db/item.json";
import { ListGroup } from "react-bootstrap";
function WeatherMain2() {
  const wd2 = Wdata2.response.body.items.item;
  console.log(wd2);
  
  
  const category = wItem;
  //console.log(category);

  const keys = ["PTY", "REH", "RN1", "T1H", "UUU", "VEC", "VVV", "WSD"];
 
  const cCategory = [];
  for (let k of keys) {
    cCategory.push(category[k]);
  }

  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };

//   const sky = { 1: "맑음", 3: "구름많음", 4: "흐림" };
//   const lis = Object.entries(wd2).map((m)=>
//   (m[1].category === "PTY") ?
//     (  <li key={m[1].category}>
//     {wItem[m[1].category][0]}
//      <span></span>
//     {pty[m[1].obsrValue]}
//     </li>)
//     : ( <li key={m[1].category}>
//     {wItem[m[1].category][0]}
//     {m[1].obsrValue} 
//     {wItem[m[1].category][1]}
//     </li>)
   
//     );
// 새로운 배열 생성 : for
//   let lis =[];
//   for(let m of wd2){
//     lis.push((m))
//   }
// 새로운 배열 생성 : map
//   const lis = wd2.map((m)=>
//   (m.category === "PTY") 
//   ? (<li key={m.category}>{wItem[m.category][0]} : {pty[m.obsrValue]} </li>)

//   : (m.category === "SKY")  
//   ? (<li key={m.category}>{wItem[m.category][0]} : {pty[m.obsrValue]} </li>)
//   : <li key={m.category}>{wItem[m.category][0]} : {m.obsrValue}{wItem[m.category][1]} </li>

//   )
  
  const lis2 = wd2.map((m)=>
  (m.category === "PTY") 
  ? (<ListGroup.Item variant={wItem[m.category][2]} key={m.category}>{wItem[m.category][0]} : {pty[m.obsrValue]} </ListGroup.Item>)

  : (m.category === "SKY")  
  ? (<ListGroup.Item variant={wItem[m.category][2]} key={m.category}>{wItem[m.category][0]} : {pty[m.obsrValue]}</ListGroup.Item>)
  : <ListGroup.Item variant={wItem[m.category][2]} key={m.category}>{wItem[m.category][0]} : {m.obsrValue}{wItem[m.category][1]}</ListGroup.Item>
  )

 




  
 console.log(lis2)

  return (
    <div>
      <h2>단기예보</h2>
      <ListGroup> 
      {lis2}
      </ListGroup>
    </div>
  );
}

export default WeatherMain2;
