export default function About() {
  return (
    <div className="prose max-w-full">
      <h1 className="">Who is Scott Morales?</h1>
      <p>Hey, I’m Scott.</p>
      <p>
        I’ve always loved figuring out how things work, whether it’s writing code, fixing up a house project, or tinkering in the garage.
      </p>
      <p>
        By day, I’m a software developer who enjoys turning ideas into real, working apps. By night, you’ll find me brainstorming new businesses, helping friends with tech headaches, or making music with my family.
      </p>
      <p>
        I grew up in East Texas, got my degree in Computer Science, and co-founded Wescot Solutions—a web dev & marketing agency—where I help small businesses grow online. I also run UnDootie, a local pet service startup.
      </p>
      <p>
        Outside of work, I’m a proud dad, a blue belt in jiu jitsu, and a big fan of breakfast tacos and 90s country music.
      </p>
      <p>
        If you need someone who can solve problems, build things from scratch, or just talk shop over a coffee, I’m your guy.
      </p>

      <h2>Photo gallery coming soon!</h2>

      <h2>Music Projects</h2>
      <p>I also play music and have several music projects. Check them out!</p>
      <a
        href="https://www.instagram.com/scottmoralesdrum"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-400 transition px-2 py-1 flex items-center gap-1"
      >
        Instagram Drumming
        <span aria-hidden className="inline-block">
          ↗
        </span>
      </a>
      <a
        href="https://www.instagram.com/scottmomusic"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-400 transition px-2 py-1 flex items-center gap-1"
      >
        Instagram ScottMo
        <span aria-hidden className="inline-block">
          ↗
        </span>
      </a>
      <a
        href="https://open.spotify.com/artist/1HQfUPJBTYF4uUjq8aAHHW"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-400 transition px-2 py-1 flex items-center gap-1"
      >
        Spotify Fellowship Piano
        <span aria-hidden className="inline-block">
          ↗
        </span>
      </a>
    </div>
  );
}