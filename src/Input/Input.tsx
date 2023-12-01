import styles from "./Input.module.css";
import React, { forwardRef } from "react";

export type InputProps = {
  label?: string;
  name?: string;
  type: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large" | "full";
  disabled?: boolean;
  autocomplete?: string;
  className?: string;
};

function Input(
  {
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    size = "medium",
    defaultValue,
    disabled = false,
    autocomplete = "off",
    className = "",
    ...rest
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles["input-group"]}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={`${styles.input} ${styles[size]} ${
          disabled ? styles.disabled : ""
        } ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        ref={ref}
        disabled={disabled}
        autoComplete={autocomplete}
        {...rest}
      />
    </div>
  );
}

export default forwardRef(Input);
