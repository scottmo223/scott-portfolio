import type { Metadata } from "next";
import Link from "next/link";
import EvasiveContactButton from "@/components/evasive-contact-button";

export const metadata: Metadata = {
  title: "About Scott Morales — Developer, Entrepreneur, Musician",
  description:
    "The story behind Scott Morales — East Texas roots, a self-taught path into software and a WGU Computer Science degree, founding Vantage Method, the Army E-EFMP project, and music.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <h1>Who is Scott Morales?</h1>
      <p>
        The short version: I build software, I run a small
        agency, and I make music.
      </p>

      <h2>South Texas roots</h2>
      <p>
        I grew up in South Texas. I visited East Texas 20 years ago never left. Now it is my home. I have
        always been the kid who wanted to know how things worked, whether that
        was a piece of code, a house project, or something in the garage. That
        curiosity is basically the whole story. Everything else is just where
        it ended up.
      </p>

      <h2>The technical journey</h2>
      <p>
        I came up the self-taught way first — building real things before I had
        a piece of paper that said I could. I later earned a Bachelors in Computer Science, 
        which sharpened the fundamentals under the instinct.
        The combination is the part I value most: I learned by shipping, then
        backfilled the theory.
      </p>

      <h2>The Army project</h2>
      <p>
        For a few years I was one of three developers who built the U.S.
        Army's E-EFMP system from scratch — the platform that moved the
        Exceptional Family Member Program off paper for thousands of military
        families in its pilot. We each wore every hat: pages, workflows,
        status models, automating approvals that used to move by mail,
        installation directory listings, and an in-app community forum so
        families could easily talk to each other. It needed a security
        clearance and a stack of security training, and it's still work I'm proud of contributing to.{" "}
        <Link href="/work/efmp">Read the case study →</Link>
      </p>

      <h2>The entrepreneurship chapter</h2>
      <p>
        Alongside the engineering, I co-founded{" "}
        <Link href="/vantage-method">Vantage Method</Link>, a software development
        and marketing agency that helps businesses turn ideas into products and leads into
        customers. I've also co-founded Wescot Solutions and ran UnDootie,
        a local pet-service startup. Building the product is one skill, getting
        people to actually use and pay for it is a completely different one.
        I'm only good at one of those.
      </p>

      <h2>Music as identity</h2>
      <p>
        Music isn't a side note for me — it's a whole other room in
        the house. Fellowship Piano is quiet, relaxing piano. ScottMo is
        where I mess with production ideas and write stupid songs. And I drum. 
        <Link href="/music">Hear the music →</Link>
      </p>
        
       <h2>Other stuff</h2> 
       <p> 
        One of my favorite
        projects is a Minesweeper clone I built with my son. He is really into learning to code and build games. That lives over
        in the <Link href="/projects">fun stuff</Link> corner.{" "}
      </p>

      <h2>Right now</h2>
      <p>
        Lately I'm deep in AI infrastructure. I've been building MCP servers, chat bots, vector databases, custom agents. 
        And then I've been building iOS apps and getting into React Native and Swift. Along with trying to stay up to date
        on the latest and greatest in AI and software development.
        I like being on the edge where the tooling is still a little
        uncomfortable.
      </p>

      <h2>The human stuff</h2>
      <p>
        I'm a dad in a family of five, a jiu jitsu blue belt, and a firm
        believer that breakfast tacos and 90s country music are load-bearing
        parts of a good week. If you need someone who can solve problems, build
        things from scratch, or just talk shop over coffee — don't hit me up because I'm maxed out and I can't say no.
      </p>

      <EvasiveContactButton />
    </article>
  );
}
