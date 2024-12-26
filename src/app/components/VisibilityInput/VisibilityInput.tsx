import { Eye, EyeClosed } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";
import styles from "./style.module.css";

export function VisibilityInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const [showText, setShowText] = useState(false);

  function handleClick() {
    setShowText((showText) => !showText);
  }

  return (
    <div className={styles.inputWrapper}>
      <input type={showText ? "text" : "password"} {...props} />
      {showText ? (
        <Eye className={styles.icon} onClick={handleClick} />
      ) : (
        <EyeClosed className={styles.icon} onClick={handleClick} />
      )}
    </div>
  );
}
