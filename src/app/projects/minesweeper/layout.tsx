import type { Metadata } from "next";

// The page itself is a Client Component and can't export metadata, so the
// canonical lives here in a thin server layout.
export const metadata: Metadata = {
  title: "Minesweeper — Scott Morales",
  description: "A Minesweeper clone Scott Morales built with his son.",
  alternates: { canonical: "/projects/minesweeper" },
};

export default function MinesweeperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
