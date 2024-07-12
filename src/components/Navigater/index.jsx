import styles from "./Navigater.module.css";
import Link from "next/link";

export const Navigater = (props) => {
  return (
    <div className={styles.navigate}>
      <nav className={styles.main_navi}>
        <ul>
          {props.items.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <li>{item.title}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
