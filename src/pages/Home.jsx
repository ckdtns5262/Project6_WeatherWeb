import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();
 
  const handleClick =(k)=> {
    // let url = null;
    // switch(k){
    //   case '사과' : 
    //   url = "/page2?item=사과&item2=빨간과일"
    //   break
    //   case '딸기' : 
    //   url = "/page2?item=딸기&item2=빨간과일"
    //   break
    //   default :
    //   url = "/page2?item=포도&item2=보라색과일"
    //   break 
    // }
    // navigate(url)
    // }




        const url = {
      "사과" : "/page2?item=사과&item2=빨간과일",
      "딸기" : "/page2?item=딸기&item2=빨간과일",
      "포도" : "/page2?item=포도&item2=보라색과일"
    }
    
    navigate(url[k]);
 } 


  
  return (
    <>
      <h1>Home임</h1>
      <h2>page1으로 이동</h2>
      <ul>
        <li><Link to="/page1/사과">사과</Link></li>
        <li><Link to="/page1/딸기">딸기</Link></li>
        <li><Link to="/page1/포도">포도</Link></li>
      </ul>

      <h2>page2으로 이동</h2>
      <ul>
        <li><Link to="/page2?item=사과&item2=빨간과일">사과</Link></li>
        <li><Link to="/page2?item=딸기&item2=빨간과일">딸기</Link></li>
        <li><Link to="/page2?item=포도&item2=보라색과일">포도</Link></li>
      </ul>

      <h2>page2으로 이동</h2>
      <button onClick={() => handleClick('사과')}>사과</button>
      <button onClick={() => handleClick('딸기')}>딸기</button>
      <button onClick={() => handleClick('포도')}>포도</button>

    </>
  );
}

export default Home;
