import React from "react";
interface ButtonProps {
  text?: string;
  type?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={props?.type === "primary" ? "e-btn-success" : ""}>{props?.text}</button>;
};

export default Button;
