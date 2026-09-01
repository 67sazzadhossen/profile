const outcomes = [
  {
    number: "01",
    system: "School operations",
    outcome: "One connected operational flow",
    description:
      "Student, teacher, academic, attendance, payment, account, and communication workflows live within one structured system.",
    enables: ["Centralized records", "Role-aware access", "Clearer administration"],
  },
  {
    number: "02",
    system: "Video infrastructure",
    outcome: "Controlled meeting delivery",
    description:
      "Room lifecycle, subscriptions, API access, plan limits, and maintenance safeguards make meeting infrastructure manageable.",
    enables: ["Protected access", "Usage control", "Operational visibility"],
  },
  {
    number: "03",
    system: "Attendance integration",
    outcome: "Hardware data made useful",
    description:
      "Physical device events are received, processed, synchronized, and exposed as dependable attendance information.",
    enables: ["Device connectivity", "Live synchronization", "Usable records"],
  },
  {
    number: "04",
    system: "Communication services",
    outcome: "Fewer disconnected channels",
    description:
      "Real-time events, messaging providers, notifications, and media workflows are coordinated behind consistent service boundaries.",
    enables: ["Real-time delivery", "Provider integration", "Consistent workflows"],
  },
];

export default function OutcomesSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-line bg-accent px-[clamp(24px,7vw,120px)] py-[clamp(100px,12vw,175px)] text-[#11130b]"
      aria-labelledby="outcomes-title"
    >
      <div
        className="pointer-events-none absolute top-0 right-[-.04em] text-[clamp(12rem,32vw,38rem)] leading-[.72] font-bold tracking-[-.12em] text-black/[.035]"
        aria-hidden="true"
      >
        03
      </div>

      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-[.8fr_1.2fr] gap-[clamp(50px,10vw,160px)] max-[850px]:grid-cols-1">
          <div>
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-black/55 uppercase">
              <span className="h-px w-8 bg-black/55" aria-hidden="true" />
              03 / Project outcomes
            </p>
            <h2
              className="mt-9 text-[clamp(4rem,8vw,9rem)] leading-[.82] font-medium tracking-[-.08em]"
              id="outcomes-title"
            >
              Built to make
              <br />
              <em className="font-normal [font-family:Georgia,serif]">
                work simpler.
              </em>
            </h2>
          </div>
          <div className="self-end">
            <p className="max-w-[800px] text-[clamp(1.6rem,2.8vw,3.3rem)] leading-[1.1] tracking-[-.045em]">
              The value of a backend is not the code itself—it is what the
              product can do reliably because that code exists.
            </p>
            <p className="mt-7 max-w-[590px] text-sm leading-7 text-black/60">
              These are system capabilities demonstrated by the work, without
              invented testimonials or unsupported performance claims.
            </p>
          </div>
        </div>

        <div className="mt-[clamp(75px,10vw,135px)] grid grid-cols-2 border-t border-l border-black/20 max-[760px]:grid-cols-1">
          {outcomes.map((item) => (
            <article
              className="group min-h-[390px] border-r border-b border-black/20 p-[clamp(26px,4vw,54px)] transition-colors duration-300 hover:bg-black/[.04] max-[760px]:min-h-0"
              key={item.number}
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-[10px] tracking-[.17em] text-black/45">
                  {item.number}
                </span>
                <span className="text-[9px] tracking-[.16em] text-black/50 uppercase">
                  {item.system}
                </span>
              </div>
              <h3 className="mt-14 max-w-[600px] text-[clamp(2rem,3.4vw,4.2rem)] leading-[.95] tracking-[-.06em] max-[760px]:mt-9">
                {item.outcome}
              </h3>
              <p className="mt-6 max-w-[600px] text-sm leading-6 text-black/60">
                {item.description}
              </p>
              <ul
                className="mt-9 flex flex-wrap gap-2"
                aria-label={`${item.system} outcomes`}
              >
                {item.enables.map((value) => (
                  <li
                    className="rounded-full border border-black/20 px-3 py-1.5 text-[9px] font-bold tracking-[.08em] uppercase"
                    key={value}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
