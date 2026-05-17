import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Building the Army E-EFMP System: From Paper to the Cloud — Scott Morales",
  description:
    "What it actually takes to move a program serving 1,000+ military families off paper — workflows, automated approvals, and a three-developer team that wore every hat.",
  alternates: { canonical: "/notes/efmp-paper-to-cloud" },
};

export default function EfmpPaperToCloud() {
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <p className="text-sm uppercase tracking-wider opacity-60">
        Notes · Engineering
      </p>
      <h1>Building the Army E-EFMP System: From Paper to the Cloud</h1>

      <p>
        Some projects are interesting because of the technology. This one was
        interesting because of the paper it replaced.
      </p>

      <h2>The program nobody sees until they need it</h2>
      <p>
        The Exceptional Family Member Program supports Army families whose
        members have special medical or educational needs. It is exactly the
        kind of program that has to work, quietly, for people who already have
        a lot on their plate. For years it ran on paper: enrollment forms,
        screening packets, provider approvals — physically re-submitted every
        time a family moved to a new installation.
      </p>
      <p>
        If you have ever moved households, imagine doing it every couple of
        years and having to re-prove your child&apos;s medical needs by mail
        each time. That was the baseline we were replacing.
      </p>

      <h2>Three developers, every hat</h2>
      <p>
        We were a team of three, building the whole platform from scratch.
        There was no &quot;the frontend person&quot; or &quot;the backend
        person.&quot; You owned a feature from the database to the button, and
        the next week you owned a different one. It is the kind of constraint
        that sounds stressful and is actually clarifying — there is nowhere to
        hand off a problem, so you just learn the whole thing.
      </p>

      <h2>The real work was the workflows</h2>
      <p>
        The hard part of E-EFMP was never &quot;render a form.&quot; It was
        modeling the lifecycle of a packet, a family, a provider, and a policy
        — and the states each of them moves through — so that every
        stakeholder could see exactly where a case stood without calling
        anyone. Once those status models were right, the automation followed:
        approvals that used to travel by mail became in-app review and
        sign-off, and weeks of waiting collapsed into the time it takes someone
        to click.
      </p>
      <p>
        We also wired installation directory listings to the Army&apos;s
        existing APIs, and built an in-app community forum with
        per-installation chat rooms so families could actually talk to each
        other and get local updates — the social glue a paper process never
        had.
      </p>

      <h2>What I&apos;d tell another engineer</h2>
      <p>
        The technology mattered less than getting the state machine honest. If
        the statuses reflect reality, automation is almost boring to add. If
        they don&apos;t, no amount of clever code saves you. That is the lesson
        I have carried into everything since.
      </p>

      <p className="text-sm opacity-70">
        <em>
          I keep the architecture and exact stack vague on purpose — the work
          required a security clearance and the program was conservative about
          what got disclosed. This is the &quot;what we delivered&quot;
          version, by design.
        </em>
      </p>

      <hr />
      <p>
        See the structured case study on the{" "}
        <Link href="/work/efmp">Work page</Link>, or head back to{" "}
        <Link href="/notes">all notes</Link>.
      </p>
    </article>
  );
}
