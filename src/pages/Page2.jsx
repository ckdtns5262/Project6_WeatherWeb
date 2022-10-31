import React from "react";
import { useLocation } from "react-router-dom";
import qs from 'query-string';

function Page2() {

  const loc = useLocation().search;
  console.log(loc)   // 쿼리스트링값을 가져옴

  const q = qs.parse(loc)  //쿼리스티링 값을 오브젝트로 파싱
  console.log(q)

  // let loc2 = loc.replace('?','').split('&')
  // loc2 = loc2.map((m)=>m.split('=')[1])
  // console.log(loc2)

  return (
    <>
      <h1>Page2임</h1>
    {Object.keys(q).length === 0 ? <h2>'전달자료없음'</h2> : <h2>{q.item}({q.item2})</h2>}
    {/* 쿼리값이 0이면 전달자료없음 아니면 q.item과 q.item2 */}
    </>
  );
}

export default Page2;
