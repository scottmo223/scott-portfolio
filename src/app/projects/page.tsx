import Link from "next/link";

export default function Projects() {
  return (
    <div className="prose dark:prose-invert">
      <h1>
        Projects
      </h1>
      <Link href="/projects/minesweeper">Play my JS Minesweeper clone!</Link >
    </div>);
}