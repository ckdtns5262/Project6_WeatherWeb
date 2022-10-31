import React, {  } from 'react';
import wData from '../db/Weather.json';

function WeatherDay(props) {
  
  const d = props.d;
  const wd = wData.response.body.items.item[0]
  //console.log(wd)


  const keys = [`rnSt${d}Am`,`rnSt${d}Pm`,`wf${d}Am`,`wf${d}Pm`]
  //console.log(keys)
  
  const items =[];
  for(let k of keys) {
    items.push(wd[k])
    //console.log(items)
  }

  return ( <>
      <ul >
        <li className='lis1'>{d}일 후 <span className='red'>오전 강수량</span> : {items[0]} % </li>
        <li className='lis1'>{d}일 후 <span className='red'>오후 강수량</span> : {items[1]} %</li>
        <li className='lis1'>{d}일 후 <span className='red'>오전 날씨예보</span> : {items[2]}</li>
        <li className='lis1'>{d}일 후 <span className='red'>오후 날씨예보</span> : {items[3]}</li>
      </ul>
     
     
  </> );
}

export default WeatherDay;