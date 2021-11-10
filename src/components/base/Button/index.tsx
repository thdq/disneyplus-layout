import { ReactNode } from "react";

import "./styles.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  flat?: boolean;
}

const BaseButton = (props: ButtonProps) => {
  return (
    <button className={`base-button ${props.flat ? "base-button__flat" : ""}`}>
      {props.children}
    </button>
  );
};

export { BaseButton };
