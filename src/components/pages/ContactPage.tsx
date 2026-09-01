import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/contact/ContactForm";

const email = "sazzadhossen010@gmail.com";

const briefItems = [
  "What are you building?",
  "Who will use the product?",
  "What systems or services must it connect to?",
  "What stage is the project currently in?",
  "What timeline are you working with?",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <section className="relative isolate flex min-h-svh items-end overflow-hidden px-[clamp(24px,7vw,120px)] pt-44 pb-[clamp(90px,11vw,150px)]">
          <div
            className="absolute inset-0 -z-2 bg-[linear-gradient(rgb(244_241_233/.05)_1px,transparent_1px),linear-gradient(90deg,rgb(244_241_233/.05)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
            aria-hidden="true"
          />
          <div
            className="absolute top-[12%] right-[4%] -z-1 size-[48vw] rounded-full bg-accent opacity-[.06] blur-[180px]"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-[1500px]">
            <div className="flex items-center justify-between gap-8">
              <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                Contact / Start a conversation
              </p>
              <p className="flex items-center gap-2 text-[9px] tracking-[.16em] text-muted uppercase">
                <span
                  className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgb(216_255_67/.8)]"
                  aria-hidden="true"
                />
                Available for selected projects
              </p>
            </div>

            <h1 className="mt-[clamp(55px,7vw,95px)] text-[clamp(4.8rem,12vw,14rem)] leading-[.75] font-medium tracking-[-.095em]">
              Let&apos;s build
              <br />
              something{" "}
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                reliable.
              </em>
            </h1>

            <div className="mt-[clamp(60px,8vw,110px)] flex items-end justify-between gap-12 border-t border-line pt-8 max-[800px]:items-start max-[800px]:flex-col">
              <p className="max-w-[610px] text-[clamp(1.15rem,1.8vw,2rem)] leading-[1.45] tracking-[-.025em] text-[#d4d2cb]">
                Have a backend challenge, a product idea, or an existing system
                that needs stronger foundations? Tell me what you&apos;re
                working on.
              </p>
              <a
                className="group flex min-h-14 items-center gap-[clamp(22px,4vw,60px)] rounded-xl bg-accent px-6 text-[clamp(.85rem,1.2vw,1.05rem)] font-bold text-[#11130b] transition-transform duration-300 hover:-translate-y-1"
                href={`mailto:${email}?subject=Project inquiry`}
              >
                Email me
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-[#0e0f11] px-[clamp(24px,7vw,120px)] py-[clamp(90px,12vw,170px)]">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[.85fr_1.15fr] gap-[clamp(60px,11vw,180px)] max-[850px]:grid-cols-1">
            <div>
              <p className="text-[10px] tracking-[.2em] text-accent uppercase">
                Direct contact
              </p>
              <h2 className="mt-7 text-[clamp(3.5rem,6.5vw,7.5rem)] leading-[.85] tracking-[-.075em]">
                Start with
                <br />
                <em className="font-normal text-accent [font-family:Georgia,serif]">
                  context.
                </em>
              </h2>
              <p className="mt-8 max-w-[470px] text-sm leading-7 text-muted">
                A little context helps me understand the problem and respond
                with useful next steps.
              </p>

              <div className="mt-10 space-y-3">
                <a
                  className="group flex items-center gap-4 border border-line bg-white/[.02] p-4 transition-[border-color,background-color,transform] duration-300 hover:translate-x-1 hover:border-accent hover:bg-white/[.04]"
                  href={`mailto:${email}`}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#ea4335]/10 text-[#ea4335]">
                    <SiGmail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] tracking-[.16em] text-muted uppercase">
                      Email
                    </span>
                    <strong className="mt-1 block truncate text-sm font-medium">
                      {email}
                    </strong>
                  </span>
                  <span className="ml-auto text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  className="group flex items-center gap-4 border border-line bg-white/[.02] p-4 transition-[border-color,background-color,transform] duration-300 hover:translate-x-1 hover:border-accent hover:bg-white/[.04]"
                  href="https://github.com/67sazzadhossen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                    <SiGithub className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[9px] tracking-[.16em] text-muted uppercase">
                      GitHub
                    </span>
                    <strong className="mt-1 block text-sm font-medium">
                      @67sazzadhossen
                    </strong>
                  </span>
                  <span className="ml-auto text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  className="group flex items-center gap-4 border border-line bg-white/[.02] p-4 transition-[border-color,background-color,transform] duration-300 hover:translate-x-1 hover:border-accent hover:bg-white/[.04]"
                  href="https://www.linkedin.com/in/67sazzadhossen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0a66c2]/15 text-[#5da9e9]">
                    <FaLinkedinIn className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[9px] tracking-[.16em] text-muted uppercase">
                      LinkedIn
                    </span>
                    <strong className="mt-1 block text-sm font-medium">
                      Sazzad Hossen
                    </strong>
                  </span>
                  <span className="ml-auto text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div>
              <ContactForm />

              <p className="mt-12 mb-5 text-[10px] tracking-[.18em] text-muted uppercase">
                A useful brief usually answers
              </p>
              <ol className="border-t border-line">
                {briefItems.map((item, index) => (
                  <li
                    className="flex items-center gap-7 border-b border-line py-6 text-[clamp(1.15rem,2vw,2rem)] tracking-[-.035em] text-[#d8d6cf]"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
