function MiniDiagram({ steps }) {
  const n = steps.length;
  const width = 320;
  const pad = 26;
  const usable = width - pad * 2;
  const xs = steps.map((_, i) => pad + (usable * i) / (n - 1));

  return (
    <svg viewBox={`0 0 ${width} 92`} className="w-full" aria-hidden="true">
      {xs.slice(0, -1).map((x, i) => (
        <line
          key={i}
          x1={x + 10}
          y1={46}
          x2={xs[i + 1] - 10}
          y2={46}
          stroke="var(--color-line)"
          strokeWidth="1.4"
        />
      ))}
      {xs.map((x, i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={46}
            r="4"
            fill="var(--color-panel)"
            stroke="var(--color-teal)"
            strokeWidth="1.6"
          />
          <text
            x={x}
            y={68}
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-muted)"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {steps[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="mb-5 rounded-md border border-line bg-panel p-7 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-display text-2xl font-medium">{project.name}</h3>
            {project.badge && (
              <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">
                {project.badge}
              </span>
            )}
          </div>
          <p className="mt-3.5 max-w-[60ch] text-[15.5px] text-muted">{project.desc}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener"
          className="inline-flex flex-none items-center gap-2 whitespace-nowrap rounded-sm border border-line px-3 py-1.5 text-sm text-teal transition-colors hover:border-teal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          {project.urlLabel}
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.15fr]">
        <div className="rounded border border-line bg-panel-2 px-4 py-5">
          <MiniDiagram steps={project.diagram} />
        </div>
        <div>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="relative pl-4.5 text-[14.5px] text-ivory">
                <span className="absolute left-0 top-[9px] h-[1.4px] w-1.5 bg-brass" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded border border-line px-2.5 py-1 text-[12.5px] text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
