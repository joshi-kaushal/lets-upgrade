import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div id="button" className="center">
      <button
        className="button"
        style={{ backgroundColor: "antiquewhite" }}
        onClick={props.operation}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
