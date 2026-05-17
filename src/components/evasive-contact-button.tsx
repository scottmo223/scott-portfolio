"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// Endless escalating heckles — cycles as you land hits.
const TEASES = [
  "(I did say I was maxed out…)",
  "Lucky shot. Won't happen again.",
  "Okay, you're actually good at this.",
  "One more and I'm gone for real.",
];

const MAX_HITS = 4;
// Shrinks with every successful click, so each hit is harder than the last.
const SCALES = [1, 0.68, 0.44, 0.28];

export default function EvasiveContactButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hits, setHits] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canHover, setCanHover] = useState(true);

  const gameOver = hits >= MAX_HITS;

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      setReducedMotion(motionMq.matches);
      setCanHover(hoverMq.matches);
    };
    sync();
    motionMq.addEventListener("change", sync);
    hoverMq.addEventListener("change", sync);
    return () => {
      motionMq.removeEventListener("change", sync);
      hoverMq.removeEventListener("change", sync);
    };
  }, []);

  // Glide somewhere new — meaningfully far from where it is right now.
  const relocate = useCallback(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const cRect = container.getBoundingClientRect();
    const maxX = Math.max(0, cRect.width - button.offsetWidth);
    const maxY = Math.max(0, cRect.height - button.offsetHeight);

    let nx = 0;
    let ny = 0;
    for (let i = 0; i < 10; i++) {
      nx = Math.random() * maxX;
      ny = Math.random() * maxY;
      if (Math.hypot(nx - pos.x, ny - pos.y) > Math.min(maxX, maxY) / 2) break;
    }
    setPos({ x: nx, y: ny });
  }, [pos]);

  // Hover = it flees (no points). This is what makes it hard to catch.
  const onEnter = () => {
    if (canHover && !gameOver) relocate();
  };

  // A landed click = a hit. Never navigates; shrinks, jumps, counts.
  const onHit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (gameOver) return;
    setHits((h) => h + 1);
    if (hits + 1 < MAX_HITS) relocate();
  };

  const reset = () => {
    setHits(0);
    setPos({ x: 0, y: 0 });
  };

  // Reduced motion: don't torment people who opted out — plain, kind link.
  if (reducedMotion) {
    return (
      <p className="not-prose mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-foreground text-background px-5 h-11"
        >
          Get in touch →
        </Link>
      </p>
    );
  }

  return (
    <div className="not-prose mt-8">
      <div
        ref={containerRef}
        className="relative flex h-40 items-center justify-center"
      >
        {gameOver ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-2xl font-bold tracking-widest text-foreground">
              GAME OVER
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-full border border-foreground/30 px-5 h-11 text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Try again? ↻
            </button>
          </div>
        ) : (
          <Link
            ref={buttonRef}
            href="/contact"
            aria-label="Get in touch"
            onPointerEnter={onEnter}
            onClick={onHit}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${SCALES[hits]})`,
            }}
            className="absolute left-0 top-0 inline-flex items-center rounded-full bg-foreground text-background px-5 h-11 cursor-pointer touch-none select-none transition-transform duration-[900ms] ease-in-out"
          >
            Get in touch →
          </Link>
        )}
      </div>
      <p className="not-prose mt-2 text-sm italic text-foreground/60 min-h-[1.25rem]">
        {gameOver
          ? "Caught it four times and it still escaped. The button wins."
          : TEASES[hits]}
      </p>
    </div>
  );
}
