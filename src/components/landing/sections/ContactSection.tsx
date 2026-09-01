const email = "sazzadhossen010@gmail.com";

export default function ContactSection() {
  return (
    <section
      className="relative isolate min-h-svh overflow-hidden bg-[#0b0c0e] px-[clamp(24px,7vw,120px)] py-[clamp(110px,13vw,190px)] text-foreground"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div
        className="absolute top-[10%] left-1/2 -z-1 size-[min(70vw,900px)] -translate-x-1/2 rounded-full bg-accent opacity-[.055] blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-2 bg-[linear-gradient(rgb(244_241_233/.045)_1px,transparent_1px),linear-gradient(90deg,rgb(244_241_233/.045)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex items-center justify-between gap-8">
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              06 / Contact
            </p>
            <p className="flex items-center gap-2 text-[9px] tracking-[.16em] text-muted uppercase">
              <span
                className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgb(216_255_67/.8)]"
                aria-hidden="true"
              />
              Available for selected projects
            </p>
          </div>

          <h2
            className="mt-[clamp(55px,7vw,100px)] max-w-[1400px] text-[clamp(4.2rem,10.5vw,12rem)] leading-[.79] font-medium tracking-[-.085em] max-[760px]:text-[clamp(3rem,13vw,4rem)] max-[760px]:leading-[.88]"
            id="contact-title"
          >
            Have a system
            <br />
            <span className="ml-[12vw] max-[700px]:ml-0">
              in{" "}
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                mind?
              </em>
            </span>
          </h2>

          <div className="mt-[clamp(55px,7vw,100px)] flex items-end justify-between gap-10 max-[760px]:items-start max-[760px]:flex-col">
            <p className="max-w-[490px] text-[clamp(1rem,1.4vw,1.3rem)] leading-[1.6] text-muted">
              From a focused API to a complete backend platform, let&apos;s turn
              your requirements into something reliable, maintainable, and
              ready for real users.
            </p>
            <a
              className="group flex items-center gap-[clamp(18px,3vw,44px)] border-b border-accent pb-3 text-[clamp(1.05rem,2vw,2rem)] tracking-[-.025em] transition-colors duration-300 hover:text-accent"
              href={`mailto:${email}`}
            >
              {email}
              <span
                className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
      </div>
    </section>
  );
}
