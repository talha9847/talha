import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-18 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-5 border-b border-line pb-5">
          <h2 className="font-display text-[26px] font-medium sm:text-[32px]">Selected work</h2>
          <div className="text-sm text-muted">{projects.length} shown · all live</div>
        </div>

        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
