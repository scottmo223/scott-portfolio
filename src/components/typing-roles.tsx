"use client";

import { useEffect, useState } from "react";

const ROLES = ["Developer", "Entrepreneur", "Musician"];

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1400;

export default function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex];

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, DELETE_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : full.slice(0, prev.length + 1)
        );
      },
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span aria-live="polite">
      {text}
      <span className="inline-block w-[2px] -mb-0.5 h-[1em] bg-teal-400 ml-0.5 animate-pulse" />
    </span>
  );
}
