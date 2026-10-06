import { profile } from "../data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#proof", label: "Proof" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 font-display text-lg">
          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-gradient-to-br from-brass-soft to-brass font-display text-sm italic font-medium text-[#1B1508]">
            TM
          </span>
          {profile.name}
        </a>

        <ul className="hidden gap-7 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ivory">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-sm border border-line px-3.5 py-2 text-sm transition-colors hover:border-muted sm:inline-block"
          >
            Résumé ↓
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm border border-brass bg-brass px-3.5 py-2 text-sm font-medium text-[#1B1508] transition-colors hover:bg-brass-soft hover:border-brass-soft"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
