import { ChevronRight } from "lucide-react";
import styles from "./style.module.css";

export default function SearchInput() {
  return (
    <div className={styles.inputContainer}>
      <input type="search" />
      <ChevronRight className={styles.chevron} />
    </div>
  );
}
