import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vantage Method — Web Development & Marketing Agency",
  description:
    "Vantage Method is a web development and marketing agency co-founded by Scott Morales — websites, CRM setup, automation, and lead-to-customer systems for small businesses.",
  alternates: { canonical: "/vantage-method" },
};

const capabilities = [
  { k: "Web", t: "Websites that load fast and convert" },
  { k: "CRM", t: "Custom setups — built and cleaned up" },
  { k: "Automation", t: "The repetitive manual work, gone" },
  { k: "Funnels", t: "Lead capture, email & SMS sequences" },
];

const tiers = [
  {
    n: "01",
    label: "Foundation",
    line: "Site, CRM, and the lead-capture plumbing.",
    accent: "teal",
    eyebrow: "text-teal-400/80",
    wash: "from-teal-500/[0.08]",
  },
  {
    n: "02",
    label: "Growth",
    line: "Automation, content, ongoing optimization.",
    accent: "amber",
    eyebrow: "text-amber-400/80",
    wash: "from-amber-500/[0.08]",
  },
  {
    n: "03",
    label: "Custom",
    line: "Bespoke software when off-the-shelf isn't enough.",
    accent: "rose",
    eyebrow: "text-rose-400/80",
    wash: "from-rose-500/[0.08]",
  },
];

export default function VantageMethod() {
  return (
    <div className="relative -mx-4 -my-10 min-h-screen overflow-hidden bg-[#070709] text-neutral-300 sm:-mx-32">
      {/* drifting ambient lighting — shared system with /music */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="slow-drift absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-teal-500/[0.10] blur-[140px] [animation:slow-drift_20s_ease-in-out_infinite]" />
        <div className="slow-drift absolute right-[-10rem] top-1/3 h-[38rem] w-[38rem] rounded-full bg-indigo-500/[0.09] blur-[150px] [animation:slow-drift_24s_ease-in-out_infinite_reverse]" />
        <div className="slow-drift absolute bottom-[-8rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-amber-500/[0.06] blur-[140px] [animation:slow-drift_28s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* ---- HERO ---- */}
      <section className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.45em] text-neutral-500">
          Agency
        </p>
        <h1 className="mt-5 text-[15vw] font-semibold leading-[0.85] tracking-tighter text-white sm:text-[9rem]">
          Vantage
          <br />
          <span className="text-neutral-500">Method</span>
        </h1>
        <p className="mt-8 max-w-lg text-xl text-neutral-300">
          We turn leads into customers.
        </p>
        <p className="mt-2 max-w-lg text-neutral-500">
          Built and run by people who&apos;ve shipped real software.
        </p>

        {/* animated conversion pipeline */}
        <div className="mt-14 flex max-w-2xl items-center gap-3 sm:gap-5">
          {["Lead", "Nurture", "Customer"].map((node, i) => (
            <div key={node} className="flex flex-1 items-center gap-3 sm:gap-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                <span
                  className="node-pulse mr-2 inline-block h-2 w-2 rounded-full bg-teal-400 align-middle"
                  style={{ animation: `node-pulse 2.4s ease-in-out ${i * 0.6}s infinite` }}
                />
                {node}
              </span>
              {i < 2 && (
                <span
                  className="beam-flow h-px flex-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(45,212,191,0.7), transparent)",
                    backgroundSize: "200% 100%",
                    animation: `beam-flow 2.8s linear ${i * 0.4}s infinite`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="https://vantagemethod.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Check it out
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ---- WHAT WE DO ---- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          What we do
        </p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div
              key={c.k}
              className="group relative bg-[#0b0b10] p-7 transition-colors hover:bg-[#0e0e16]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                {c.k}
              </p>
              <p className="mt-4 text-lg leading-snug text-neutral-200">
                {c.t}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- WHO IT'S FOR ---- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-28 sm:px-12">
        <p className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          For service businesses tired of generic website-builder agencies —
          <span className="text-neutral-500">
            {" "}
            who want the rigor of a real software team.
          </span>
        </p>
      </section>

      {/* ---- HOW WE WORK ---- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-28 sm:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          How we work
        </p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="group relative bg-[#0b0b10] p-8 transition-colors hover:bg-[#0e0e16] sm:p-10"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tier.wash} to-transparent`}
              />
              <div className="relative">
                <p
                  className={`font-mono text-xs uppercase tracking-[0.3em] ${tier.eyebrow}`}
                >
                  {tier.n} / {tier.label}
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  {tier.label}
                </h2>
                <p className="mt-3 text-neutral-400">{tier.line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="relative mx-auto max-w-6xl px-4 pb-28 sm:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent p-10 ring-1 ring-white/10 sm:p-16">
          <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-5xl">
            Let&apos;s turn your leads into customers.
          </h2>
          <Link
            href="https://vantagemethod.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Check it out
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
