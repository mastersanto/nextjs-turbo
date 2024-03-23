import { ReactNode } from "react";
import { Button as RACButton } from "react-aria-components";

interface ButtonProps {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children } = props;
  console.log("Button server side rendered");
  return <RACButton>{children}</RACButton>;
};
