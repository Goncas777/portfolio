import type { Project } from "@/lib/projects";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const architecture = project.architecture.slice(0, compact ? 5 : 7);

  return (
    <div className={`project-visual accent-${project.accent} ${compact ? "is-compact" : ""}`}>
      <div className="visual-topline">
        <span>System / {project.index}</span>
        <span>{project.year}</span>
      </div>

      <div className="visual-title" aria-hidden="true">
        <span>{project.title.slice(0, 1)}</span>
        <small>{project.title}</small>
      </div>

      <div className="visual-network" aria-hidden="true">
        {architecture.map((item, index) => (
          <div className="network-row" key={`${item}-${index}`}>
            <div className="network-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="network-node">
              <span className="network-dot" />
              <span>{item}</span>
            </div>
            {index < architecture.length - 1 ? <div className="network-line" /> : null}
          </div>
        ))}
      </div>

      <div className="visual-caption">
        <span>Architecture signal</span>
        <span>{project.status}</span>
      </div>
    </div>
  );
}
