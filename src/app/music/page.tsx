import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music — Scott Morales | Fellowship Piano, ScottMo, Drums",
  description:
    "The music side of Scott Morales — Fellowship Piano on Spotify, ScottMo experiments, and drumming on Instagram.",
  alternates: { canonical: "/music" },
};

const BAR_COUNT = 64;

// Deterministic so server and client render identically (no hydration drift).
const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
  const t = i / (BAR_COUNT - 1);
  const peak = 26 + 74 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.5));
  const duration = 0.7 + (i % 7) * 0.13;
  const delay = -((i * 0.137) % 1.6); // negative → bars start mid-cycle, staggered
  const hue = Math.round(172 - t * 132); // teal → amber sweep
  return { peak, duration, delay, hue };
});

export default function Music() {
  return (
    <div className="relative -mx-4 -my-10 min-h-screen overflow-hidden bg-[#070709] text-neutral-300 sm:-mx-32">
      {/* drifting mood lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="slow-drift absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-amber-500/[0.10] blur-[140px] [animation:slow-drift_18s_ease-in-out_infinite]" />
        <div className="slow-drift absolute right-[-10rem] top-1/4 h-[38rem] w-[38rem] rounded-full bg-teal-500/[0.11] blur-[150px] [animation:slow-drift_22s_ease-in-out_infinite_reverse]" />
        <div className="slow-drift absolute bottom-[-8rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-rose-500/[0.08] blur-[140px] [animation:slow-drift_26s_ease-in-out_infinite]" />
      </div>

      {/* ---- HERO: the page moves before it speaks ---- */}
      <section className="relative flex min-h-[78vh] flex-col justify-end px-4 pb-0 sm:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-neutral-500">
            Scott Morales
          </p>
          <h1 className="mt-4 text-[18vw] font-semibold leading-[0.82] tracking-tighter text-white sm:text-[13rem]">
            Music
          </h1>
          <p className="mb-10 mt-6 max-w-md text-lg text-neutral-400">
            Code by day. This is the other half.
          </p>

          {/* the equalizer — the dominant visual */}
          <div
            aria-hidden
            className="flex h-[34vh] min-h-[180px] w-full items-end gap-[2px] sm:gap-1"
          >
            {bars.map((b, i) => (
              <div
                key={i}
                className="eq-bar flex-1 origin-bottom rounded-t-sm"
                style={{
                  height: `${b.peak}%`,
                  background: `linear-gradient(to top, hsl(${b.hue} 80% 55% / 0.85), hsl(${b.hue} 90% 65% / 0.15))`,
                  animation: `eq-bar ${b.duration}s ease-in-out ${b.delay}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ---- THREE MOODS ---- */}
      <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-12">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 lg:grid-cols-[1.4fr_1fr]">
          {/* Fellowship Piano — large, leads with the player */}
          <div className="group relative bg-[#0b0b10] p-7 transition-colors sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/[0.07] to-transparent" />
            <div className="relative">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400/80">
                  01 / the quiet one
                </p>
                <span className="font-mono text-xs text-neutral-600">
                  Spotify
                </span>
              </div>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Fellowship Piano
              </h2>
              <p className="mt-3 text-neutral-400">
                Hymns, stripped to the piano.
              </p>
              <div className="mt-7 overflow-hidden rounded-xl ring-1 ring-white/10">
                <iframe
                  title="Fellowship Piano on Spotify"
                  src="https://open.spotify.com/embed/artist/1HQfUPJBTYF4uUjq8aAHHW?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ScottMo + Drums stacked */}
          <div className="grid grid-rows-2 gap-px bg-white/10">
            <a
              href="https://www.instagram.com/scottmomusic"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden bg-[#0b0b10] p-7 transition-colors hover:bg-[#0e0e16] sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/[0.08] to-transparent" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-400/80">
                  02 / the experiments
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  ScottMo
                </h2>
                <p className="mt-3 text-neutral-400">
                  Beats, layers, half-finished ideas.
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 font-mono text-sm text-teal-300">
                @scottmomusic
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </span>
            </a>

            <a
              href="https://www.instagram.com/scottmoralesdrum"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden bg-[#0b0b10] p-7 transition-colors hover:bg-[#0e0e16] sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-500/[0.08] to-transparent" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-400/80">
                  03 / the loud one
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  Drums
                </h2>
                <p className="mt-3 text-neutral-400">
                  Groove of the week, full volume.
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 font-mono text-sm text-rose-300">
                @scottmoralesdrum
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
