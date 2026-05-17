import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Scott Morales | Case Studies & Projects",
  description:
    "Selected case studies and projects from Scott Morales — including the U.S. Army E-EFMP digital transformation, Vantage Method client work, and AI products built for SherpasAI.",
  alternates: { canonical: "/work" },
};

type WorkItem = {
  slug: string;
  title: string;
  outcome: string;
  stack: string[];
  category: "Web App" | "Automation" | "Agency" | "AI";
  href: string;
  external?: boolean;
};

const work: WorkItem[] = [
  {
    slug: "efmp",
    title: "U.S. Army E-EFMP — Paper to Cloud",
    outcome:
      "1 of 3 devs who built the Exceptional Family Member Program platform from scratch — 1,000+ families in pilot.",
    stack: ["Cleared work", "Secure Web", "Workflow automation"],
    category: "Web App",
    href: "/work/efmp",
  },
  {
    slug: "vantage-method",
    title: "Vantage Method — Web + Marketing Agency",
    outcome:
      "Co-founded agency delivering websites, CRM setups, automation, and marketing for small businesses.",
    stack: ["Next.js", "Automation"],
    category: "Agency",
    href: "/vantage-method",
  },
  {
    slug: "ai-sherpas",
    title: "AI Sherpas — SherpasAI",
    outcome:
      "Built AI assistants for SherpasAI: Social Butterfly for social media brand building & content, and the CEO Data Sherpa for executive business intelligence.",
    stack: ["AI agents", "Automation"],
    category: "AI",
    href: "https://sherpasai.com",
    external: true,
  },
];

export default function WorkIndex() {
  return (
    <div className="prose dark:prose-invert max-w-full">
      <h1>Work</h1>
      <p>
        Selected projects — the story, the stack, and what shipped. The E-EFMP
        case study is the one I&apos;m proudest of.
      </p>

      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
        {work.map((w) => (
          <Link
            key={w.slug}
            href={w.href}
            {...(w.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:border-teal-400 transition"
          >
            <div className="text-xs uppercase tracking-wider opacity-60">
              {w.category}
            </div>
            <h2 className="mt-2 text-lg font-semibold">{w.title}</h2>
            <p className="mt-2 text-sm opacity-80">{w.outcome}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {w.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
