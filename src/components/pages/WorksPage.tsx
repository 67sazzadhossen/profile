"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import Footer from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";

type Category = "All" | "Systems" | "Backend" | "Full-stack" | "Integration" | "Frontend";

type Project = {
  name: string;
  category: Exclude<Category, "All">;
  type: string;
  description: string;
  stack: string[];
  accent: string;
  href?: string;
  featured?: boolean;
};

const categories: Category[] = ["All", "Systems", "Backend", "Full-stack", "Integration", "Frontend"];

const projects: Project[] = [
  {
    name: "School Management System",
    category: "Systems",
    type: "Featured / GSCAM",
    description: "A complete platform for students, teachers, academics, attendance, accounts, payments, SMS, and administrative reporting.",
    stack: ["TypeScript", "Express", "MongoDB", "Mongoose", "JWT"],
    accent: "#d8ff43",
    featured: true,
  },
  {
    name: "Secure Video Meeting Platform",
    category: "Systems",
    type: "Video infrastructure",
    description: "Secure meeting services with room lifecycle, subscriptions, API keys, usage limits, and operational safeguards.",
    stack: ["TypeScript", "Express", "PostgreSQL", "Prisma", "Jitsi"],
    accent: "#8aa7ff",
    href: "https://github.com/67sazzadhossen/famex-jitsi-meet",
    featured: true,
  },
  {
    name: "Smart Attendance Sync",
    category: "Integration",
    type: "Attendance hardware",
    description: "A device-connected attendance ecosystem for receiving, processing, and synchronizing real-world attendance events.",
    stack: ["Express", "Socket.IO", "PostgreSQL", "Prisma", "ADMS"],
    accent: "#ff8f70",
    featured: true,
  },
  {
    name: "Workforce Operations Hub",
    category: "Systems",
    type: "Business operations",
    description: "A modular employee and operations platform with secure access, reporting, media, and real-time workflows.",
    stack: ["TypeScript", "Express", "PostgreSQL", "Prisma", "Socket.IO"],
    accent: "#9dd8c8",
  },
  {
    name: "Project Workflow Engine",
    category: "Backend",
    type: "Operations backend",
    description: "A relational service for structured project workflows, scheduled processes, permissions, and communication.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "Cron"],
    accent: "#f0c36a",
  },
  {
    name: "Financial Operations Suite",
    category: "Full-stack",
    type: "Finance operations",
    description: "An operations platform combining protected financial workflows, document handling, live updates, and structured data.",
    stack: ["TypeScript", "Express", "Prisma", "Socket.IO", "Cloudinary"],
    accent: "#79c7ff",
  },
  {
    name: "Omnichannel Messaging Service",
    category: "Integration",
    type: "Communication service",
    description: "A communication backend connecting WhatsApp workflows, notifications, media, and real-time product events.",
    stack: ["TypeScript", "Twilio", "Socket.IO", "Cloudinary", "REST"],
    accent: "#65d28e",
  },
  {
    name: "Travel Booking Platform",
    category: "Full-stack",
    type: "Travel platform",
    description: "A full-stack travel product with discovery, protected services, media handling, email, and payments.",
    stack: ["TypeScript", "React", "Express", "MongoDB", "Stripe"],
    accent: "#ffad66",
  },
  {
    name: "Freelance Service Marketplace",
    category: "Full-stack",
    type: "Service marketplace",
    description: "A client-server marketplace experience connecting service discovery, accounts, and transactional workflows.",
    stack: ["JavaScript", "React", "Node.js", "MongoDB", "REST"],
    accent: "#6bd6d0",
    href: "https://github.com/67sazzadhossen/gigzoom",
  },
  {
    name: "Gadget Commerce Platform",
    category: "Full-stack",
    type: "Commerce platform",
    description: "A commerce application with dedicated client and backend services for data-driven catalog workflows.",
    stack: ["JavaScript", "React", "Express", "MongoDB", "REST"],
    accent: "#f27ba4",
    href: "https://github.com/67sazzadhossen/gadgetbd_client",
  },
  {
    name: "Volunteer Opportunity Network",
    category: "Full-stack",
    type: "Community platform",
    description: "A volunteer opportunity platform with separate applications for discovery and participation.",
    stack: ["JavaScript", "React", "Node.js", "MongoDB", "REST"],
    accent: "#93c96b",
    href: "https://github.com/67sazzadhossen/Volunteer-Avenue-Client",
  },
  {
    name: "Tourism Discovery Platform",
    category: "Full-stack",
    type: "Travel discovery",
    description: "A travel experience backed by dedicated services for content, users, and application data.",
    stack: ["JavaScript", "React", "Express", "MongoDB", "REST"],
    accent: "#e8bf63",
    href: "https://github.com/67sazzadhossen/travel-asia",
  },
  {
    name: "Local Classifieds Marketplace",
    category: "Full-stack",
    type: "Classified marketplace",
    description: "A marketplace product organized around listings, user interactions, and maintainable workflows.",
    stack: ["TypeScript", "Full-stack", "API", "Database"],
    accent: "#e99d55",
  },
  {
    name: "Publishing Platform API",
    category: "Backend",
    type: "Content backend",
    description: "A typed backend for publishing workflows, user access, content management, and API-driven experiences.",
    stack: ["TypeScript", "Node.js", "Express", "Database", "JWT"],
    accent: "#78a5ff",
    href: "https://github.com/67sazzadhossen/blog-project-b4a3",
  },
  {
    name: "Book Commerce API",
    category: "Backend",
    type: "Commerce backend",
    description: "A structured API for catalog, inventory, ordering, validation, and book-commerce operations.",
    stack: ["TypeScript", "Node.js", "Express", "MongoDB", "Mongoose"],
    accent: "#bd8df3",
    href: "https://github.com/67sazzadhossen/book-shop-b4a2",
  },
  {
    name: "Performance Analytics Dashboard",
    category: "Frontend",
    type: "Analytics interface",
    description: "A responsive dashboard focused on structured information, visual hierarchy, and reusable UI.",
    stack: ["TypeScript", "React", "Dashboard", "Responsive UI"],
    accent: "#f17d6a",
    href: "https://github.com/67sazzadhossen/firstbench-dashboard",
  },
  {
    name: "Portfolio",
    category: "Frontend",
    type: "Interactive experience",
    description: "This animated portfolio, combining responsive content, motion, accessibility, and performance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    accent: "#d8ff43",
    href: "https://github.com/67sazzadhossen/profile",
  },
];

function ProjectVisual({ index, project }: { index: number; project: Project }) {
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden border-b border-line bg-[#101215]"
      style={{ "--card-accent": project.accent } as CSSProperties}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/.045)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute top-[17%] left-[10%] size-[clamp(52px,6vw,92px)] rounded-full border border-[var(--card-accent)]/55 bg-[var(--card-accent)]/10 shadow-[0_0_60px_var(--card-accent)]" />
      <div className="absolute top-[34%] right-[10%] h-px w-[52%] bg-white/20">
        <span className="absolute top-1/2 right-0 size-2 -translate-y-1/2 rounded-full bg-[var(--card-accent)]" />
      </div>
      <div className="absolute right-[10%] bottom-[18%] flex w-[45%] gap-2">
        <span className="h-10 flex-1 border border-white/10 bg-white/[.025]" />
        <span className="h-10 flex-1 border border-white/10 bg-[var(--card-accent)]/10" />
        <span className="h-10 flex-1 border border-white/10 bg-white/[.025]" />
      </div>
      <span className="absolute bottom-4 left-5 text-[9px] tracking-[.18em] text-white/35 uppercase">
        Project / {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <section className="relative isolate overflow-hidden px-[clamp(24px,7vw,120px)] pt-[clamp(180px,17vw,250px)] pb-[clamp(90px,11vw,150px)]">
          <div className="absolute inset-0 -z-2 bg-[linear-gradient(rgb(244_241_233/.05)_1px,transparent_1px),linear-gradient(90deg,rgb(244_241_233/.05)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" aria-hidden="true" />
          <div className="absolute top-[15%] right-[2%] -z-1 size-[48vw] rounded-full bg-accent opacity-[.055] blur-[180px]" aria-hidden="true" />
          <div className="mx-auto w-full max-w-[1500px]">
            <p className="flex items-center gap-3 text-[10px] tracking-[.22em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Project archive / Selected products
            </p>
            <h1 className="mt-10 text-[clamp(5rem,14vw,16rem)] leading-[.74] font-medium tracking-[-.095em]">
              All <em className="font-normal text-accent [font-family:Georgia,serif]">Works.</em>
            </h1>
            <div className="mt-[clamp(55px,7vw,90px)] flex items-end justify-between gap-12 border-t border-line pt-7 max-[760px]:items-start max-[760px]:flex-col">
              <p className="max-w-[700px] text-[clamp(1.25rem,2vw,2.25rem)] leading-[1.3] tracking-[-.03em] text-[#d9d7d0]">
                Backend systems, full-stack products, integrations, and interfaces built across real business domains.
              </p>
              <p className="text-[10px] tracking-[.16em] text-muted uppercase">{projects.length} selected projects</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-[#0d0e10] px-[clamp(24px,7vw,120px)] py-[clamp(70px,9vw,120px)]">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="flex flex-wrap gap-2 border-b border-line pb-8" aria-label="Filter projects">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    className={`cursor-pointer rounded-full border px-4 py-2 text-[10px] font-bold tracking-[.08em] uppercase transition-colors duration-250 ${isActive ? "border-accent bg-accent text-[#11130b]" : "border-line bg-transparent text-muted hover:border-white/30 hover:text-foreground"}`}
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 max-[800px]:grid-cols-1">
              {visibleProjects.map((project, index) => (
                <article
                  className="group overflow-hidden border border-line bg-[#111214] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-white/25"
                  key={project.name}
                >
                  <ProjectVisual index={index} project={project} />
                  <div className="flex min-h-[330px] flex-col p-[clamp(24px,3vw,42px)]">
                    <div className="flex items-start justify-between gap-5">
                      <p className="text-[9px] tracking-[.16em] uppercase" style={{ color: project.accent }}>{project.type}</p>
                      <span className="text-[9px] tracking-[.14em] text-muted uppercase">{project.href ? "Public" : "Case study"}</span>
                    </div>
                    <h2 className="mt-8 text-[clamp(2.3rem,4vw,5rem)] leading-[.88] tracking-[-.065em]">{project.name}</h2>
                    <p className="mt-6 max-w-[650px] text-sm leading-6 text-muted">{project.description}</p>
                    <div className="mt-auto flex items-end justify-between gap-7 pt-9">
                      <ul className="flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.name} technology stack`}>
                        {project.stack.map((technology) => (
                          <li className="text-[9px] tracking-[.1em] text-[#bbb9b2] uppercase" key={technology}>/ {technology}</li>
                        ))}
                      </ul>
                      {project.href ? (
                        <a className="shrink-0 text-lg text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>↗</a>
                      ) : (
                        <span className="shrink-0 text-[9px] tracking-[.12em] text-muted uppercase" title="Repository is private">Private</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-[clamp(70px,9vw,120px)] flex items-center justify-between gap-10 border-y border-line py-9 max-[650px]:items-start max-[650px]:flex-col">
              <div>
                <p className="text-[10px] tracking-[.17em] text-accent uppercase">Complete archive</p>
                <p className="mt-3 max-w-[620px] text-sm leading-6 text-muted">Explore public experiments, learning projects, source code, and earlier work directly on GitHub.</p>
              </div>
              <a className="group flex min-h-12 shrink-0 items-center gap-8 rounded-xl bg-accent px-5 text-xs font-bold text-[#11130b] transition-transform duration-300 hover:-translate-y-1" href="https://github.com/67sazzadhossen?tab=repositories" target="_blank" rel="noreferrer">
                View GitHub archive
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
