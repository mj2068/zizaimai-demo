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
          <h1>神秘的海洋巨兽</h1>
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
      <main style={{ minHeight: "5000px" }}>
        <div className={styles["joint-cover"]}></div>
        <div className={styles["content-container"]}>
          <h1>神秘的海洋巨兽：鲸鱼的奇妙世界</h1>

          <p>
            鲸鱼，这些海洋中的庞然大物，自古以来就令人类充满好奇与敬畏。作为地球上现存最大的动物，它们不仅体型惊人，更以其独特的生活方式和高度的智慧吸引着科学家和普通人的关注。让我们一起深入了解这些海洋巨人的奇妙世界。
          </p>

          <h2>鲸鱼的进化与分类</h2>
          <p>
            鲸鱼属于哺乳动物，与人类一样需要用肺呼吸，尽管它们生活在水中。在约5000万年前，鲸鱼的祖先是生活在陆地上的哺乳动物，经过漫长的进化过程，逐渐适应了水生环境。现代鲸鱼主要分为两大类：齿鲸和须鲸。
          </p>

          <h3>须鲸</h3>
          <p>
            须鲸以其特殊的滤食器官——鲸须著称，用于过滤海水捕食浮游生物和小鱼。这类鲸鱼包括：
          </p>
          <ul>
            <li>蓝鲸：地球上最大的动物，可达30米长，重达200吨</li>
            <li>座头鲸：以其优美的歌声和复杂的社交行为闻名</li>
            <li>灰鲸：每年进行世界上最长距离的迁徙</li>
          </ul>

          <h3>齿鲸</h3>
          <p>齿鲸拥有牙齿，主要捕食鱼类和乌贼。这类鲸鱼包括：</p>
          <ul>
            <li>抹香鲸：拥有地球上最大的大脑</li>
            <li>虎鲸：被称为"海洋杀手"，具有高度的智慧和复杂的社会结构</li>
            <li>白鲸：以其独特的白色外表和社交能力著称</li>
          </ul>

          <h2>独特的生理特征</h2>
          <h3>呼吸系统</h3>
          <p>
            尽管生活在水中，鲸鱼必须浮出水面呼吸。它们的鼻孔演化成了位于头顶的呼吸孔，能够在短时间内交换大量空气。一些深潜的鲸鱼species能够屏住呼吸长达两小时。
          </p>

          <h3>回声定位</h3>
          <p>
            齿鲸类拥有精密的回声定位系统。它们能够发出高频声波，通过接收回声来确定物体的位置、大小和移动方向，这使它们能在深海中准确导航和捕食。
          </p>

          <h3>体温调节</h3>
          <p>
            鲸鱼体内有厚厚的脂肪层，不仅可以储存能量，还能保持体温，使它们能够在寒冷的海水中生存。这层脂肪也帮助调节浮力。
          </p>

          <h2>社会行为与智慧</h2>
          <h3>社群生活</h3>
          <p>
            许多鲸鱼species都过着复杂的群居生活。它们形成稳定的家族群体，共同养育后代，协作捕食，并发展出独特的群体文化。
          </p>

          <h3>交流方式</h3>
          <p>
            鲸鱼通过各种声音进行交流，从座头鲸复杂的歌声到虎鲸独特的方言。这些声音可以在海洋中传播数百公里，帮助维持群体联系。
          </p>

          <h2>面临的威胁</h2>
          <h3>人类活动</h3>
          <ul>
            <li>商业捕鲸历史上导致多个鲸鱼种群濒临灭绝</li>
            <li>海洋污染，特别是塑料污染</li>
            <li>船只碰撞</li>
            <li>渔网缠绕</li>
            <li>海洋噪音污染影响它们的通讯和导航</li>
          </ul>

          <h3>气候变化</h3>
          <p>全球变暖导致海洋生态系统改变，影响鲸鱼的食物来源和迁徙模式。</p>

          <h2>保护措施</h2>
          <h3>国际合作</h3>
          <ul>
            <li>国际捕鲸委员会（IWC）的商业捕鲸禁令</li>
            <li>建立海洋保护区</li>
            <li>跨国界保护协议</li>
          </ul>

          <h2>结语</h2>
          <p>
            鲸鱼是地球上最令人着迷的生物之一，它们不仅是海洋生态系统的重要组成部分，更是自然界适应能力和智慧的完美展现。随着人类对它们的了解不断深入，我们越发认识到保护这些海洋巨人的重要性。只有确保它们的栖息地安全，减少人类活动的负面影响，我们才能让这些神奇的生物继续在海洋中自由游弋，让子孙后代也能欣赏到它们的壮美身影。
          </p>

          <p>
            保护鲸鱼不仅是为了鲸鱼本身，更是为了维护海洋生态系统的平衡，最终惠及全人类。让我们共同努力，为保护这些海洋巨人贡献自己的一份力量。
          </p>
        </div>
      </main>
    </div>
  );
}

export { ParallaxHero as Component };
