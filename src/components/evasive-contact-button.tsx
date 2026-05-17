"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// Escalating heckles, one tier per catch. Each tier has several
// interchangeable lines; one is picked at random per catch so repeat
// plays feel varied instead of scripted. TEASES[0] is the pre-catch
// opener — pass the `opener` prop to override just that line.
const TEASES: string[][] = [
  [
    "(I did say I was maxed out…)",
    "Catch the button, earn the email. Those are the rules.",
    "It moves. That's the whole bit. Good luck.",
    "Fair warning: it's faster than it looks.",
    "You can try. It's quicker than your cursor and your deadlines.",
    "This is the part where you realize I'm hard to reach on purpose.",
  ],
  [
    "Lucky shot. Won't happen again.",
    "Beginner's luck. The button's just warming up.",
    "Cute. The button allowed that one.",
    "One down. It's not even trying yet.",
    "Okay, that one was free.",
    "Nice. Now it's actually paying attention.",
  ],
  [
    "Okay, you're actually good at this.",
    "Two? Alright, I'm mildly impressed.",
    "Huh. You've clearly done this before.",
    "Fine — you have a mouse and a dream.",
    "The button respects you a little now.",
    "Okay, this is no longer an accident.",
  ],
  [
    "One more and I'm gone for real.",
    "Last one. The button is sweating.",
    "One to go. It's running out of corners.",
    "Almost. Don't get cocky now.",
    "Final round. The button does not consent to this.",
    "One more hit and you've earned bragging rights.",
  ],
];

const GAME_OVER: string[] = [
  "Caught it four times and it still escaped. The button wins.",
  "Four hits and it bailed anyway. Respect — to the button.",
  "You won the game and lost the email. Poetic.",
  "Impressive. Pointless, but impressive.",
  "The button retired undefeated. You were close.",
  "Congrats, you beat a button and got nothing. Worth it?",
];

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const MAX_HITS = 4;
// Shrinks with every successful click, so each hit is harder than the last.
const SCALES = [1, 0.68, 0.44, 0.28];

export default function EvasiveContactButton({
  opener,
}: {
  opener?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hits, setHits] = useState(0);
  // Deterministic on first render (no Math.random) so SSR and client agree;
  // variety kicks in once the user actually interacts.
  const [phrase, setPhrase] = useState(() =>
    opener !== undefined ? opener : TEASES[0][0],
  );
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
    const next = hits + 1;
    setHits(next);
    setPhrase(next >= MAX_HITS ? pick(GAME_OVER) : pick(TEASES[next]));
    if (next < MAX_HITS) relocate();
  };

  const reset = () => {
    setHits(0);
    setPos({ x: 0, y: 0 });
    setPhrase(opener !== undefined ? opener : pick(TEASES[0]));
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
        {phrase}
      </p>
    </div>
  );
}
