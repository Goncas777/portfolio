import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/ArrowIcon";
import { projects } from "@/lib/projects";

const principles = [
  {
    number: "01",
    title: "Start with the boundary",
    text: "I first look for the places where a system can become unreliable: external data, state transitions, async work, browser side effects and API contracts.",
  },
  {
    number: "02",
    title: "Prefer explicit systems",
    text: "Queues, schemas, deterministic rules and failure states should be visible in the architecture — not hidden behind clever abstractions or a single AI call.",
  },
  {
    number: "03",
    title: "Finish the product path",
    text: "I like projects that cross the whole stack: interface, API, persistence, workers, automation, testing and the operational details needed to run them.",
  },
];

const stackGroups = [
  {
    label: "Product interfaces",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "APIs & services",
    items: ["FastAPI", "Python", "C# / .NET", "REST", "SQLAlchemy"],
  },
  {
    label: "Data & async",
    items: ["PostgreSQL", "MongoDB", "Redis", "BullMQ", "Alembic"],
  },
  {
    label: "Engineering tools",
    items: ["Docker", "GitHub Actions", "Playwright", "Vitest / pytest", "Linux / WSL"],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-kicker">
                <span className="status-dot" />
                Software engineering portfolio · 2026
              </div>

              <h1>
                Building software
                <br />
                <span>that has to work.</span>
              </h1>

              <p className="hero-lede">
                I&apos;m Gonçalo Vieira, a software developer from Portugal. I build full-stack
                products across interfaces, APIs, data pipelines, browser automation and
                AI-assisted workflows — with most of my attention on the system underneath.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work <ArrowIcon size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/Goncas777"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowIcon size={16} />
                </a>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Engineering profile">
              <div className="aside-head">
                <span>Engineering snapshot</span>
                <span>PT / 2026</span>
              </div>

              <div className="profile-statement">
                <span>Focus</span>
                <strong>Full-stack product engineering with a backend and systems bias.</strong>
              </div>

              <div className="profile-grid">
                <div>
                  <span className="profile-label">Primary stack</span>
                  <strong>Next.js · FastAPI · .NET</strong>
                </div>
                <div>
                  <span className="profile-label">Systems</span>
                  <strong>PostgreSQL · MongoDB · Redis · Docker</strong>
                </div>
                <div>
                  <span className="profile-label">Current direction</span>
                  <strong>Product engineering · DevOps · applied AI</strong>
                </div>
                <div>
                  <span className="profile-label">Education</span>
                  <strong>Web Programming · ETIC Algarve</strong>
                </div>
              </div>

              <div className="profile-footer">
                <span className="profile-monogram">GV</span>
                <div>
                  <span className="profile-small">Selected systems</span>
                  <strong>{String(projects.length).padStart(2, "0")}</strong>
                </div>
              </div>
            </aside>
          </div>

          <div className="hero-footnote">
            <span>Frontend → API → data → infrastructure</span>
            <span className="hero-line" />
            <span>Scroll to work</span>
          </div>
        </section>

        <section className="work-section shell" id="work">
          <Reveal>
            <div className="section-heading section-heading-work">
              <div>
                <span className="section-index">01 / Selected engineering work</span>
                <h2>Proof through systems, not skill bars.</h2>
              </div>
              <p>
                These are the projects I would want someone reviewing my work to open first. Each
                case study shows the architecture, the trade-offs and the decisions that made the
                implementation more reliable.
              </p>
            </div>
          </Reveal>

          <div className="project-list">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="principles-section" id="about">
          <div className="shell">
            <Reveal>
              <div className="section-heading light-heading">
                <div>
                  <span className="section-index">02 / How I think</span>
                  <h2>Engineering choices before visual noise.</h2>
                </div>
                <p>
                  I care about the UI, but the strongest projects usually become interesting where
                  the UI stops: data quality, state, concurrency, safety and deployment.
                </p>
              </div>
            </Reveal>

            <div className="principles-grid">
              {principles.map((area) => (
                <Reveal key={area.number}>
                  <article className="principle-card">
                    <span>{area.number}</span>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="stack-section shell" id="stack">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="section-index">03 / Working stack</span>
                <h2>Tools connected to shipped work.</h2>
              </div>
              <p>
                No logo wall and no self-rated percentages. These are technologies that appear in
                the projects above and that I have used as part of complete application flows.
              </p>
            </div>
          </Reveal>

          <div className="stack-table">
            {stackGroups.map((group) => (
              <Reveal key={group.label}>
                <div className="stack-row">
                  <span className="stack-label">{group.label}</span>
                  <div className="stack-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="education-section shell">
          <Reveal>
            <div className="education-card">
              <div className="education-index">04 / Education</div>
              <div className="education-main">
                <p className="education-overline">ETIC Algarve</p>
                <h2>Web Programming</h2>
                <p>
                  A practical route through frontend, backend, databases, containerization and
                  project delivery, culminating in Decozy as the final project.
                </p>
              </div>
              <div className="education-side">
                <span>Final project</span>
                <strong>Decozy</strong>
                <a href="/projects/decozy">
                  Open case study <ArrowIcon size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="contact-section">
          <div className="shell contact-grid">
            <Reveal>
              <div>
                <span className="section-index">05 / Continue</span>
                <h2>Code is the next layer of the portfolio.</h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-copy">
                <p>
                  Public repositories are linked directly from their case studies. Private projects
                  are documented without exposing their source. The portfolio is intentionally
                  concise: enough context to understand the engineering, then a path into the work.
                </p>
                <a
                  className="text-link"
                  href="https://github.com/Goncas777"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Goncas777 <ArrowIcon size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>Gonçalo Vieira</span>
        <span>Software Developer · Portugal</span>
        <span>Next.js · 2026</span>
      </footer>
    </>
  );
}
