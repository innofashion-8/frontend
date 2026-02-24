'use client';

import Image from 'next/image';
import styles from './about.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <Image
          src="/assets/background.png"
          alt="background"
          fill
          className={styles.bgImage}
          priority
          quality={90}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.dustWrapper}>
        <Image
          src="/assets/dust.png"
          alt=""
          fill
          className={styles.dustImage}
        />
      </div>

      {/* Main content */}
      <div className={styles.container}>
        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          {/* ABOUT US metallic title */}
          <div className={styles.titleWrapper}>
            <Image
              src="/assets/about-us-title.png"
              alt="About Us"
              width={700}
              height={160}
              className={styles.titleImage}
              priority
            />
          </div>

          {/* Body text */}
          <p className={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.boardWrapper}>
            <Image
              src="/assets/board-frame.png"
              alt=""
              fill
              className={styles.boardFrame}
            />
            <div className={styles.layer20Wrapper}>
              <Image
                src="/assets/layer20.png"
                alt=""
                fill
                className={styles.layer20Image}
              />
            </div>
          </div>

          <div className={styles.modelBlurryWrapper}>
            <Image
              src="/assets/model-blurry.png"
              alt=""
              fill
              className={styles.modelBlurry}
            />
          </div>

          <div className={styles.modelShadowWrapper}>
            <Image
              src="/assets/model-shadow.png"
              alt=""
              fill
              className={styles.modelShadow}
            />
          </div>

          <div className={styles.modelMainWrapper}>
            <Image
              src="/assets/model-main.png"
              alt="Fashion model"
              fill
              className={styles.modelMain}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
