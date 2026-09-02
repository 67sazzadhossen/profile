import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Expertise", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const email = "sazzadhossen010@gmail.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#08090a] px-[clamp(24px,7vw,120px)] pt-[clamp(70px,8vw,120px)] text-foreground">
      <div className="relative z-1 mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-[1.35fr_.65fr] gap-[clamp(60px,10vw,170px)] max-[760px]:grid-cols-1">
          <div>
            <Link
              className="inline-flex items-center gap-3 text-xl font-bold tracking-[-.04em]"
              href="/"
              aria-label="Sazzad Hossen — back to home"
            >
              <span className="relative size-12 shrink-0" aria-hidden="true">
                <Image
                  className="object-contain"
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="48px"
                />
              </span>
              Sazzad Hossen
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            </Link>
            <p className="mt-8 max-w-[560px] text-[clamp(1.6rem,3vw,3.5rem)] leading-[1.08] tracking-[-.045em] text-[#d9d7d0]">
              Backend systems engineered for{" "}
              <em className="font-normal text-accent [font-family:Georgia,serif]">
                real-world use.
              </em>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-line pt-6">
            <div>
              <p className="mb-5 text-[9px] tracking-[.18em] text-muted uppercase">
                Navigate
              </p>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="text-sm text-[#cfcdc6] transition-colors hover:text-accent"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <p className="mb-5 text-[9px] tracking-[.18em] text-muted uppercase">
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-sm text-[#cfcdc6] transition-colors hover:text-accent"
                    href="https://drive.google.com/file/d/1sNrU8tzpT8kdMUlwZHmZd0lbTPnB4zmR/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download resume ↓
                  </a>
                </li>
                <li>
                  <Link
                    className="text-sm text-[#cfcdc6] transition-colors hover:text-accent"
                    href={`mailto:${email}`}
                  >
                    Email ↗
                  </Link>
                </li>
                <li>
                  <a
                    className="text-sm text-[#cfcdc6] transition-colors hover:text-accent"
                    href="https://github.com/67sazzadhossen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#cfcdc6] transition-colors hover:text-accent"
                    href="https://www.linkedin.com/in/67sazzadhossen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-[#cfcdc6] transition-colors hover:text-accent"
                    href="/works"
                  >
                    All works ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(70px,10vw,150px)] flex items-center justify-between gap-8 border-t border-line py-7 text-[9px] tracking-[.14em] text-muted uppercase max-[620px]:flex-col max-[620px]:items-start">
          <p>© 2026 Sazzad Hossen. All rights reserved.</p>
          <p>Software Engineer / Bangladesh</p>
          <Link className="transition-colors hover:text-accent" href="/">
            Back to top ↑
          </Link>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-[-.04em] bottom-[-.22em] text-[clamp(8rem,23vw,28rem)] leading-none font-bold tracking-[-.1em] text-white/[.018]"
        aria-hidden="true"
      >
        SAZZAD
      </div>
    </footer>
  );
}
