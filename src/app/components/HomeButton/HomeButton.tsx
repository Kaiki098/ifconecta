"use client";

import { House } from "lucide-react";
import styles from "./style.module.css";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

export const HomeButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  function handleHomeClick() {
    router.back();
  }

  return (
    <button
      className={styles.button}
      {...props}
      onClick={props.onClick ? props.onClick : handleHomeClick}
    >
      <House />
      {children}
    </button>
  );
};
