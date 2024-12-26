import { House } from "lucide-react";
import styles from "./style.module.css";
import { ButtonHTMLAttributes } from "react";

export const HomeButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      <House />
      {children}
    </button>
  );
};
