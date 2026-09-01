import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "API architecture",
    description:
      "Modular REST APIs with clear boundaries, validation, authentication, and role-based access.",
  },
  {
    number: "02",
    title: "Data & reliability",
    description:
      "Production-minded data layers with PostgreSQL, Prisma, MongoDB, background jobs, and safe migrations.",
  },
  {
    number: "03",
    title: "Real-time & integrations",
    description:
      "Socket-driven features, payments, media, email, video infrastructure, and third-party services.",
  },
];

const technologies = [
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Socket.IO",
  "Docker",
];

export default function AboutSection() {
  return (
    <section
      className="relative z-10 -mt-[20svh] overflow-hidden border-t border-line bg-[#0d0e10] px-[clamp(24px,7vw,120px)] py-[clamp(90px,12vw,180px)]"
      id="about"
      aria-labelledby="about-title"
    >
      <div
        className="pointer-events-none absolute top-0 right-[-.04em] text-[clamp(12rem,32vw,38rem)] leading-[.72] font-bold tracking-[-.12em] text-white/[.018]"
        aria-hidden="true"
      >
        01
      </div>
      <div
        className="pointer-events-none absolute inset-0 mx-auto h-full w-[min(78vw,920px)] overflow-hidden rounded-full opacity-[.055] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_78%,transparent)] max-[900px]:w-[92vw] max-[900px]:opacity-[.04]"
        aria-hidden="true"
      >
        <Image
          className="object-contain object-center grayscale"
          src="/illustration.png"
          alt=""
          fill
          sizes="(max-width: 900px) 90vw, 52vw"
        />
      </div>

      <div className="relative z-1 mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-[.8fr_1.2fr] gap-[clamp(48px,9vw,150px)] max-[900px]:grid-cols-1">
          <div>
            <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              01 / About me
            </p>
            <h2
              className="max-w-[700px] text-[clamp(4rem,7.8vw,8.8rem)] leading-[.84] font-medium tracking-[-.078em] max-[760px]:text-[clamp(2.8rem,12vw,3.8rem)] max-[760px]:leading-[.9]"
              id="about-title"
            >
              Behind the
              <br />
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                screen.
              </em>
            </h2>
          </div>

          <div className="self-end pt-16 max-[900px]:pt-0">
            <p className="max-w-[820px] text-[clamp(1.65rem,2.75vw,3.4rem)] leading-[1.08] tracking-[-.045em] text-[#e3e1da] max-[760px]:text-[1.35rem] max-[760px]:leading-[1.18]">
              I build the systems that keep digital products fast, secure, and
              ready to grow.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-10 border-t border-line pt-8 max-[640px]:grid-cols-1 max-[640px]:gap-5">
              <p className="max-w-[480px] text-[15px] leading-7 text-muted">
                I&apos;m a backend engineer focused on turning complex business
                requirements into clean, maintainable services—from database
                design and API architecture to authentication and deployment.
              </p>
              <p className="max-w-[480px] text-[15px] leading-7 text-muted">
                My work spans real-time platforms, management systems,
                payments, communication tools, and hardware integrations. I
                care about reliability long after the first release.
              </p>
            </div>
            <Link
              className="group mt-9 inline-flex items-center gap-6 border-b border-accent pb-2 text-xs font-bold transition-colors hover:text-accent"
              href="/about"
            >
              More about me
              <span
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-[clamp(80px,11vw,150px)] grid grid-cols-3 border-y border-line max-[820px]:grid-cols-1">
          {capabilities.map((capability) => (
            <article
              className="group min-h-[270px] border-line p-[clamp(24px,3vw,46px)] transition-colors duration-300 hover:bg-white/[.025] [&:not(:last-child)]:border-r max-[820px]:min-h-0 max-[820px]:[&:not(:last-child)]:border-r-0 max-[820px]:[&:not(:last-child)]:border-b"
              key={capability.title}
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] tracking-[.18em] text-muted">
                  {capability.number}
                </span>
                <span
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
              <h3 className="mt-14 text-[clamp(1.35rem,1.8vw,2rem)] tracking-[-.04em] max-[820px]:mt-8">
                {capability.title}
              </h3>
              <p className="mt-4 max-w-[390px] text-sm leading-6 text-muted">
                {capability.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-8 max-[760px]:items-start max-[760px]:flex-col">
          <p className="shrink-0 text-[10px] tracking-[.18em] text-muted uppercase">
            Core stack
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Core technologies">
            {technologies.map((technology) => (
              <li
                className="rounded-full border border-line px-4 py-2 text-[11px] tracking-[.04em] text-[#c9c7c0]"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
