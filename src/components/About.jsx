import { skills, education, stats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-18 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 border-b border-line pb-5">
              <h2 className="font-display text-[26px] font-medium sm:text-[32px]">Skills</h2>
            </div>
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-2 sm:flex-row sm:gap-5">
                  <div className="w-full flex-none text-[13px] text-muted sm:w-36">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-line px-2.5 py-1 text-[13px] text-ivory"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 border-b border-line pb-5">
              <h2 className="font-display text-[26px] font-medium sm:text-[32px]">Background</h2>
            </div>
            <div className="rounded-md border border-line bg-panel p-6">
              <h3 className="font-display text-[19px] font-medium">{education.degree}</h3>
              <p className="mt-1 text-[14.5px] text-teal">{education.school}</p>
              <p className="mt-2.5 text-[13px] text-muted">
                {education.date} · {education.gpa}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-panel px-5 py-5">
                  <b className="block font-display text-[28px] font-medium text-brass-soft">
                    {s.value}
                  </b>
                  <span className="text-[13px] text-muted">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
