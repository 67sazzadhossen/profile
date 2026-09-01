import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-placeholder" id="home" aria-label="Introduction">
          <div className="ambient ambient-one" /><div className="ambient ambient-two" />
          <p>Creative developer · Portfolio 2026</p>
          <h1>Digital experiences,<br /> built to <em>move.</em></h1>
          <span className="build-note">Hero experience coming next</span>
        </section>
        <section className="page-anchor" id="about" aria-label="About" />
        <section className="page-anchor" id="work" aria-label="Selected work" />
        <section className="page-anchor" id="skills" aria-label="Skills" />
        <section className="page-anchor" id="contact" aria-label="Contact" />
      </main>
    </>
  );
}
