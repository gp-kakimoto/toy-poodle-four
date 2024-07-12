import Image from "next/image";
import styles from "./Canvas.module.css";
import mainImage from "../../img/DSC04288.JPG";

export const Canvas = () => {
  return (
    <div>
      <h2>フォーさんの思い出を詰め込むWebサイト</h2>

      <div className={styles.main_canvas}>
        <div className={styles.main_img_container}>
          <Image
            className={styles.main_img}
            src={mainImage.src}
            alt="フォーさん"
            width="6000"
            height="4000"
            /*objectFit="cover"*/
          />
        </div>
      </div>

      <p className={styles.welcome}>
        フォーさんは2022年6月1日、天に還りました
        <br />
        よく 頑張りました
      </p>
    </div>
  );
};
