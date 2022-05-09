import React from "react";
interface ButtonProps {
  text?: string;
  type?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
<<<<<<< HEAD
  return <button className={props?.type === "primary" ? "e-btn-success" : ""}>{props?.text}</button>;
=======
  return <button onClick={props?.onClick} className={ props?.type === "primary" ? "e-btn e-btn-primary" : "e-btn"}>{props?.text}</button>;
>>>>>>> 489ba598c05406ae3bc32aa0634e8f23ab9a91f7
};

export default Button;
