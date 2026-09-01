"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Featured / School operations",
    title: "School Management System",
    summary:
      "A complete school operations platform connecting students, teachers, academics, attendance, accounts, payments, and communication.",
    challenge:
      "Bring complex academic and administrative workflows into one dependable system without losing clarity across users, roles, and records.",
    contribution:
      "Backend architecture, role-based access, student and teacher management, attendance, academic reports, payments, accounts, SMS, and dashboard reporting.",
    stack: ["TypeScript", "Express", "MongoDB", "Mongoose", "JWT"],
    accent: "#d8ff43",
  },
  {
    number: "02",
    category: "Video infrastructure",
    title: "Secure Video Meeting Platform",
    summary:
      "A secure video-meeting backend designed around rooms, subscriptions, API access, and operational control.",
    challenge:
      "Shape a dependable service layer around real-time meeting infrastructure while keeping access and usage manageable.",
    contribution:
      "Authentication, room lifecycle, API-key management, plan limits, idempotency, rate limiting, and maintenance workflows.",
    stack: ["TypeScript", "Express", "PostgreSQL", "Prisma", "Jitsi"],
    accent: "#88a7ff",
  },
  {
    number: "03",
    category: "Hardware integration",
    title: "Smart Attendance Sync",
    summary:
      "An attendance ecosystem that receives device events and turns raw hardware data into useful operational records.",
    challenge:
      "Bridge physical attendance devices with a modern web platform while handling asynchronous, real-world event data.",
    contribution:
      "Device communication, event processing, attendance synchronization, secure APIs, media handling, and live updates.",
    stack: ["Express", "Socket.IO", "PostgreSQL", "Prisma", "ADMS"],
    accent: "#ff8f70",
  },
  {
    number: "04",
    category: "Real-time communication",
    title: "Omnichannel Messaging Service",
    summary:
      "A communication service connecting conversations, notifications, media, and external messaging providers.",
    challenge:
      "Coordinate real-time product behavior with third-party services without compromising consistency or security.",
    contribution:
      "Socket events, WhatsApp integration, authentication, file delivery, notifications, and resilient service boundaries.",
    stack: ["TypeScript", "Socket.IO", "Twilio", "Cloudinary", "REST"],
    accent: "#f3c969",
  },
];

function SystemVisual({
  number,
  accent,
}: {
  number: string;
  accent: string;
}) {
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-white/10 bg-[#111316]"
      style={{ "--project-accent": accent } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-[12%] border border-white/10">
        <div className="absolute top-0 left-0 h-px w-[38%] bg-[var(--project-accent)]" />
        <div className="absolute top-[18%] left-[12%] size-[clamp(58px,7vw,110px)] rounded-full border border-[var(--project-accent)]/50 bg-[var(--project-accent)]/10 shadow-[0_0_70px_var(--project-accent)]" />
        <div className="absolute top-[29%] right-[12%] h-px w-[42%] bg-white/20" />
        <div className="absolute top-[29%] right-[12%] size-2 -translate-y-1/2 rounded-full bg-[var(--project-accent)]" />
        <div className="absolute right-[12%] bottom-[22%] grid w-[42%] grid-cols-3 gap-2">
          <span className="h-10 border border-white/10 bg-white/[.025]" />
          <span className="h-10 border border-white/10 bg-[var(--project-accent)]/10" />
          <span className="h-10 border border-white/10 bg-white/[.025]" />
        </div>
        <span className="absolute bottom-[10%] left-[10%] text-[9px] tracking-[.2em] text-white/35 uppercase">
          System / {number}
        </span>
      </div>
      <span className="absolute right-[4%] bottom-[2%] text-[clamp(5rem,11vw,11rem)] leading-none font-bold tracking-[-.1em] text-white/[.035]">
        {number}
      </span>
    </div>
  );
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track || !progress) return;

    let cancelled = false;
    let dispose = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();

        media.add("(min-width: 821px)", () => {
          const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance()}`,
              scrub: 0.18,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }),
            },
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
            gsap.set(progress, { clearProps: "transform" });
          };
        });

        dispose = () => media.revert();
      },
    );

    return () => {
      cancelled = true;
      dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-line bg-[#090a0c]"
      id="work"
      aria-labelledby="work-title"
    >
      <div
        ref={trackRef}
        className="flex w-max max-[820px]:w-full max-[820px]:flex-col"
      >
        <div className="relative flex min-h-svh w-screen shrink-0 flex-col justify-between px-[clamp(24px,7vw,120px)] py-[clamp(100px,11vw,150px)] max-[820px]:min-h-[85svh]">
          <div
            className="absolute top-[12%] right-[4%] size-[34vw] rounded-full bg-accent opacity-[.045] blur-[150px]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              02 / Selected work
            </p>
            <h2
              className="mt-10 max-w-[1250px] text-[clamp(4.5rem,11vw,13rem)] leading-[.78] font-medium tracking-[-.085em] max-[760px]:text-[clamp(3rem,13vw,4rem)] max-[760px]:leading-[.86]"
              id="work-title"
            >
              Systems with
              <br />
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                substance.
              </em>
            </h2>
          </div>
          <div className="relative flex items-end justify-between gap-10 max-[700px]:items-start max-[700px]:flex-col">
            <p className="max-w-[550px] text-[clamp(1rem,1.4vw,1.35rem)] leading-[1.55] text-muted">
              A selection of backend challenges shaped into secure, maintainable,
              and production-ready systems.
            </p>
            <p className="flex items-center gap-3 text-[9px] tracking-[.18em] text-white/40 uppercase max-[820px]:hidden">
              Scroll to explore
              <span className="h-px w-14 bg-white/30" aria-hidden="true" />
            </p>
          </div>
        </div>

        {projects.map((project) => (
          <article
            className="grid min-h-svh w-screen shrink-0 grid-cols-[.9fr_1.1fr] items-center gap-[clamp(36px,5.5vw,90px)] border-l border-line px-[clamp(24px,6vw,100px)] py-[clamp(82px,7vw,110px)] max-[820px]:w-full max-[820px]:grid-cols-1 max-[820px]:border-t max-[820px]:border-l-0"
            key={project.number}
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-5 text-[10px] tracking-[.18em] uppercase">
                <span style={{ color: project.accent }}>{project.number}</span>
                <span className="text-muted">{project.category}</span>
              </div>
              <h3 className="mt-8 text-[clamp(3.2rem,5.7vw,6.8rem)] leading-[.84] font-medium tracking-[-.07em] max-[760px]:text-[clamp(2.35rem,10.5vw,3.2rem)] max-[760px]:leading-[.9]">
                {project.title}
              </h3>
              <p className="mt-6 max-w-[680px] text-[clamp(1rem,1.3vw,1.3rem)] leading-[1.45] text-[#d5d3cc]">
                {project.summary}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-7 border-t border-line pt-6 max-[560px]:grid-cols-1">
                <div>
                  <dt className="text-[9px] tracking-[.18em] text-muted uppercase">
                    The challenge
                  </dt>
                  <dd className="mt-3 text-xs leading-[1.65] text-muted">
                    {project.challenge}
                  </dd>
                </div>
                <div>
                  <dt className="text-[9px] tracking-[.18em] text-muted uppercase">
                    My contribution
                  </dt>
                  <dd className="mt-3 text-xs leading-[1.65] text-muted">
                    {project.contribution}
                  </dd>
                </div>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {project.stack.map((technology) => (
                  <li
                    className="rounded-full border border-line px-3 py-1.5 text-[10px] text-[#c8c6bf]"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <SystemVisual number={project.number} accent={project.accent} />
          </article>
        ))}
      </div>

      <Link
        className="group absolute top-[clamp(105px,9vw,135px)] right-[clamp(24px,4vw,70px)] z-20 flex min-h-12 items-center justify-center gap-6 rounded-xl border border-line bg-[#090a0c]/80 px-5 text-xs font-bold backdrop-blur-md transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-[#111] max-[820px]:top-8"
        href="/works"
      >
        Explore all projects
        <span
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        >
          ↗
        </span>
      </Link>

      <div
        className="pointer-events-none absolute right-[4vw] bottom-6 left-[4vw] z-30 h-[3px] overflow-hidden rounded-full bg-white/20 shadow-[0_0_0_1px_rgb(255_255_255/.04)] max-[820px]:hidden"
        aria-hidden="true"
      >
        <span
          ref={progressRef}
          className="block h-full origin-left scale-x-0 rounded-full bg-accent shadow-[0_0_16px_rgb(216_255_67/.8)]"
        />
      </div>
    </section>
  );
}
