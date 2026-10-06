import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-18 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 border-b border-line pb-5">
          <h2 className="font-display text-[26px] font-medium sm:text-[32px]">Experience</h2>
        </div>

        <div className="ml-1.5 border-l border-line pl-7">
          {experience.map((job, i) => (
            <div
              key={job.org}
              className={`relative ${i === experience.length - 1 ? "" : "pb-10"}`}
            >
              <span className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full border-2 border-brass bg-ink" />
              <p className="text-[13px] text-muted">{job.date}</p>
              <h3 className="mt-1 font-display text-[19px] font-medium">{job.role}</h3>
              <p className="mt-0.5 text-[14.5px] text-teal">
                {job.org} · {job.location}
              </p>
              <ul className="mt-3 max-w-[60ch] space-y-1.5 text-[15px] text-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-4">
                    <span className="absolute left-0 top-[9px] h-[1.4px] w-1.5 bg-brass" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
