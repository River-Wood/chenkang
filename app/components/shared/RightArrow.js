import React from "react";
import "./RightArrow.scss";

function RightArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`next`} style={{ ...style }} onClick={onClick} />;
}

export default RightArrow;
