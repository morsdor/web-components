import React, { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

export type DialogProps = {
  show: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Dialog(
  { children, show = false, className = "" }: DialogProps,
  ref?: React.ForwardedRef<HTMLDialogElement>
) {
  const dialogRef = useRef<HTMLDialogElement>(null);



  useEffect(() => {
    if (!dialogRef.current) return;

    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show]);

  function handleCloseClick() {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  }

  return (
    <dialog className={`${styles.dialog} ${className}`} ref={dialogRef}>
      <button onClick={handleCloseClick} className={styles.close}>
        X
      </button>
      <div className={styles.content}>{children}</div>
    </dialog>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className={styles.header}>{children}</div>;
}

export function DialogFooter({ children }: { children: React.ReactNode }) {
  return <div className={styles.footer}>{children}</div>;
}
