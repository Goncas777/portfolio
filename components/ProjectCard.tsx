import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowIcon } from "./ArrowIcon";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link className="project-card-link" href={`/projects/${project.slug}`}>
        <ProjectVisual project={project} compact />
        <div className="project-card-copy">
          <div className="project-card-meta">
            <span>{project.index}</span>
            <span>{project.eyebrow}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.short}</p>
          <div className="project-card-footer">
            <div className="project-stack-preview">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <span className="project-open" aria-label={`Open ${project.title}`}>
              <ArrowIcon size={20} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
