import React, { useState, useEffect } from 'react';
import WeatherDay from './WeatherDay';
import Button from 'react-bootstrap/Button';
import WeatherDay2 from './WeatherDay2';

function WeatherMain() {
  
 const [day, setDay] = useState(3);
 const [show, setShow] = useState(true)  // 3~7일 후 버튼 제어


useEffect(() =>{
  if (day >= 8) setShow(false) ; // day가 8일 이상이면 3~7일 버튼 제거하고 
  else setShow(true) ;           // day가 8일 미만이면 3~7일 버튼 나타냄
}, [day]);   

 const handleClick =(d)=>{
  setDay(d)

 }
  return ( 
    <>
    <div className='header'>
    <h2>중기예보</h2>
    </div>
    <form className='butform'>
     <div className='pad'>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(3);}} variant="outline-primary">3일후 날씨</Button>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(4);}} variant="outline-primary">4일후 날씨</Button>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(5);}} variant="outline-primary">5일후 날씨</Button>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(6);}} variant="outline-primary">6일후 날씨</Button>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(7);}} variant="outline-primary">7일후 날씨</Button>
      </div> 
      <div className='pad'>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(8); setShow(show)}} variant="outline-danger">8일후 날씨</Button>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(9); setShow(show)}} variant="outline-danger">9일후 날씨</Button>
      <Button onClick={(e)=>{e.preventDefault(); handleClick(10); setShow(show)}} variant="outline-danger">10일후 날씨</Button>
      </div>
    </form>
    {show ? <WeatherDay d={day}/> : <WeatherDay2 d={day}/>}   
    
    </>
   );
}

export default WeatherMain;