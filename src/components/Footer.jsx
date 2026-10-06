import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-14 sm:py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-[16ch] font-display text-[24px] font-medium sm:text-[30px]">
            Building something? I'd like to hear about it.
          </h2>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
            >
              GitHub ↗
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener"
              className="rounded-sm border border-line px-5 py-2.5 text-sm transition-colors hover:border-muted"
            >
              LeetCode ↗
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-sm border border-brass bg-brass px-5 py-2.5 text-sm font-medium text-[#1B1508] transition-colors hover:bg-brass-soft hover:border-brass-soft"
            >
              Download résumé ↓
            </a>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-2.5 text-[13px] text-muted">
          <span>{profile.name} — {profile.location}</span>
          <span>Built with real production systems, not templates</span>
        </div>
      </div>
    </footer>
  );
}
