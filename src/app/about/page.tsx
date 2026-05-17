import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Scott Morales — Developer, Entrepreneur, Musician",
  description:
    "The story behind Scott Morales — East Texas roots, a self-taught path into software and a WGU Computer Science degree, founding Vantage Method, the Army E-EFMP project, and music.",
};

export default function About() {
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <h1>Who is Scott Morales?</h1>
      <p>
        Hey, I&apos;m Scott. The short version: I build software, I run a small
        agency, and I make music. The longer version is more fun.
      </p>

      <h2>East Texas roots</h2>
      <p>
        I grew up in East Texas and never really left — it&apos;s home. I&apos;ve
        always been the kid who wanted to know how things worked, whether that
        was a piece of code, a house project, or something in the garage. That
        curiosity is basically the whole story; everything else is just where
        it pointed.
      </p>

      <h2>The technical journey</h2>
      <p>
        I came up the self-taught way first — building real things before I had
        a piece of paper that said I could. I later earned my Computer Science
        degree from WGU, which sharpened the fundamentals under the instinct.
        The combination is the part I value most: I learned by shipping, then
        backfilled the theory.
      </p>

      <h2>The Army project</h2>
      <p>
        For a few years I was one of three developers who built the U.S.
        Army&apos;s E-EFMP system from scratch — the platform that moved the
        Exceptional Family Member Program off paper for 1,000+ military
        families in its pilot. We each wore every hat: pages, workflows,
        status models, automating approvals that used to move by mail,
        installation directory listings, and an in-app community forum so
        families could actually talk to each other. It needed a security
        clearance and a stack of security training, and it&apos;s still the work
        I&apos;m proudest of.{" "}
        <Link href="/work/efmp">Read the case study →</Link>
      </p>

      <h2>The entrepreneurship chapter</h2>
      <p>
        Alongside the engineering, I co-founded{" "}
        <Link href="/vantage-method">Vantage Method</Link>, a web development
        and marketing agency that helps small businesses turn leads into
        customers. I&apos;ve also co-founded Wescot Solutions and ran UnDootie,
        a local pet-service startup. Building the product is one skill; getting
        people to actually use and pay for it is a completely different one,
        and I&apos;ve gotten to learn both the hard way.
      </p>

      <h2>Music as identity</h2>
      <p>
        Music isn&apos;t a side note for me — it&apos;s a whole other room in
        the house. Fellowship Piano is quiet, hymn-rooted piano. ScottMo is
        where I mess with production ideas. And I drum. One of my favorite
        projects is a Minesweeper clone I built with my son, which lives over
        in the <Link href="/projects">fun stuff</Link> corner.{" "}
        <Link href="/music">Hear the music →</Link>
      </p>

      <h2>Right now</h2>
      <p>
        Lately I&apos;m deep in AI infrastructure — building MCP servers so
        agents can safely do real work inside a business — plus some Swift /
        iOS and a steady diet of &quot;what can this new model actually do.&quot;
        I like being on the edge where the tooling is still a little
        uncomfortable.
      </p>

      <h2>The human stuff</h2>
      <p>
        I&apos;m a dad in a family of five, a jiu jitsu blue belt, and a firm
        believer that breakfast tacos and 90s country music are load-bearing
        parts of a good week. If you need someone who can solve problems, build
        things from scratch, or just talk shop over coffee — I&apos;m your guy.
      </p>

      <p className="not-prose mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-foreground text-background px-5 h-11"
        >
          Get in touch →
        </Link>
      </p>
    </article>
  );
}
