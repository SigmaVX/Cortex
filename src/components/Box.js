import React from "react";


const Box = (props) => {
  
  return (
  <div className={`card col-2 mx-2 my-2 order-${props.order}`} key={props.id} id={props.id}>
      <img alt="Memory Item" src={props.image} />
  </div>
  )
};

export default Box;
