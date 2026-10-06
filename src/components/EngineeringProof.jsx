import { engineeringProof } from "../data/content";

export default function EngineeringProof() {
  return (
    <section id="proof" className="border-t border-line py-18 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 border-b border-line pb-5">
          <h2 className="font-display text-[26px] font-medium sm:text-[32px]">
            Proof, not just claims
          </h2>
          <p className="mt-3 max-w-[60ch] text-[15.5px] text-muted">
            Anyone can list "testing" as a skill. Here's what that actually
            means for BhSquare's transaction logic, with the real result.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {engineeringProof.map((item) => (
            <div key={item.title} className="rounded-md border border-line bg-panel p-7">
              <h3 className="font-display text-xl font-medium text-brass-soft">
                {item.title}
              </h3>
              <p className="mt-3 text-[14.5px] text-ivory">{item.detail}</p>
              <div className="mt-4 rounded border border-teal/40 bg-panel-2 px-4 py-3 text-[13px] text-muted">
                <span className="text-teal">Result: </span>
                {item.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
