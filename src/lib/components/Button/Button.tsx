import React from "react";
interface ButtonProps {
  text?: string;
  type?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={props?.type === "success" ? "btn-success" : "btn-danger"}>{props?.text}</button>;
};

export default Button;
