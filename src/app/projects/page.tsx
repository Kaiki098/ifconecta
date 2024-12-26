import { HomeButton } from "../components/HomeButton/HomeButton";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <>
      <div className={styles.topBar}>
        <SearchInput />
        <HomeButton />
      </div>
      <div></div>
    </>
  );
}
