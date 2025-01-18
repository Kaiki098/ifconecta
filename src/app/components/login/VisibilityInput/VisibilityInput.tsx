import { InputHTMLAttributes, useState } from "react";
import { InputWrapper, Input, EyeIcon, EyeClosedIcon } from "./styles";
import { Lock } from "lucide-react";

interface VisibilityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $error: boolean;
}

export function VisibilityInput({ ...props }: VisibilityInputProps) {
  const [showText, setShowText] = useState(false);

  function handleClick() {
    setShowText((showText) => !showText);
  }
  return (
    <InputWrapper>
      <Lock />
      <Input type={showText ? "text" : "password"} {...props} />
      {showText ? (
        <EyeIcon onClick={handleClick} />
      ) : (
        <EyeClosedIcon onClick={handleClick} />
      )}
    </InputWrapper>
  );
}
