import React from "react";
import "./card.css";
const Card = props => (
  <div className="card-container">
  <img alt="moster"
  src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
  <h2>{props.monster.name}</h2>
  <p>Email : {props.monster.email}</p>
  <p>Phone : {props.monster.phone}</p>
  </div>
);

export default Card;
