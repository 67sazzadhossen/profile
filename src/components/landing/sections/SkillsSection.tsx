const expertise = [
  {
    number: "01",
    title: "Backend architecture",
    description:
      "Modular services and REST APIs designed around clear domain boundaries, maintainability, and growth.",
    tools: ["Node.js", "Express", "TypeScript", "REST API"],
  },
  {
    number: "02",
    title: "Data engineering",
    description:
      "Relational and document data models, migrations, aggregation, and dependable persistence for complex products.",
    tools: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    number: "03",
    title: "Security & access",
    description:
      "Authentication and authorization flows built with validation, role-aware permissions, and safer API boundaries.",
    tools: ["JWT", "bcrypt", "Zod", "Rate limiting"],
  },
  {
    number: "04",
    title: "Real-time systems",
    description:
      "Event-driven features that connect live product experiences, communication services, and physical devices.",
    tools: ["Socket.IO", "Jitsi", "Twilio", "ZKTeco"],
  },
  {
    number: "05",
    title: "Platform delivery",
    description:
      "Production workflows covering media, payments, background jobs, deployment, and system maintenance.",
    tools: ["Docker", "PM2", "Stripe", "Cloudinary"],
  },
];

const principles = [
  "Type-safe by default",
  "Secure at every boundary",
  "Built for production",
];

const technologies: {
  name: string;
  category: string;
  icon: IconType;
  color: string;
}[] = [
  { name: "TypeScript", category: "Language", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", category: "Language", icon: SiJavascript, color: "#b7a900" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express", category: "Backend", icon: SiExpress, color: "#111214" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169e1" },
  { name: "Prisma", category: "ORM", icon: SiPrisma, color: "#2d3748" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47a248" },
  { name: "Socket.IO", category: "Real-time", icon: SiSocketdotio, color: "#111214" },
  { name: "JWT", category: "Security", icon: SiJsonwebtokens, color: "#d53f8c" },
  { name: "Zod", category: "Validation", icon: SiZod, color: "#3e67b1" },
  { name: "Docker", category: "DevOps", icon: SiDocker, color: "#2496ed" },
  { name: "Jitsi", category: "Video", icon: SiJitsi, color: "#97979a" },
  { name: "Stripe", category: "Payments", icon: SiStripe, color: "#635bff" },
  { name: "Cloudinary", category: "Media", icon: SiCloudinary, color: "#3448c5" },
  { name: "Firebase", category: "Services", icon: SiFirebase, color: "#dd8b00" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#111214" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#087ea4" },
  { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Git", category: "Version control", icon: SiGit, color: "#f05032" },
  { name: "GitHub", category: "Collaboration", icon: SiGithub, color: "#181717" },
  { name: "Postman", category: "API tools", icon: SiPostman, color: "#ff6c37" },
];

export default function SkillsSection() {
  return (
    <section
      className="relative bg-[#eeece4] px-[clamp(24px,7vw,120px)] py-[clamp(100px,13vw,190px)] text-[#111214]"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 text-[clamp(10rem,28vw,34rem)] leading-[.75] font-bold tracking-[-.12em] text-black/[.025]"
        aria-hidden="true"
      >
        04
      </div>

      <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-[.72fr_1.28fr] gap-[clamp(55px,10vw,170px)] max-[900px]:grid-cols-1">
        <div>
          <div className="sticky top-[130px] max-[900px]:static">
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-[#667617] uppercase">
              <span className="h-px w-8 bg-[#667617]" aria-hidden="true" />
              04 / Expertise
            </p>
            <h2
              className="mt-9 text-[clamp(4rem,7.7vw,8.7rem)] leading-[.82] font-medium tracking-[-.08em]"
              id="skills-title"
            >
              Built with
              <br />
              <em className="font-normal text-[#667617] [font-family:Georgia,serif]">
                intention.
              </em>
            </h2>
            <p className="mt-9 max-w-[480px] text-[15px] leading-7 text-black/55">
              The tools matter, but the decisions behind them matter more. I
              choose technology around the product, its constraints, and the
              people who will maintain it.
            </p>

            <ul className="mt-10 space-y-3 border-t border-black/15 pt-6">
              {principles.map((principle) => (
                <li
                  className="flex items-center gap-3 text-[10px] font-bold tracking-[.12em] uppercase"
                  key={principle}
                >
                  <span
                    className="size-1.5 rounded-full bg-[#9cba21]"
                    aria-hidden="true"
                  />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-black/20">
          {expertise.map((item) => (
            <article
              className="group grid grid-cols-[48px_1fr] gap-[clamp(18px,3vw,45px)] border-b border-black/20 py-[clamp(34px,4.5vw,66px)]"
              key={item.number}
            >
              <span className="pt-2 text-[10px] tracking-[.16em] text-black/40">
                {item.number}
              </span>
              <div>
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-[clamp(2rem,3.5vw,4.2rem)] leading-none tracking-[-.06em]">
                    {item.title}
                  </h3>
                  <span
                    className="mt-2 text-lg text-[#667617] transition-transform duration-300 group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
                <p className="mt-5 max-w-[680px] text-sm leading-6 text-black/55">
                  {item.description}
                </p>
                <ul
                  className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
                  aria-label={`${item.title} technologies`}
                >
                  {item.tools.map((tool) => (
                    <li
                      className="text-[10px] font-bold tracking-[.11em] text-black/70 uppercase before:mr-2 before:text-[#8da91c] before:content-['/']"
                      key={tool}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-[clamp(100px,13vw,190px)] w-full max-w-[1500px] border-t border-black/20 pt-[clamp(55px,7vw,90px)]">
        <div className="flex items-end justify-between gap-10 max-[700px]:items-start max-[700px]:flex-col">
          <div>
            <p className="text-[10px] tracking-[.2em] text-black/45 uppercase">
              Tools &amp; technologies
            </p>
            <h3 className="mt-5 text-[clamp(2.8rem,5.5vw,6.5rem)] leading-[.9] tracking-[-.07em]">
              The stack behind
              <br />
              <em className="font-normal text-[#667617] [font-family:Georgia,serif]">
                the systems.
              </em>
            </h3>
          </div>
          <p className="max-w-[430px] text-sm leading-6 text-black/55">
            Technologies I use across backend engineering, integrations,
            delivery, and the interfaces that bring those systems to users.
          </p>
        </div>

        <ul className="mt-[clamp(50px,7vw,90px)] grid grid-cols-4 border-t border-l border-black/15 max-[1050px]:grid-cols-3 max-[720px]:grid-cols-2 max-[430px]:grid-cols-1">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <li
                className="group flex min-h-[155px] items-center gap-5 border-r border-b border-black/15 bg-black/0 p-[clamp(20px,2.5vw,34px)] transition-[background-color,transform] duration-300 hover:z-1 hover:-translate-y-1 hover:bg-white/55"
                key={technology.name}
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-black/10 bg-white/45 shadow-[0_10px_30px_rgb(0_0_0/.04)] transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    className="size-7"
                    style={{ color: technology.color }}
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <strong className="block text-[15px] tracking-[-.02em]">
                    {technology.name}
                  </strong>
                  <span className="mt-1.5 block text-[9px] tracking-[.14em] text-black/40 uppercase">
                    {technology.category}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
import type { IconType } from "react-icons";
import {
  SiCloudinary,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJitsi,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
