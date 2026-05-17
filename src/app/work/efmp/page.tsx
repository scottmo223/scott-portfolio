import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Army E-EFMP Case Study — Scott Morales",
  description:
    "How the U.S. Army's Exceptional Family Member Program went from paper to cloud — built from scratch by a three-developer team. A case study from Scott Morales.",
};

export default function EfmpCaseStudy() {
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <p className="text-sm uppercase tracking-wider opacity-60">Case study</p>
      <h1>U.S. Army E-EFMP — From Paper to the Cloud</h1>
      <p>
        The Exceptional Family Member Program (EFMP) supports Army families
        with members who have special medical or educational needs. Before
        E-EFMP, the workflow was largely paper-based — forms had to be
        physically re-submitted at every new installation, approvals moved by
        mail, and a family&apos;s records didn&apos;t travel with them.
      </p>

      <h2>The challenge</h2>
      <p>
        Replace a fragmented, paper-driven program with a single secure system
        that families, providers, and coordinators could rely on across Army
        installations worldwide — and automate the tedious approval chains that
        used to take weeks of mailed paperwork.
      </p>

      <h2>The team</h2>
      <p>
        Three developers, building the entire platform from scratch. We all
        wore every hat — there was no &quot;frontend person&quot; and
        &quot;backend person,&quot; we each owned features end to end, page by
        page, workflow by workflow.
      </p>

      <h2>The solution</h2>
      <ul>
        <li>
          Cloud-saved enrollment and screening forms — no more re-submitting
          paper at every PCS move
        </li>
        <li>
          Status-driven workflows for packets, families, providers, and
          policies, so every stakeholder could see exactly where a case stood
        </li>
        <li>
          Automated provider and doctor approval routing — replacing
          mailed paperwork with in-app review and sign-off
        </li>
        <li>
          Directory listings for every installation, wired up to the Army&apos;s
          existing APIs
        </li>
        <li>
          An in-app community forum with per-installation chat rooms, so
          families could talk to each other and get local updates
        </li>
        <li>Mobile-accessible via website and iOS / Android apps</li>
      </ul>

      <h2>My role</h2>
      <p>
        One of the three developers who built the whole thing from the ground
        up. Concretely, I:
      </p>
      <ul>
        <li>Built pages and their workflows end to end</li>
        <li>
          Designed and implemented the status models for packets, people,
          providers, and policies, and the automation that moved them through
          their lifecycles
        </li>
        <li>
          Streamlined the tedious manual work — especially getting provider
          and doctor approvals without anyone mailing a form
        </li>
        <li>
          Set up the directory listings for all installations against the
          Army&apos;s APIs
        </li>
        <li>
          Helped build the in-app community forum and installation chat rooms
        </li>
      </ul>

      <p className="text-sm opacity-70">
        <em>
          Specifics on internal architecture and the exact technologies are
          kept deliberately high-level here. The work required a security
          clearance and the program was conservative about disclosing what was
          being built and how — so this stays at the &quot;what we delivered&quot;
          level by design, not detail by detail.
        </em>
      </p>

      <hr />
      <p className="text-sm opacity-70">
        Public references:{" "}
        <a
          href="https://www.army.mil/article/260448/new_e_efmp_system_supports_army_families_with_special_needs_members"
          target="_blank"
          rel="noopener noreferrer"
        >
          army.mil announcement
        </a>
        .
      </p>

      <p>
        <Link href="/work">← Back to Work</Link>
      </p>
    </article>
  );
}
