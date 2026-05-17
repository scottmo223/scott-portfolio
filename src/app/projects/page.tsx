import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Stuff — Scott Morales",
  description: "Side experiments and small games from Scott Morales.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsFunStuff() {
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <h1>Fun stuff</h1>
      <p>
        Looking for the serious work? That lives on{" "}
        <Link href="/work">/work</Link>. This page is for the small
        experiments.
      </p>
      <ul>
        <li>
          <Link href="/projects/minesweeper">
            Play my JS Minesweeper clone
          </Link>{" "}
          — built with my son.
        </li>
      </ul>
    </div>
  );
}
