import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Building MCP Servers for Business Automation in 2026 — Scott Morales",
  description:
    "How Model Context Protocol changes what an AI agent can safely do inside a business — and why the hard engineering is the permission boundary, not the model.",
  alternates: { canonical: "/notes/mcp-servers-for-business-automation" },
};

export default function McpServersForBusinessAutomation() {
  return (
    <article className="prose dark:prose-invert max-w-3xl">
      <p className="text-sm uppercase tracking-wider opacity-60">
        Notes · Engineering
      </p>
      <h1>Building MCP Servers for Business Automation in 2026</h1>

      <p>
        For two years the interesting question about AI in a business was
        &quot;what can it say?&quot; In 2026 the interesting question is
        &quot;what can it safely do?&quot;
      </p>

      <h2>What MCP actually is, without the hype</h2>
      <p>
        Model Context Protocol is a standard way to hand an AI agent a set of
        tools and data sources it is allowed to use. Strip away the branding and
        it is an API contract for agents: here are the actions, here are their
        inputs, here is what comes back. The useful part is standardization:
        every agent and every tool now speak the same shape so you stop writing
        glue for each model.
      </p>

      <h2>Why this matters for a real business</h2>
      <p>
        A chatbot that can summarize your CRM is a demo. An agent that can read
        a lead, decide it is qualified, create the deal, and schedule the
        follow-up — inside the systems you already run — is automation.
        It is the same model in both cases, but what changed is reach. MCP is what
        gives an agent that reach in a controlled, inspectable way instead of a
        pile of brittle scripts.
      </p>

      <h2>The hard part is the boundary, not the model</h2>
      <p>
        Here is the lesson I keep relearning, and it is the same one the{" "}
        <Link href="/work/efmp">E-EFMP work</Link> taught me: the model is the
        easy part. The engineering is the boundary around it. Every tool you
        expose is a thing an agent can do at three in the morning with no human
        watching. So the real design work is permissions, scopes, dry-run
        modes, audit logs, and the question &quot;what is the worst this tool
        can do if the model is wrong?&quot; for every single endpoint. A good
        MCP server is mostly a careful answer to that question.
      </p>

      <h2>What good ones look like</h2>
      <p>
        The MCP servers I am proud of share a few traits. Tools are narrow and
        named for intent, not for the underlying table. Destructive actions
        require explicit confirmation or a separate elevated scope. Everything
        the agent does is logged in a form a human can actually read back. And
        the surface area is small on purpose — fewer tools, each one
        trustworthy, beats a kitchen sink the agent half-understands.
      </p>

      <h2>Where this goes</h2>
      <p>
        The businesses that win with this will not be the ones with the
        smartest model. They will be the ones who modeled their own operations
        clearly enough that an agent can act on them without breaking anything.
        That is unglamorous work — state, permissions, honest interfaces —
        and it is the same work that has mattered the whole time. AI just
        made it urgent.
      </p>

      <hr />
      <p>
        I write more about this kind of infrastructure on the{" "}
        <Link href="/work">Work page</Link>, or head back to{" "}
        <Link href="/notes">all notes</Link>.
      </p>
    </article>
  );
}
