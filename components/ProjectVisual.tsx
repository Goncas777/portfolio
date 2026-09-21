import type { Project } from "@/lib/projects";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual accent-${project.accent} ${compact ? "is-compact" : ""}`}>
      <div className="visual-topline">
        <span>{project.index}</span>
        <span>{project.status}</span>
      </div>

      <div className="visual-network" aria-hidden="true">
        {project.architecture.slice(0, compact ? 5 : 7).map((item, index) => (
          <div className="network-row" key={`${item}-${index}`}>
            <div className="network-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="network-node">
              <span className="network-dot" />
              <span>{item}</span>
            </div>
            {index < project.architecture.slice(0, compact ? 5 : 7).length - 1 ? (
              <div className="network-line" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="visual-caption">
        <span>System map</span>
        <span>{project.year}</span>
      </div>
    </div>
  );
}
