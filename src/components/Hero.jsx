import { profile, stats, heroFlow } from "../data/content";

function buildPath(points) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");
}

export default function Hero() {
  return (
    <header id="top" className="border-b border-line pb-18 pt-20 sm:pt-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-11 px-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-end">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            Full-stack engineer · Surat, India
          </div>
          <h1 className="max-w-[14ch] font-display text-[34px] leading-[1.08] font-medium sm:text-[54px]">
            I build the systems businesses run their day on.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-muted">
            Not landing pages — the CRMs, pipelines, and payment flows
            underneath them. Four of my systems are live in production right
            now, handling real leads, real fees, and real installations for
            actual businesses.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
            {stats.slice(0, 2).map((s) => (
              <span key={s.label}>
                <span className="text-ivory">{s.value}</span> {s.label}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#work"
              className="rounded-sm border border-brass bg-brass px-5 py-2.5 text-sm font-medium text-[#1B1508] transition-colors hover:bg-brass-soft hover:border-brass-soft"
            >
              See the work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="rounded-sm border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="rounded-md border border-line bg-panel p-6 pb-5">
          <p className="mb-4 text-[13px] text-muted">
            BhSquare — one lead's actual path through the system
          </p>
          <svg viewBox="0 0 460 180" className="w-full" aria-hidden="true">
            <path
              d={buildPath(heroFlow)}
              fill="none"
              stroke="var(--color-brass)"
              strokeWidth="1.6"
              className="animate-draw"
            />
            {heroFlow.map((p) => (
              <g key={p.label}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="5"
                  fill="var(--color-panel-2)"
                  stroke="var(--color-brass)"
                  strokeWidth="2"
                />
                <text
                  x={p.x}
                  y={p.y > 90 ? p.y + 22 : p.y - 12}
                  textAnchor="middle"
                  fontSize="11.5"
                  fill="var(--color-muted)"
                  fontFamily="IBM Plex Sans, sans-serif"
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </header>
  );
}
