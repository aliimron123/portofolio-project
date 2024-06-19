import React, { forwardRef } from "react";
import clsx from "clsx";

interface ICardProps {
  variant?: "bordered" | "shadow" | "none";
}

type Ref = HTMLDivElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ICardProps;

const Card = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { variant = "none", children, className, ...rest } = props;
  const variantOptions = {
    bordered: clsx(`p-4 border border-gray-200 rounded-lg`, className),
    shadow: clsx(`p-4 shadow-lg rounded-lg`, className),
    none: clsx(className),
  };

  return (
    <div ref={ref} className={`${variantOptions[variant]}`} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
