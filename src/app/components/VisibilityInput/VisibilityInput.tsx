import { InputHTMLAttributes, useState } from "react";
import { InputWrapper, Input, EyeIcon, EyeClosedIcon } from "./styles";

interface VisibilityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function VisibilityInput({ error, ...props }: VisibilityInputProps) {
  const [showText, setShowText] = useState(false);

  function handleClick() {
    setShowText((showText) => !showText);
  }
  return (
    <InputWrapper>
      <Input type={showText ? "text" : "password"} error={error} {...props} />
      {showText ? (
        <EyeIcon onClick={handleClick} />
      ) : (
        <EyeClosedIcon onClick={handleClick} />
      )}
    </InputWrapper>
  );
}
