"use client";

import { House } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./styles";

export const HomeButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  function handleHomeClick() {
    router.back();
  }

  return (
    <Button
      {...props}
      onClick={props.onClick ? props.onClick : handleHomeClick}
    >
      <House />
      {children}
    </Button>
  );
};
