"use client";

import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { Button, HouseIcon } from "./styles";

export const HomeButton = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();

  function handleHomeClick() {
    router.push("/");
  }

  return (
    <Button
      {...props}
      onClick={props.onClick ? props.onClick : handleHomeClick}
    >
      <HouseIcon />
      <span>Voltar</span>
    </Button>
  );
};
