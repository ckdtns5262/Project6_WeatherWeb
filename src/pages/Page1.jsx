import { useParams } from "react-router-dom";
import React from "react";

function Page1() {
 
 const pm = useParams().item;
 
 
  return (
    <>
      <h1>Page1임</h1>
      <h2>{pm === 'h' ? <h2>'전달자료없음'</h2>: pm}</h2>
    </>
  );
}

export default Page1;
