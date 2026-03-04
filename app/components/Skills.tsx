"use client";

import AnimateIn from "./AnimateIn";

const categories = [
  {
    title: "CRM & Sales Tools",
    tools: ["Monday.com", "Agendor", "LinkedIn Sales Navigator", "Calendly", "Email Marketing"],
  },
  {
    title: "Marketing & Content",
    tools: ["Canva", "Instagram", "TikTok", "SEO", "Digital Marketing", "Paid Traffic"],
  },
  {
    title: "Productivity & Communication",
    tools: ["Google Workspace", "Excel", "Google Sheets", "Video Editing", "Branding"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
            Expertise
          </span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Skills & Tools
          </h2>
        </AnimateIn>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <AnimateIn key={i} delay={i * 0.12}>
              <div className="bg-card rounded-2xl border border-border p-7 h-full">
                <h3 className="font-serif text-xl font-semibold mb-6">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5 cursor-default bg-bg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
