import React from 'react'
import MovieData from '../db/MovieData.json';
import { ListGroup } from 'react-bootstrap';
function MovieList() {
    
const mv = MovieData.boxOfficeResult.dailyBoxOfficeList;
console.log(mv[0])


let myinfo = {};
const key1 = ['runm', 'rank', 'movieNm']
console.log(key1)




    return ( <div>
    <ListGroup>
      <ListGroup.Item variant="primary">{mv[0].rank}</ListGroup.Item>
      <ListGroup.Item variant="secondary">{}</ListGroup.Item>
      <ListGroup.Item variant="success">Success</ListGroup.Item>
      <ListGroup.Item variant="danger">Danger</ListGroup.Item>
      <ListGroup.Item variant="warning">Warning</ListGroup.Item>
      <ListGroup.Item variant="info">Info</ListGroup.Item>
      <ListGroup.Item variant="light">Light</ListGroup.Item>
      <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      <ListGroup.Item variant="dark"></ListGroup.Item>
   
    </ListGroup>
       
       


        
    </div> );
}

export default MovieList;