import React from "react";
import "./LeftArrow.scss";

function LeftArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`prev`} style={{ ...style }} onClick={onClick} />;
}

export default LeftArrow;
