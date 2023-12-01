import React, { forwardRef, useContext, useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

export type SidebarProps = {
  toggle?: () => void;
  position?: "left" | "right";
  children: React.ReactNode;
  className?: string;
};

export type SidebarItemGroupProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type SidebarItemProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type SidebarItemIconProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type SidebarItemLabelProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const defaultContextValue = {
  isSidebarOpen: false,
};

export const SiebarContext = React.createContext(defaultContextValue);

function Sidebar(
  { position = "left", children, className = "" }: SidebarProps,
  ref?: React.ForwardedRef<HTMLDivElement>
) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    });
    setIsSidebarOpen(window.innerWidth > 768);
  }, []);

  function handleClick() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <SiebarContext.Provider value={{ isSidebarOpen }}>
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.open : styles.closed
        } ${position === "right" ? styles.right : styles.left}} ${className}`}
        ref={ref}
      >
        <div>
          <button onClick={handleClick}>{isSidebarOpen ? "<<" : ">>"}</button>
        </div>
        {children}
      </div>
    </SiebarContext.Provider>
  );
}

export default React.forwardRef(Sidebar);

export const SidebarItemGroup = forwardRef(
  (
    { children, onClick }: SidebarItemGroupProps,
    ref?: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={styles["sidebar-item-group"]} onClick={onClick} ref={ref}>
        {children}
      </div>
    );
  }
);

export const SiderbarItem = forwardRef(
  (
    { children, onClick }: SidebarItemProps,
    ref?: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={styles["sidebar-item"]} onClick={onClick} ref={ref}>
        {children}
      </div>
    );
  }
);

export const SiderbarItemIcon = forwardRef(
  (
    { children, onClick }: SidebarItemIconProps,
    ref?: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={styles["sidebar-item-icon"]} onClick={onClick} ref={ref}>
        {children}
      </div>
    );
  }
);

export const SidebarItemLabel = forwardRef(
  (
    { children, onClick }: SidebarItemLabelProps,
    ref?: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { isSidebarOpen } = useContext(SiebarContext);

    if (!isSidebarOpen) {
      return null;
    }

    return (
      <div
        className={`${styles["sidebar-item-label"]} ${isSidebarOpen ? "" : ""}`}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

// export function SidebarHeader({ children }) {
//   return <div className={styles["sidebar-header"]}>{children}</div>;
// }

// export function SidebarFooter({ children }) {
//   return <div className={styles["sidebar-footer"]}>{children}</div>;
// }
