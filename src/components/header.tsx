"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-gray-900 text-white shadow-lg z-50">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="font-bold text-xl tracking-wide hover:text-teal-400 transition">
                    Scott Morales
                </Link>
                <button
                    className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <ul
                    className={`flex-col lg:flex-row lg:flex gap-6 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-200 ${menuOpen ? "flex" : "hidden"
                        }`}
                >
                    <li>
                        <Link
                            href="/projects"
                            className="hover:text-teal-400 transition px-2 py-1 block"
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            href="/services"
                            className="hover:text-teal-400 transition px-2 py-1 block"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-teal-400 transition px-2 py-1 block"
                            onClick={() => setMenuOpen(false)}
                        >
                            Meet Scott
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}