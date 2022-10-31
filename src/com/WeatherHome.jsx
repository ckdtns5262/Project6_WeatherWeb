import React from 'react';


function WeatherHome() {
  return ( 
    <>
   <h2>Home임</h2>
   <h3>Weather Web 제작</h3>
   <h4>1. 오픈API를 이용해 중기예보 , 단기예보 데이터를 가지고 왔으며 API명세서를 확인하여
         응답 메세지 항목명 파악  <br/>(인증키를 사용하여 공공데이터포털 이용방법 숙지함)<br/>
       2. 중기예보 페이지 : n일후 날씨를 각각 버튼을 만들어서 데이터를 구현하였음
       <br/>(3~7일 후 / 8~10일 후) 불러오는 value값이 다르기 때문에 useState, useEffect를 사용하여
         각각의 데이터를 불러오게끔 구현하였음<br/>
       3. 단기예보 페이지 : json데이터가 배열인지 object인지 확인하여 각각하나씩 구현x , map함수사용하여
          구현하였음<br/> (bootstrap을 사용하여도 map함수 사용가능하다는 사실 숙지함)<br/>
       4. react-router-dom 라이브러리를 이용하여 Nav컴포넌트로 Home, 중기예보, 단기예보 페이지를 이동할수 있게끔
          구현하였음 
   </h4>
      
      </>
   );
}

export default WeatherHome;