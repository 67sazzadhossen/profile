import Image from "next/image";

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";

const values = [
  {
    number: "01",
    title: "Clarity over complexity",
    description:
      "A system can solve a difficult problem without becoming difficult to understand. I value clear boundaries, names, and decisions.",
  },
  {
    number: "02",
    title: "Reliability is a feature",
    description:
      "The happy path is only the beginning. I think about invalid input, failed integrations, permissions, and operational recovery.",
  },
  {
    number: "03",
    title: "Build for change",
    description:
      "Products evolve. I design services and data models that can grow without forcing every new requirement into a rewrite.",
  },
];

const experience = [
  "Complete school management systems",
  "Video meeting infrastructure",
  "Enterprise operations platforms",
  "Attendance device integrations",
  "Payments and communication services",
  "Real-time applications",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <section className="relative isolate flex min-h-svh items-end overflow-hidden px-[clamp(24px,7vw,120px)] pt-40 pb-[clamp(80px,9vw,130px)]">
          <div
            className="absolute inset-0 -z-2 bg-[linear-gradient(rgb(244_241_233/.05)_1px,transparent_1px),linear-gradient(90deg,rgb(244_241_233/.05)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
            aria-hidden="true"
          />
          <div
            className="absolute top-[18%] right-[4%] -z-1 size-[45vw] rounded-full bg-accent opacity-[.06] blur-[180px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-1 mx-auto h-full w-[min(78vw,920px)] overflow-hidden rounded-full opacity-20 [mask-image:linear-gradient(to_bottom,transparent_4%,black_24%,black_72%,transparent_96%)] max-[800px]:w-[94vw] max-[800px]:opacity-10"
            aria-hidden="true"
          >
            <Image
              className="object-contain object-center grayscale"
              src="/illustration.png"
              alt=""
              fill
              sizes="(max-width: 800px) 85vw, 48vw"
              priority
            />
          </div>

          <div className="mx-auto w-full max-w-[1500px]">
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              About / Sazzad Hossen
            </p>
            <h1 className="mt-10 max-w-[1450px] text-[clamp(4.7rem,11.5vw,13rem)] leading-[.77] font-medium tracking-[-.09em]">
              I engineer what
              <br />
              users{" "}
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                rely on.
              </em>
            </h1>
            <div className="mt-[clamp(55px,7vw,95px)] flex items-end justify-between gap-12 border-t border-line pt-7 max-[760px]:items-start max-[760px]:flex-col">
              <p className="text-[10px] tracking-[.18em] text-muted uppercase">
                Backend Engineer / Bangladesh
              </p>
              <p className="max-w-[710px] text-[clamp(1.25rem,2.15vw,2.5rem)] leading-[1.25] tracking-[-.035em] text-[#d9d7d0]">
                I turn product requirements into secure APIs, dependable data
                flows, and backend systems built for real-world use.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-[#0e0f11] px-[clamp(24px,7vw,120px)] py-[clamp(100px,13vw,190px)]">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[.7fr_1.3fr] gap-[clamp(55px,10vw,170px)] max-[850px]:grid-cols-1">
            <div>
              <p className="text-[10px] tracking-[.2em] text-accent uppercase">
                My perspective
              </p>
              <h2 className="mt-7 text-[clamp(3.5rem,6.5vw,7.5rem)] leading-[.84] tracking-[-.075em]">
                Behind every
                <br />
                <em className="font-normal text-accent [font-family:Georgia,serif]">
                  interface.
                </em>
              </h2>
            </div>
            <div>
              <p className="max-w-[860px] text-[clamp(1.7rem,3vw,3.6rem)] leading-[1.12] tracking-[-.045em] text-[#dedcd5]">
                The best backend feels invisible: fast when it should be,
                strict where it must be, and ready when the product grows.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-10 border-t border-line pt-8 text-[15px] leading-7 text-muted max-[620px]:grid-cols-1 max-[620px]:gap-5">
                <p>
                  My work starts with understanding the domain—not selecting a
                  framework. I map roles, rules, data, failure cases, and
                  integrations before shaping the service around them.
                </p>
                <p>
                  I&apos;ve worked across education, video communication,
                  operations, attendance hardware, payments, and messaging.
                  Different products, but the same goal: software people can
                  trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eeece4] px-[clamp(24px,7vw,120px)] py-[clamp(100px,12vw,170px)] text-[#111214]">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="flex items-end justify-between gap-12 max-[760px]:items-start max-[760px]:flex-col">
              <h2 className="text-[clamp(3.8rem,7.5vw,8.5rem)] leading-[.83] tracking-[-.08em]">
                How I think
                <br />
                about{" "}
                <em className="font-normal text-[#667617] [font-family:Georgia,serif]">
                  engineering.
                </em>
              </h2>
              <p className="max-w-[390px] text-sm leading-6 text-black/55">
                Principles that guide architecture, implementation, and the
                decisions between them.
              </p>
            </div>

            <div className="mt-[clamp(65px,9vw,120px)] grid grid-cols-3 border-y border-black/20 max-[800px]:grid-cols-1">
              {values.map((value) => (
                <article
                  className="min-h-[310px] border-black/20 p-[clamp(26px,3vw,46px)] [&:not(:last-child)]:border-r max-[800px]:min-h-0 max-[800px]:[&:not(:last-child)]:border-r-0 max-[800px]:[&:not(:last-child)]:border-b"
                  key={value.number}
                >
                  <span className="text-[10px] tracking-[.17em] text-[#667617]">
                    {value.number}
                  </span>
                  <h3 className="mt-14 text-[clamp(1.7rem,2.5vw,3rem)] leading-[1.05] tracking-[-.05em] max-[800px]:mt-8">
                    {value.title}
                  </h3>
                  <p className="mt-5 max-w-[390px] text-sm leading-6 text-black/55">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101113] px-[clamp(24px,7vw,120px)] py-[clamp(100px,12vw,170px)]">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[.85fr_1.15fr] gap-[clamp(55px,10vw,160px)] max-[800px]:grid-cols-1">
            <div>
              <p className="text-[10px] tracking-[.2em] text-accent uppercase">
                Experience across
              </p>
              <h2 className="mt-7 text-[clamp(3.8rem,7vw,8rem)] leading-[.84] tracking-[-.075em]">
                Complex systems.
                <br />
                <em className="font-normal text-accent [font-family:Georgia,serif]">
                  Clear outcomes.
                </em>
              </h2>
            </div>
            <ol className="border-t border-line">
              {experience.map((item, index) => (
                <li
                  className="flex items-center gap-7 border-b border-line py-6 text-[clamp(1.25rem,2vw,2.2rem)] tracking-[-.035em] text-[#d8d6cf]"
                  key={item}
                >
                  <span className="text-[9px] tracking-[.16em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-accent px-[clamp(24px,7vw,120px)] py-[clamp(80px,10vw,140px)] text-[#11130b]">
          <div className="mx-auto flex w-full max-w-[1500px] items-end justify-between gap-10 max-[760px]:items-start max-[760px]:flex-col">
            <h2 className="text-[clamp(3.8rem,8vw,9rem)] leading-[.82] tracking-[-.08em]">
              Let&apos;s build what&apos;s
              <br />
              <em className="font-normal [font-family:Georgia,serif]">
                next.
              </em>
            </h2>
            <a
              className="group flex min-h-14 items-center gap-10 rounded-xl bg-[#11130b] px-6 text-sm font-bold text-foreground transition-transform duration-300 hover:-translate-y-1"
              href="mailto:sazzadhossen010@gmail.com"
            >
              Start a conversation
              <span
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
