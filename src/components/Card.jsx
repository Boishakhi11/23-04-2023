import React from "react";
import Avator from "./Avatar.jsx";
import Details from "./Details.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avator img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
