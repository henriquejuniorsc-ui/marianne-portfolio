const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-muted">
          &copy; 2025 Marianne Silveira. Designed with passion.
        </p>
        <nav className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-dark-muted hover:text-accent transition-colors font-medium uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
