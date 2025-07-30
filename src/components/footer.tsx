export default function Footer() {
    return (
        <footer className="absolute w-full bottom-0 bg-gray-900 text-white shadow-lg z-50 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <div className="container py-5 flex justify-evenly items-baseline">
                <h5>Scott Morales &copy; 2025</h5>
                <div className="flex gap-5">
                    <a
                        href="https://www.instagram.com/scottmoralesdrum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition px-2 py-1 flex items-center gap-1"
                    >
                        Instagram
                        <span aria-hidden className="inline-block">
                            ↗
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rscottmorales/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition px-2 py-1 flex items-center gap-1"
                    >
                        LinkedIn
                        <span aria-hidden className="inline-block">
                            ↗
                        </span>
                    </a>
                    <a
                        href="https://github.com/scottmo223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition px-2 py-1 flex items-center gap-1"
                    >
                        GitHub
                        <span aria-hidden className="inline-block">
                            ↗
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}