"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const titleAccent = "font-normal text-accent [font-family:Georgia,serif]";

function AnimatedLetters({
  text,
  lineDelay = 0,
}: {
  text: string;
  lineDelay?: number;
}) {
  const words = text.split(" ");
  const letters = Array.from(text);
  const middle = (letters.length - 1) / 2;
  let characterOffset = 0;

  return words.map((word, wordIndex) => {
    const wordOffset = characterOffset;
    characterOffset += word.length + 1;

    return (
      <span
        className="inline-block whitespace-nowrap"
        key={`${word}-${wordIndex}`}
      >
        {Array.from(word).map((letter, letterIndex) => {
          const index = wordOffset + letterIndex;
          const fromLeft = index <= middle;
          const distanceFromEdge = Math.min(
            index,
            letters.length - 1 - index,
          );
          const style = {
            "--letter-x": fromLeft ? "-70px" : "70px",
            "--letter-tilt": fromLeft ? "-18deg" : "18deg",
            "--letter-over": fromLeft ? "7px" : "-7px",
            "--letter-back": fromLeft ? "-3px" : "3px",
            animationDelay: `${0.25 + lineDelay + distanceFromEdge * 0.022}s`,
          } as CSSProperties;

          return (
            <span className="inline-block" key={`${letter}-${index}`}>
              <span
                className="inline-block [backface-visibility:hidden] motion-safe:animate-[letter-reveal_.5s_linear_both]"
                style={style}
              >
                {letter}
              </span>
            </span>
          );
        })}
        {wordIndex < words.length - 1 ? "\u00a0" : null}
      </span>
    );
  });
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const topLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);
  const supportingRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const aboutTrackRef = useRef<HTMLDivElement>(null);
  const aboutWordRef = useRef<HTMLSpanElement>(null);
  const meWordRef = useRef<HTMLSpanElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topLine = topLineRef.current;
    const bottomLine = bottomLineRef.current;
    const supporting = supportingRef.current;
    const watermark = watermarkRef.current;
    const aboutTitle = aboutTitleRef.current;
    const aboutTrack = aboutTrackRef.current;
    const aboutWord = aboutWordRef.current;
    const meWord = meWordRef.current;
    const scrollCue = scrollCueRef.current;
    if (
      !section ||
      !topLine ||
      !bottomLine ||
      !supporting ||
      !watermark ||
      !aboutTitle ||
      !aboutTrack ||
      !aboutWord ||
      !meWord ||
      !scrollCue
    )
      return;

    let dispose = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.12,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            watermark,
            { autoAlpha: 0.18, scale: 1 },
            {
              autoAlpha: 0,
              scale: 0.92,
              duration: 0.14,
              ease: "none",
            },
            0,
          )
          .fromTo(
            supporting,
            { autoAlpha: 1, y: 0 },
            { autoAlpha: 0, y: -150, duration: 0.1, ease: "none" },
            0,
          )
          .fromTo(
            scrollCue,
            { autoAlpha: 1 },
            { autoAlpha: 0, duration: 0.08, ease: "none" },
            0,
          )
          .fromTo(
            topLine,
            { xPercent: 0, autoAlpha: 1 },
            { xPercent: -125, autoAlpha: 0, duration: 0.42, ease: "none" },
            0.04,
          )
          .fromTo(
            bottomLine,
            { xPercent: 0, autoAlpha: 1 },
            { xPercent: 125, autoAlpha: 0, duration: 0.42, ease: "none" },
            0.04,
          )
          .fromTo(
            aboutTitle,
            { yPercent: 125, scale: 0.58, autoAlpha: 0 },
            {
              yPercent: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.52,
              ease: "none",
            },
            0.3,
          )
          .fromTo(
            aboutTrack,
            {
              x: () => (window.innerWidth - aboutWord.offsetWidth) / 2,
              scale: 1,
              transformOrigin: "left center",
            },
            {
              x: () =>
                (window.innerWidth - meWord.offsetWidth) / 2 -
                meWord.offsetLeft,
              scale: 1,
              duration: 0.42,
              ease: "none",
            },
            0.84,
          )
          .to(aboutTitle, { autoAlpha: 1, duration: 0.46, ease: "none" }, 1.26)
          .to(
            aboutTrack,
            {
              x: () => -aboutTrack.scrollWidth * 1.08,
              duration: 0.16,
              ease: "power3.in",
            },
            1.72,
          );

        dispose = () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      },
    );

    return () => dispose();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[470svh]"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="sticky top-0 isolate flex min-h-svh items-center overflow-hidden px-[clamp(24px,5vw,80px)] pt-[130px] pb-[100px] before:absolute before:inset-0 before:-z-2 before:bg-[linear-gradient(rgb(244_241_233/14%)_1px,transparent_1px),linear-gradient(90deg,rgb(244_241_233/14%)_1px,transparent_1px)] before:bg-[size:70px_70px] before:opacity-14 before:[mask-image:linear-gradient(to_bottom,black,transparent_85%)] after:absolute after:top-[15%] after:right-[3%] after:-z-1 after:size-[42vw] after:rounded-full after:bg-accent after:opacity-7 after:blur-[180px] max-[760px]:pt-[100px] max-[760px]:pb-[54px]">
        <div
          ref={watermarkRef}
          className="pointer-events-none absolute inset-0 z-0 mx-auto h-full w-[min(78vw,920px)] overflow-hidden rounded-full opacity-[.18] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_60%,transparent_100%)] max-[900px]:w-[92vw]"
          aria-hidden="true"
        >
          <Image
            className="object-contain object-center grayscale"
            src="/illustration.png"
            alt=""
            fill
            sizes="(max-width: 900px) 90vw, 52vw"
            priority
          />
          <div
            className="absolute inset-0 bg-[#0d0e10]/45"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-1 mx-auto w-full max-w-[1660px] text-center perspective-[700px]">
          <h1
            className="m-0 origin-bottom text-[clamp(4rem,7.2vw,9rem)] leading-[.84] font-medium tracking-[-.075em] whitespace-nowrap [transform-style:preserve-3d] max-[760px]:text-[clamp(2.5rem,10.5vw,3.4rem)] max-[760px]:leading-[.94] max-[760px]:tracking-[-.06em] max-[760px]:whitespace-normal"
            id="hero-title"
            aria-label="I engineer backend systems built to scale."
          >
            <span ref={topLineRef} className="inline-block" aria-hidden="true">
              <AnimatedLetters text="I engineer backend systems" />
            </span>
            <br />
            <span
              ref={bottomLineRef}
              className="inline-block"
              aria-hidden="true"
            >
              <span>
                <AnimatedLetters text="built " lineDelay={0.08} />
              </span>
              <em className={titleAccent}>
                <AnimatedLetters text="to scale." lineDelay={0.08} />
              </em>
            </span>
          </h1>

          <div
            ref={supportingRef}
            className="mx-auto mt-12 w-[min(90vw,570px)] text-center max-[760px]:mt-7"
          >
            <div className="motion-safe:animate-[content-emerge_.55s_cubic-bezier(.16,1,.3,1)_.9s_both]">
              <p className="mx-auto max-w-[520px] text-[clamp(13px,1.05vw,16px)] leading-[1.65] text-muted">
                Backend engineer building secure APIs, real-time systems, and
                scalable infrastructure that power reliable digital products.
              </p>
              <div className="mt-[22px] flex items-center justify-center gap-3 max-[460px]:flex-col max-[460px]:gap-2.5">
                <a
                  className="flex min-h-12 items-center justify-center gap-7 rounded-xl bg-foreground px-[18px] text-xs font-bold text-[#111] transition-[transform,background] duration-250 hover:-translate-y-0.5 hover:bg-accent max-[460px]:w-full"
                  href="#work"
                >
                  Explore my work <span aria-hidden="true">↘</span>
                </a>
                <a
                  className="flex min-h-12 items-center justify-center rounded-xl border border-line px-[18px] text-xs font-bold transition-[transform,border-color] duration-250 hover:-translate-y-0.5 hover:border-[#52534f] max-[460px]:w-full"
                  href="#contact"
                >
                  Build with me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={aboutTitleRef}
          className="invisible absolute inset-0 z-5 flex origin-bottom items-center overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <div
            ref={aboutTrackRef}
            className="relative flex w-max shrink-0 items-baseline gap-[.12em] whitespace-nowrap text-[clamp(12rem,33vw,42rem)] leading-[.8] font-bold tracking-[-.1em]"
          >
            <span ref={aboutWordRef} className="text-foreground">
              ABOUT
            </span>
            <span ref={meWordRef} className="pr-[8vw] text-accent  ">
              ME
            </span>
          </div>
        </div>

        <div
          ref={scrollCueRef}
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2.5 text-[9px] tracking-[.16em] text-[#777872] uppercase max-[760px]:hidden"
          aria-hidden="true"
        >
          <span className="h-px w-8.75 origin-left bg-[#777872] motion-safe:animate-[scroll-pulse_1.8s_ease-in-out_infinite]" />{" "}
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
