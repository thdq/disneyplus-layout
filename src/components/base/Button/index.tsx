import { ReactNode } from "react";

type ButtonProps = {
  flat?: boolean;
  children: ReactNode;
};

const BaseButton = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};

export { BaseButton };
