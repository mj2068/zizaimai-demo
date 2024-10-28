import styles from "./parallax-hero.module.css";
import ImgBg from "@/assets/whales/lovely-blue-paint-water.jpg";
// import ImgBg from "@/assets/whales/deep-sea-exploration-with-krill-light-rays_1304147-108733.jpg";
// import ImgBg from "@/assets/whales/starry-ocean-nature-background-aesthetic-remixed-media.jpg";
import ImgParticle from "@/assets/whales/pngwing.com (6).png";
// import ImgParticle from "@/assets/whales/pngwing.com.png";
import ImgForegroundFront from "@/assets/whales/ocean-floor-dark.png";
import ImgForegroundBack from "@/assets/whales/ocean-floor-trans.png";
import ImgWhale1 from "@/assets/whales/269374482_11147845.png";
import ImgWhale2 from "@/assets/whales/269374573_11147875.png";
import ImgWhale3 from "@/assets/whales/316534287_11391243.png";
import ImgRay from "@/assets/whales/pngwing.com (3).png";

export default function ParallaxHero() {
  return (
    <div className={styles.container}>
      <div className={styles.parallax}>
        <div className={styles.header}>
          <h1>深海巨兽</h1>
          <button>探索深海</button>
        </div>
        <img className={styles["parallax-bg"]} src={ImgBg} />
        <img className={styles["parallax-particle"]} src={ImgParticle} />
        <div className={styles["parallax-whale3-container"]}>
          <img className={styles["parallax-whale3"]} src={ImgWhale3} />
        </div>
        <div className={styles["parallax-whale2-container"]}>
          <img className={styles["parallax-whale2"]} src={ImgWhale2} />
        </div>
        <div className={styles["parallax-whale1-container"]}>
          <img className={styles["parallax-whale1"]} src={ImgWhale1} />            
        </div>
        <img className={styles["parallax-rays"]} src={ImgRay} />
        <img className={styles["parallax-fg-back"]} src={ImgForegroundBack} />
        <img className={styles["parallax-fg-front"]} src={ImgForegroundFront} />
      </div>
      <main style={{ height: "5000px" }}>
        <h2>深海巨兽 - 蓝鲸</h2>
      </main>
    </div>
  );
}

export { ParallaxHero as Component };
