import Link from "next/link";
import TypingRoles from "@/components/typing-roles";

const hubs: { href: string; label: string; blurb: string }[] = [
  {
    href: "/work",
    label: "Work",
    blurb:
      "Case studies — Army E-EFMP, agency projects, MCP infrastructure.",
  },
  {
    href: "/vantage-method",
    label: "Vantage Method",
    blurb: "The web + marketing agency I co-run.",
  },
  {
    href: "/music",
    label: "Music",
    blurb: "Fellowship Piano, ScottMo, and drums.",
  },
  {
    href: "/about",
    label: "About",
    blurb: "Origin story, jiu jitsu, breakfast tacos.",
  },
  {
    href: "/notes",
    label: "Notes",
    blurb: "Writing on engineering and entrepreneurship.",
  },
  {
    href: "/contact",
    label: "Contact",
    blurb: "Best ways to reach me.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] opacity-60">
          <TypingRoles />
        </p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-semibold leading-tight">
          Scott Morales
        </h1>
        <p className="mt-6 text-lg opacity-90">
          I build software that ships — from a U.S. Army digital
          transformation that moved 1,000+ military families off paper, to the
          agency work and the side experiments. I also make music.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center rounded-full bg-foreground text-background px-5 h-11 hover:opacity-90 transition"
          >
            See my work
          </Link>
          <Link
            href="/music"
            className="inline-flex items-center rounded-full border border-black/15 dark:border-white/20 px-5 h-11 hover:border-teal-400 transition"
          >
            Or hear my music →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hubs.map((h) => (
          <Link
            key={h.href}
            href={h.href}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:border-teal-400 transition"
          >
            <div className="text-lg font-semibold">{h.label}</div>
            <p className="mt-2 text-sm opacity-80">{h.blurb}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
