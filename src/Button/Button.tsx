import React, { forwardRef, useState } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  outline?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
  type?: "button" | "submit" | "reset";
  className?: string;
};

function Button(
  {
    children,
    onClick,
    disabled = false,
    outline = false,
    size = "sm",
    color = "primary",
    type = "submit",
    className = "",
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const [isClicked, setIsClicked] = useState(false);

  let stylesArray: String[] = [];

  stylesArray.push(styles.button);

  if (outline) stylesArray.push(styles.outline);

  if (disabled) stylesArray.push(styles.disabled);

  stylesArray.push(styles[`btn-${size}`]);

  stylesArray.push(styles[`btn-${color}`]);

  stylesArray.push(className);

  let stylesArrToStr = stylesArray.join(" ");

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) onClick(event);
  }

  return (
    <button
      type={type}
      disabled={disabled}
      ref={ref}
      className={`${stylesArrToStr} ${isClicked ? styles.animate : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
