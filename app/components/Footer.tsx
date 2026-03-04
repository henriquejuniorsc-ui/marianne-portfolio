const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; 2025 Marianne Silveira. Designed with purpose.
        </p>
        <nav className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-text-muted hover:text-accent transition-colors font-medium uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
