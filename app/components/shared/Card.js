import React from "react";
import Saying from "./../shared/saying";
import Form from "./Form"
import "./Card.scss";


function Card({ children, isForm = false, history }) {
  const infoCard = <main className="container">
                    <h2>Greeting</h2>
                    <p className="detail">
                      <Saying content={children} />
                    </p>
                  </main>;

  // const formCard = <main className="container">
  //                   <h2>Sign In</h2>
  //                   <div className="detail">
  //                     <Form history={ history }/>
  //                   </div>
  //                 </main>;
  // const card = !isForm ? infoCard : formCard;
  return infoCard;
}

export default Card;
