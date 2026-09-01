const steps = [
  {
    number: "01",
    title: "Understand",
    label: "Requirements & constraints",
    description:
      "Clarify the product goal, user roles, business rules, integrations, risks, and the outcomes the system must support.",
  },
  {
    number: "02",
    title: "Architect",
    label: "Data & system design",
    description:
      "Shape the domain, data model, API contracts, permissions, and service boundaries before complexity reaches the code.",
  },
  {
    number: "03",
    title: "Build",
    label: "Focused implementation",
    description:
      "Develop in clear modules with type-safe validation, predictable errors, secure access, and maintainable interfaces.",
  },
  {
    number: "04",
    title: "Harden",
    label: "Test & protect",
    description:
      "Exercise critical flows, edge cases, failure paths, performance limits, and security boundaries before release.",
  },
  {
    number: "05",
    title: "Deliver",
    label: "Deploy & improve",
    description:
      "Ship with migrations, operational safeguards, documentation, and a foundation that can evolve with real usage.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-line bg-[#111214] px-[clamp(24px,7vw,120px)] py-[clamp(100px,13vw,190px)]"
      id="process"
      aria-labelledby="process-title"
    >
      <div
        className="pointer-events-none absolute top-0 right-[-.04em] text-[clamp(12rem,32vw,38rem)] leading-[.72] font-bold tracking-[-.12em] text-white/[.018]"
        aria-hidden="true"
      >
        05
      </div>

      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="flex items-end justify-between gap-12 max-[800px]:items-start max-[800px]:flex-col">
          <div>
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              05 / Process
            </p>
            <h2
              className="mt-9 text-[clamp(4rem,8.2vw,9.2rem)] leading-[.82] font-medium tracking-[-.08em] max-[760px]:text-[clamp(2.8rem,12vw,3.8rem)] max-[760px]:leading-[.9]"
              id="process-title"
            >
              From idea to
              <br />
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                dependable.
              </em>
            </h2>
          </div>
          <p className="max-w-[470px] pb-2 text-[15px] leading-7 text-muted">
            Good backend work starts before implementation and continues after
            deployment. This is how I keep each decision connected to the
            product it serves.
          </p>
        </div>

        <ol className="mt-[clamp(80px,11vw,150px)] border-t border-line">
          {steps.map((step) => (
            <li
              className="group grid grid-cols-[70px_.75fr_1.25fr] gap-[clamp(20px,4vw,70px)] border-b border-line py-[clamp(30px,4vw,58px)] transition-colors duration-300 hover:bg-white/[.018] max-[720px]:grid-cols-[45px_1fr]"
              key={step.number}
            >
              <span className="pt-2 text-[10px] tracking-[.18em] text-accent">
                {step.number}
              </span>
              <div>
                <h3 className="text-[clamp(2.2rem,4vw,5rem)] leading-none tracking-[-.06em] max-[760px]:text-[1.9rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[9px] tracking-[.16em] text-muted uppercase">
                  {step.label}
                </p>
              </div>
              <div className="flex items-start justify-between gap-8 max-[720px]:col-start-2">
                <p className="max-w-[620px] pt-2 text-sm leading-7 text-muted">
                  {step.description}
                </p>
                <span
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
