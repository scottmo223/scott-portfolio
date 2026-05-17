import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What I've Learned After 3 Years Running a Dev Agency — Scott Morales",
  description:
    "Three years co-running Vantage Method — the parts they don't tell you on Twitter: scope, retainers, communication, and why engineering rigor is the real differentiator.",
};

export default function ThreeYearsRunningAnAgency() {
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <p className="text-sm uppercase tracking-wider opacity-60">
        Notes · Entrepreneurship
      </p>
      <h1>What I&apos;ve Learned After 3 Years Running a Dev Agency</h1>

      <p>
        The Twitter version of running an agency is &quot;productized
        services,&quot; a tidy funnel, and revenue screenshots. The real version
        is quieter, slower, and mostly about expectations. Here is what three
        years of Vantage Method actually taught me.
      </p>

      <h2>The work that wins clients isn&apos;t the code</h2>
      <p>
        I came in assuming the engineering would be the hard part. It almost
        never is. Clients do not buy clean architecture — they buy the feeling
        that someone competent is going to make their problem go away. The
        agencies that lose are usually shipping fine code while communicating
        badly. Code is table stakes. Confidence, clarity, and follow-through are
        the product.
      </p>

      <h2>Scope is the whole game</h2>
      <p>
        Every painful project I have been part of was a scope failure before it
        was anything else. Not a technical one — an agreement one. &quot;Just a
        small change&quot; is the most expensive sentence in this business,
        because it is never one change and it is never small. The skill that
        separated good years from bad ones was learning to say, kindly and
        early, &quot;that&apos;s a new phase, here&apos;s what it costs,&quot;
        instead of absorbing it and resenting it later.
      </p>

      <h2>Retainers beat heroics</h2>
      <p>
        Project work is a treadmill: you are only as stable as next month&apos;s
        pipeline, and you spend your best energy selling instead of building.
        The shift that changed the business was moving clients onto ongoing
        relationships — site, CRM, automation, the stuff that needs tending
        anyway. Predictable revenue does not just pay the bills more calmly. It
        lets you do better work, because you are optimizing for the client
        still being here in a year instead of for the invoice in front of you.
      </p>

      <h2>Engineering rigor is the actual differentiator</h2>
      <p>
        Most small businesses have only ever worked with template shops and
        marketing freelancers. When they meet a team that treats their site and
        their lead flow like a system — versioned, monitored, debuggable —
        it is genuinely novel to them. We do not win by being the cheapest or
        the flashiest. We win by being the people who shipped real software and
        bring that discipline to a $4k website. That gap is the whole pitch,
        and it is on the{" "}
        <Link href="https://vantagemethod.com" target="_blank">Vantage Method</Link> page on purpose.
      </p>

      <h2>The unglamorous parts nobody posts about</h2>
      <p>
        Chasing invoices. Re-explaining the same decision three times. The
        client who goes dark for two weeks and then needs it &quot;by
        Friday.&quot; Writing the same onboarding email enough times that you
        finally automate it. None of this shows up in the highlight reel, and
        all of it is the job. Getting comfortable with the boring operational
        layer is what makes the creative layer sustainable.
      </p>

      <h2>What I&apos;d tell someone starting one</h2>
      <p>
        Pick a narrow kind of client and get unreasonably good at their
        specific problem. Charge in a way that survives a slow month. Put
        everything in writing — not because people are dishonest, but because
        memory is. And treat the relationship as the deliverable; the website
        is just the part you can screenshot. The technology was never the hard
        part. It was learning that the business is mostly people, and people
        run on clarity.
      </p>

      <hr />
      <p>
        More on the agency itself on the{" "}
        <Link href="/vantage-method">Vantage Method</Link> page, or head back to{" "}
        <Link href="/notes">all notes</Link>.
      </p>
    </article>
  );
}
