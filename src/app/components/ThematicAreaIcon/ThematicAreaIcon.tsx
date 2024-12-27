import styles from "./style.module.css";

interface ThematicAreaIconProps {
  thematicArea: string;
}

export default function ThematicAreaIcon({
  thematicArea,
}: ThematicAreaIconProps) {
  return <span className={styles.thematicArea}>{thematicArea}</span>;
}
