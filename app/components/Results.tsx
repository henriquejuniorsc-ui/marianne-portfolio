"use client";

import AnimateIn from "./AnimateIn";

const metrics = [
  {
    label: "Pipeline Efficiency",
    description: "Structured CRM workflows and pipelines across multiple tools for consistent lead management and follow-through.",
  },
  {
    label: "Lead Qualification",
    description: "Applied BANT/GPCT frameworks to qualify prospects, ensuring the sales team focuses on the highest-value opportunities.",
  },
  {
    label: "Outreach Optimization",
    description: "Crafted personalized outreach cadences that improved response rates and reduced lead-to-meeting conversion times.",
  },
];

const tools = [
  "Monday.com",
  "Agendor",
  "Calendly",
  "Google Workspace",
  "Excel",
  "Google Sheets",
  "Canva",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "Email Marketing",
  "Digital Marketing",
];

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">
            Results & Expertise
          </span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-xl">
            Delivering <span className="text-accent italic">measurable</span>{" "}
            impact
          </h2>
        </AnimateIn>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          {/* Left — impact metrics */}
          <div className="space-y-5">
            {metrics.map((m, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl border border-border p-7 hover:border-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <h3 className="font-semibold text-lg">{m.label}</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Right — tools + languages */}
          <AnimateIn delay={0.2} direction="right">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-8">
                Tools & Platforms I Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full border border-border text-sm font-medium text-tag-text bg-tag-bg hover:border-accent hover:text-accent transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Languages */}
              <h3 className="font-serif text-2xl font-semibold mt-12 mb-6">
                Languages
              </h3>
              <div className="flex gap-4">
                <div className="flex-1 bg-card rounded-2xl border border-border p-5 text-center">
                  <div className="text-2xl mb-2">🇧🇷</div>
                  <div className="font-semibold">Portuguese</div>
                  <div className="text-sm text-text-muted mt-1">Native</div>
                </div>
                <div className="flex-1 bg-card rounded-2xl border border-border p-5 text-center">
                  <div className="text-2xl mb-2">🇺🇸</div>
                  <div className="font-semibold">English</div>
                  <div className="text-sm text-text-muted mt-1">Advanced</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
