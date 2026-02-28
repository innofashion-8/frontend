'use client';

import Image from 'next/image';
import styles from './about.module.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const modelMainRef = useRef<HTMLDivElement>(null);
  const modelBlurRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── ENTRANCE TIMELINE (plays on mount with delays) ───
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Title: slide from left + fade in
      tl.fromTo(titleRef.current,
        { x: -140, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4 },
        0.3
      );

      // Right column (model board): slide from right + scale + fade in
      tl.fromTo(rightColRef.current,
        { x: 180, scale: 0.85, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 1.6, clearProps: 'scale' },
        0.5
      );

      // Body text: slide up + fade in
      tl.fromTo(bodyRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        0.9
      );

      // ─── SCROLL-DRIVEN PARALLAX EFFECTS ───

      // Background image parallax — moves slower than scroll
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }



      // Model main — subtle vertical parallax (appears to float)
      if (modelMainRef.current) {
        gsap.to(modelMainRef.current, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // Model blur — parallax at different rate for depth
      if (modelBlurRef.current) {
        gsap.to(modelBlurRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // Title — subtle float upward on scroll
      gsap.to(titleRef.current, {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Body text — parallax at a different rate
      gsap.to(bodyRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.3,
        },
      });

      // Board wrapper — subtle scale breathing on scroll
      if (boardRef.current) {
        gsap.to(boardRef.current, {
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.bgWrapper} ref={bgRef}>
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

      <div className={styles.dustWrapper} ref={dustRef}>
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
          <div className={styles.titleWrapper} ref={titleRef}>
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
          <p className={styles.bodyText} ref={bodyRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <div className={styles.rightCol} ref={rightColRef}>
          <div className={styles.boardWrapper} ref={boardRef}>
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

          <div className={styles.modelBlurryWrapper} ref={modelBlurRef}>
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

          <div className={styles.modelMainWrapper} ref={modelMainRef}>
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
