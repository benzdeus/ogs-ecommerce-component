import React from "react";
interface ButtonProps {
  text?: string;
  type?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={props?.onClick} className={ props?.type === "primary" ? "e-btn e-btn-primary" : "e-btn"}>{props?.text}</button>;
};

export default Button;
