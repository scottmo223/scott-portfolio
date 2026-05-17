import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes — Scott Morales",
  description:
    "Writing from Scott Morales — engineering, entrepreneurship, music, and the in-between.",
};

type Note = {
  slug: string;
  title: string;
  blurb: string;
  status: "published" | "planned";
};

const notes: Note[] = [
  {
    slug: "efmp-paper-to-cloud",
    title: "Building the Army E-EFMP System: From Paper to the Cloud",
    blurb:
      "What it actually takes to move a program serving 1,000+ military families off paper — and why the workflows mattered more than the stack.",
    status: "published",
  },
  {
    slug: "three-years-running-an-agency",
    title: "What I've Learned After 3 Years Running a Dev Agency",
    blurb: "Vantage Method, the parts they don't tell you on Twitter.",
    status: "published",
  },
  {
    slug: "mcp-servers-for-business-automation",
    title: "Building MCP Servers for Business Automation in 2026",
    blurb:
      "How Model Context Protocol changes what an AI agent can safely do inside a business.",
    status: "published",
  },
];

export default function Notes() {
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <h1>Notes</h1>
      <p>Working notes and longer essays. New posts land here first.</p>

      <ul className="not-prose mt-8 space-y-6">
        {notes.map((n) => {
          const card = (
            <>
              <div className="text-xs uppercase tracking-wider opacity-60">
                {n.status === "published" ? "Published" : "Planned"}
              </div>
              <h2 className="mt-1 text-lg font-semibold">{n.title}</h2>
              <p className="mt-2 text-sm opacity-80">{n.blurb}</p>
            </>
          );

          return (
            <li key={n.slug}>
              {n.status === "published" ? (
                <Link
                  href={`/notes/${n.slug}`}
                  className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:border-teal-400 transition"
                >
                  {card}
                </Link>
              ) : (
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 opacity-70">
                  {card}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
