"use client";

import AnimateIn from "./AnimateIn";

const metrics = [
  {
    label: "Pipeline Efficiency",
    description: "Streamlined CRM processes and automated outreach sequences for consistent improvement in team productivity.",
  },
  {
    label: "Lead Qualification",
    description: "Applied BANT/GPCT frameworks to qualify prospects, ensuring sales teams focus on high-potential opportunities.",
  },
  {
    label: "Outreach Optimization",
    description: "Crafted personalized follow-up cadences that improved response rates and meeting conversion.",
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
    <section id="results" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
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
          {/* Impact metrics */}
          <div className="space-y-6">
            {metrics.map((m, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl border border-border p-7 hover:border-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">{m.label}</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Tools & Tech stack */}
          <AnimateIn delay={0.2} direction="right">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-8">
                Tools & Platforms I Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5 cursor-default"
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
                  <div className="text-sm text-text-muted mt-1">Advanced / Fluent</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
