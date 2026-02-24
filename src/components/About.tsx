'use client';

import Image from 'next/image';
import styles from './about.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      {/* Background silk texture */}
      <div className={styles.bgWrapper}>
        <Image
          src="/assets/background.png"
          alt="background"
          fill
          className={styles.bgImage}
          priority
          quality={90}
        />
        {/* Darkening overlay */}
        <div className={styles.bgOverlay} />
      </div>

      {/* Dust texture overlay on right side */}
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

        {/* RIGHT COLUMN — Board + Model stack */}
        <div className={styles.rightCol}>
          {/* Board frame (rounded rect container) */}
          <div className={styles.boardWrapper}>
            <Image
              src="/assets/board-frame.png"
              alt=""
              fill
              className={styles.boardFrame}
            />
            {/* Layer 20 sandy texture — rendered INSIDE the board */}
            <div className={styles.layer20Wrapper}>
              <Image
                src="/assets/layer20.png"
                alt=""
                fill
                className={styles.layer20Image}
              />
            </div>
          </div>

          {/* Blurry / chromatic aberration model — behind main */}
          <div className={styles.modelBlurryWrapper}>
            <Image
              src="/assets/model-blurry.png"
              alt=""
              fill
              className={styles.modelBlurry}
            />
          </div>

          {/* Shadow white glow behind model */}
          <div className={styles.modelShadowWrapper}>
            <Image
              src="/assets/model-shadow.png"
              alt=""
              fill
              className={styles.modelShadow}
            />
          </div>

          {/* Main model image */}
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
