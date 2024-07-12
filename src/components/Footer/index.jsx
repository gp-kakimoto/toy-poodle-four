import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer_class}>
      <p>
        &copy; 2023-
        {typeof window === "object"
          ? document.write(new Date().getFullYear())
          : ""}{" "}
        Takahiro KAKIMOTO
      </p>
    </footer>
  );
};
