import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowIcon } from "./ArrowIcon";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link className="project-card-link" href={`/projects/${project.slug}`}>
        <div className="project-card-copy">
          <div className="project-card-meta">
            <span>{project.index}</span>
            <span>{project.eyebrow}</span>
            <span className="project-status">{project.status}</span>
          </div>

          <h3>{project.title}</h3>
          <p>{project.short}</p>

          <div className="project-proof-preview" aria-label={`${project.title} highlights`}>
            {project.proof.slice(0, 3).map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="project-card-footer">
            <div className="project-stack-preview">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <span className="project-open" aria-hidden="true">
              <ArrowIcon size={20} />
            </span>
          </div>
        </div>

        <ProjectVisual project={project} compact />
      </Link>
    </article>
  );
}
