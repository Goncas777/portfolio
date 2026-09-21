import { ArrowIcon } from "@/components/ArrowIcon";
import { Header } from "@/components/Header";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Gonçalo Vieira`,
    description: project.short,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project-hero shell">
          <Link className="back-link" href="/#work">
            <span>←</span> All projects
          </Link>

          <div className="project-hero-grid">
            <div className="project-hero-copy">
              <div className="project-heading-meta">
                <span>{project.index}</span>
                <span>{project.eyebrow}</span>
                <span>{project.year}</span>
              </div>
              <h1>{project.title}</h1>
              <p className="project-summary">{project.summary}</p>

              <div className="project-actions">
                {project.repo ? (
                  <a className="button button-primary" href={project.repo} target="_blank" rel="noreferrer">
                    {project.repoLabel} <ArrowIcon size={17} />
                  </a>
                ) : (
                  <span className="button button-muted">{project.repoLabel}</span>
                )}
              </div>
            </div>

            <ProjectVisual project={project} />
          </div>
        </section>

        <section className="case-section shell">
          <Reveal>
            <div className="case-intro-grid">
              <div>
                <span className="case-label">Context</span>
                <h2>What makes this project interesting.</h2>
              </div>
              <p>{project.context}</p>
            </div>
          </Reveal>
        </section>

        <section className="proof-section shell">
          <div className="proof-grid">
            {project.proof.map((item) => (
              <Reveal key={item.label}>
                <div className="proof-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="architecture-section">
          <div className="shell architecture-grid">
            <Reveal>
              <div className="architecture-copy">
                <span className="case-label">Architecture</span>
                <h2>A readable path through the system.</h2>
                <p>
                  The sequence below is deliberately simplified. It shows the core path a request or
                  unit of data takes, without pretending the project is just a diagram.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="architecture-flow">
                {project.architecture.map((node, index) => (
                  <div className="flow-row" key={`${node}-${index}`}>
                    <span className="flow-number">{String(index + 1).padStart(2, "0")}</span>
                    <div className="flow-node">
                      <span>{node}</span>
                      <span className="flow-pulse" />
                    </div>
                    {index < project.architecture.length - 1 ? <div className="flow-connector">↓</div> : null}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="decisions-section shell">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="section-index">Engineering decisions</span>
                <h2>Choices that shaped the implementation.</h2>
              </div>
              <p>
                The useful part of a portfolio is not the framework list. It is the reasoning behind
                boundaries, trade-offs and failure handling.
              </p>
            </div>
          </Reveal>

          <div className="decision-list">
            {project.decisions.map((decision, index) => (
              <Reveal key={decision.title}>
                <article className="decision-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="stack-detail shell">
          <Reveal>
            <div className="stack-detail-grid">
              <div>
                <span className="case-label">Technology</span>
                <h2>Stack used in this project.</h2>
              </div>
              <div className="tech-cloud">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="next-project-section">
          <div className="shell">
            <span className="case-label">Next project</span>
            <Link className="next-project-link" href={`/projects/${nextProject.slug}`}>
              <span>{nextProject.title}</span>
              <ArrowIcon size={34} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>Gonçalo Vieira</span>
        <span>{project.title}</span>
        <Link href="/#work">Back to work</Link>
      </footer>
    </>
  );
}
