import React, { forwardRef } from "react";
import clsx from "clsx";

interface IButtonProps {
  variant?: "bordered" | "solid" | "custom";
  animation?: "click" | "none";
  IconConmponents?: () => React.JSX.Element;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButtonProps;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "custom",
    animation = "none",
    IconConmponents,
    className,
    children,
    ...rest
  } = props;

  const animationButton = {
    none: "",
    click:
      "active:translate-y-[2px] active:scale-45 active:shadow-[#444] active:shadow-md",
  };

  const variantOption = {
    bordered: clsx(
      `flex flex-row gap-2 py-2.5 px-4 items-center  border  border-2 rounded-xl `,
      className,
      animationButton[animation],
    ),
    custom: clsx(className, animationButton[animation]),
    solid: clsx(className, animationButton[animation]),
  };

  return (
    <button ref={ref} className={`${variantOption[variant]}`} {...rest}>
      {children}
      {IconConmponents && <IconConmponents />}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
