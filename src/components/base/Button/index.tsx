import { ReactNode } from "react";
import "./styles.scss";

type ButtonProps = {
  flat?: boolean;
  children: ReactNode;
};

const BaseButton = (props: ButtonProps) => {
  return (
    <button className={`base-button ${props.flat ? "base-button__flat" : ""}`}>
      {props.children}
    </button>
  );
};

export { BaseButton };
