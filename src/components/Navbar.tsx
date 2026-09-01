"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Skills", href: "/skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-[clamp(18px,4vw,64px)] py-[18px] max-[760px]:p-3">
      <nav
        className="mx-auto grid min-h-[68px] w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center rounded-[18px] border border-line bg-background/72 py-0 pr-3 pl-[18px] shadow-[0_12px_50px_rgb(0_0_0/22%)] backdrop-blur-[18px] max-[760px]:flex max-[760px]:min-h-[60px] max-[760px]:justify-between max-[760px]:rounded-[15px] max-[760px]:pr-3 max-[760px]:pl-[14px]"
        aria-label="Primary navigation"
      >
        <Link className="flex w-fit items-center gap-2.5 text-[17px] font-bold tracking-[-.03em]" href="/" aria-label="Md. Sazzad Hossen — home">
          <span
            className="relative size-[38px] shrink-0"
            aria-hidden="true"
          >
            <Image
              className="object-contain"
              src="/logo.png"
              alt=""
              fill
              sizes="38px"
              priority
            />
          </span>
          <span>Md. Sazzad Hossen</span>
          <span className="-mt-3 -ml-[7px] size-[5px] rounded-full bg-accent" aria-hidden="true" />
        </Link>

        <div className="flex items-center gap-[clamp(22px,3vw,46px)] max-[760px]:hidden" aria-label="Main menu">
          {links.map((link, index) => (
            <Link className="relative py-6 text-[13px] font-semibold text-[#d7d5ce] after:absolute after:right-0 after:bottom-4 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100" href={link.href} key={link.href}>
              <span className="mr-1.5 align-top text-[8px] text-muted" aria-hidden="true">0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="justify-self-end flex items-center gap-2.5 rounded-[11px] bg-accent px-4 py-[13px] text-[13px] font-bold text-[#11130b] transition-[transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgb(216_255_67/20%)] max-[760px]:hidden" href="/contact">
          Let&apos;s talk
          <svg className="w-3.5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M6 3h7v7" /></svg>
        </Link>

        <button className="group hidden size-[42px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[10px] border-0 bg-[#1b1c1e] max-[760px]:flex" type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span className="h-px w-[17px] bg-foreground transition-transform duration-250 group-aria-expanded:translate-y-[3.5px] group-aria-expanded:rotate-45" />
          <span className="h-px w-[17px] bg-foreground transition-transform duration-250 group-aria-expanded:-translate-y-[3.5px] group-aria-expanded:-rotate-45" />
        </button>
      </nav>

      <div className={`absolute top-[84px] right-3 left-3 hidden flex-col rounded-2xl border border-line bg-[#121315] p-3.5 shadow-[0_24px_60px_rgb(0_0_0/40%)] transition-[opacity,transform,visibility] duration-250 max-[760px]:flex ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2.5 opacity-0"}`} id="mobile-navigation" aria-hidden={!isOpen}>
        {links.map((link, index) => (
          <Link className="flex gap-4 border-b border-line px-2.5 py-4 text-[22px] tracking-[-.03em]" href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
            <span className="pt-1 text-[9px] text-muted">0{index + 1}</span>{link.label}
          </Link>
        ))}
        <Link className="mt-3 flex justify-center rounded-[10px] border-0 bg-accent px-2.5 py-4 text-sm font-bold text-[#11130b]" href="/contact" onClick={() => setIsOpen(false)}>Let&apos;s work together</Link>
      </div>
    </header>
  );
}
