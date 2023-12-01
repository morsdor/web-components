import React, { forwardRef } from "react";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import styles from "./Searchbar.module.css";
import Card from "../Card/Card.tsx";

export type SearchbarProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSearch?: React.MouseEventHandler<HTMLButtonElement>;
  placeholder?: string;
  className?: string;
  addDebounce?: boolean;
};

function Searchbar(
  {
    value,
    onChange,
    onSearch,
    placeholder,
    className,
    addDebounce = false,
  }: SearchbarProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        ref={ref}
        size="large"
      />
      <Button onClick={onSearch} className={styles.button}>
        Search
      </Button>
    </div>
  );
}

export default forwardRef(Searchbar);
