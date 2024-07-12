import styles from "./Header.module.css";
import headerBackgroundImage from "../../img/P9055292.JPG";
export const Header = () => {
  return (
    <header
      className={styles.header_class}
      style={{
        backgroundImage: `url(${headerBackgroundImage.src})`,
      }}
    >
      <h1>toy-poodle-four.net</h1>
    </header>
  );
};
