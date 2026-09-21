import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/ArrowIcon";
import { projects } from "@/lib/projects";

const focusAreas = [
  {
    number: "01",
    title: "Architecture before decoration",
    text: "I like interfaces, but the system behind them matters more: data contracts, boundaries, failure modes and deployability.",
  },
  {
    number: "02",
    title: "Predictability over cleverness",
    text: "If deterministic application logic can solve a problem more reliably than an LLM or a complex abstraction, I prefer the deterministic path.",
  },
  {
    number: "03",
    title: "Build the complete flow",
    text: "I am most interested in projects that cross layers — browser, API, database, background jobs, automation and infrastructure.",
  },
  {
    number: "04",
    title: "Keep the interface restrained",
    text: "Good UI should make the product feel obvious. Motion and visual detail are there to support hierarchy, not to compete with it.",
  },
];

const stackGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Python", "C# / .NET", "REST APIs", "SQLAlchemy"],
  },
  {
    label: "Data & async",
    items: ["PostgreSQL", "MongoDB", "Redis", "BullMQ", "Alembic"],
  },
  {
    label: "Tooling",
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
                Portfolio · 2026
              </div>
              <h1>
                I build systems,
                <br />
                <span>not just screens.</span>
              </h1>
              <p className="hero-lede">
                I&apos;m Gonçalo, a software developer from Portugal focused on full-stack product
                engineering, backend architecture, automation and AI-enabled workflows.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Selected work <ArrowIcon size={17} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/Goncas777"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub profile <ArrowIcon size={17} />
                </a>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Profile overview">
              <div className="aside-head">
                <span>Profile</span>
                <span>PT / 2026</span>
              </div>
              <div className="profile-grid">
                <div>
                  <span className="profile-label">Focus</span>
                  <strong>Full-stack systems</strong>
                </div>
                <div>
                  <span className="profile-label">Education</span>
                  <strong>Web Programming · ETIC Algarve</strong>
                </div>
                <div>
                  <span className="profile-label">Working with</span>
                  <strong>Next.js · FastAPI · .NET · Docker</strong>
                </div>
                <div>
                  <span className="profile-label">Interested in</span>
                  <strong>Product engineering · DevOps · AI systems</strong>
                </div>
              </div>
              <div className="profile-signature">
                <span>GV</span>
                <p>Engineering projects from UI to infrastructure.</p>
              </div>
            </aside>
          </div>

          <div className="hero-footnote">
            <span>Scroll to selected work</span>
            <span className="hero-line" />
            <span>Five case studies</span>
          </div>
        </section>

        <section className="work-section shell" id="work">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="section-index">01 / Selected work</span>
                <h2>Projects with real systems behind them.</h2>
              </div>
              <p>
                Each case study focuses on engineering decisions: how data moves, where state lives,
                how failures are contained and why the architecture looks the way it does.
              </p>
            </div>
          </Reveal>

          <div className="project-grid">
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
                  <span className="section-index">02 / Approach</span>
                  <h2>The way I like to build.</h2>
                </div>
                <p>
                  My projects tend to start with a product idea and end up crossing multiple layers.
                  That is where I learn the most.
                </p>
              </div>
            </Reveal>

            <div className="principles-grid">
              {focusAreas.map((area) => (
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
                <span className="section-index">03 / Stack</span>
                <h2>Tools I have used to ship projects.</h2>
              </div>
              <p>
                The list is intentionally practical: technologies that appear in the work above,
                not a wall of logos collected for a skills section.
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
                  A hands-on path through frontend, backend, databases, containerization and project
                  delivery — ending with Decozy as the final project.
                </p>
              </div>
              <div className="education-side">
                <span>Selected final project</span>
                <strong>Decozy</strong>
                <a href="/projects/decozy">
                  Read case study <ArrowIcon size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="contact-section">
          <div className="shell contact-grid">
            <Reveal>
              <div>
                <span className="section-index">05 / Next</span>
                <h2>Looking for the next hard problem.</h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-copy">
                <p>
                  This portfolio is built for university applications and early-career software
                  opportunities. Public code is linked where available; private project code can be
                  discussed when appropriate.
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
        <span>Built with Next.js</span>
      </footer>
    </>
  );
}
