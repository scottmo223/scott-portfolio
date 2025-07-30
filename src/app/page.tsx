import Link from "next/link";

export default function Home() {
  return (
    <div className=" items-center justify-items-center p-8 lg:p-20 flex flex-col gap-8 items-center sm:items-start">
      <div className="prose">
        <h1>Scott Morales</h1>
        <p>Software developer by day, entrepreneur by night. With a CS degree, co owner of a web dev & marketing agency, and a local service startup under my belt - I’m all about building cool stuff that works.</p>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] h-10 sm:h-12 px-4 sm:px-5 sm:w-auto w-90"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent h-10 sm:h-12 px-4 sm:px-5 w-90 sm:w-auto "
          href="/projects"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
