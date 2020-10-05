import React from "react";
import './cardlist.css';
import  Card  from '../card/card';

const CardList = props => (
   <div className="cardlist">
   {props.monsters.map(monster => (
     <Card key={monster.id} monster={monster}/>
   ))}
   </div>
);

export default CardList;
