'use client';

import Image from 'next/image';
import styles from './about.module.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ui/ScrollReveal'; // Pastikan path importnya sesuai

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);
  const modelMainRef = useRef<HTMLDivElement>(null);
  const modelBlurRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  
  // Wrapper untuk efek parallax text keseluruhan (bukan reveal per kata)
  const textWrapperRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(titleRef.current, { x: -140, opacity: 0 }, { x: 0, opacity: 1, duration: 1.4 }, 0.3);
      tl.fromTo(rightColRef.current, { x: 180, scale: 0.85, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1.6, clearProps: 'scale' }, 0.5);
      
      // Catatan: Efek fade in teks awal dihapus karena sudah diurus ScrollReveal

      if (modelMainRef.current) gsap.to(modelMainRef.current, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 } });
      if (modelBlurRef.current) gsap.to(modelBlurRef.current, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 } });
      gsap.to(titleRef.current, { yPercent: -25, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to(textWrapperRef.current, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.3 } });
      if (boardRef.current) gsap.to(boardRef.current, { scale: 1.04, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      
      <div className={styles.dustWrapper} ref={dustRef}>
        <Image src="/assets/dust.png" alt="" fill className={styles.dustImage} />
      </div>

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.titleWrapper} ref={titleRef}>
            <Image src="/assets/about-us-title.png" alt="About Us" width={700} height={160} className={styles.titleImage} priority />
          </div>
          
          {/* Parallax wrapper untuk teks */}
          <div ref={textWrapperRef} className="text-[#c0c0c0]"> 
            <ScrollReveal>
              Innofashion Show is an annual event organized by the Fashion Design and Textile Program at Petra Christian University. In 2026, the event will enter its 8th year. This annual show is regularly held as a platform to appreciate the academic achievements of final year DFT students.
            </ScrollReveal>
            
            <ScrollReveal>
              The theme of Innofashion Show 8 is “Zerith,” which comes from the word “zenith,” meaning the highest point of a journey. This theme symbolizes the peak of the creative process, struggles, and learning experiences of DFT students. Through this theme, Innofashion Show 8 is expected to serve as a bridge for DFT students and young individuals interested in the fashion world to encourage the emergence of new collaborations and innovations within the fashion industry.
            </ScrollReveal>
          </div>

        </div>

        <div className={styles.rightCol} ref={rightColRef}>
          <div className={styles.boardWrapper} ref={boardRef}>
            <Image src="/assets/board-frame.png" alt="" fill className={styles.boardFrame} />
            <div className={styles.layer20Wrapper}>
              <Image src="/assets/layer20.png" alt="" fill className={styles.layer20Image} />
            </div>
          </div>
          <div className={styles.modelBlurryWrapper} ref={modelBlurRef}>
            <Image src="/assets/model-blurry.png" alt="" fill className={styles.modelBlurry} />
          </div>
          <div className={styles.modelShadowWrapper}>
            <Image src="/assets/model-shadow.png" alt="" fill className={styles.modelShadow} />
          </div>
          <div className={styles.modelMainWrapper} ref={modelMainRef}>
            <Image src="/assets/model-main.png" alt="Fashion model" fill className={styles.modelMain} priority />
          </div>
        </div>
      </div>
    </section>
  );
}