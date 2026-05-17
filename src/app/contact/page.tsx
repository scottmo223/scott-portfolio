import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Scott Morales",
  description:
    "Get in touch with Scott Morales — software work, Vantage Method inquiries, or music collaborations.",
};

export default function Contact() {
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <h1>Contact</h1>
      <h2>Dang, how did you find this page?</h2>
      <p>
        Best way to reach me — pick the one that fits.
      </p>

      <ul>
        <li>
          <strong>Vantage Method (agency):</strong>{" "}
          <a href="mailto:scott@vantagemethod.com">scott@vantagemethod.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/rscottmorales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/rscottmorales
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/scottmo223"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/scottmo223
          </a>
        </li>
      </ul>

      <p className="text-sm opacity-70">
        Based in East Texas. Available remote anywhere.
      </p>
    </div>
  );
}
