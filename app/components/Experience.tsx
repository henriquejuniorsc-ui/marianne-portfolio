"use client";

import AnimateIn from "./AnimateIn";

const experiences = [
  {
    period: "Jan 2025 — Sep 2025",
    role: "Sales Development Representative",
    company: "Rugido Digital Agency",
    location: "Remote",
    highlights: [
      "Led B2B prospecting and lead qualification for high-performance digital marketing solutions",
      "Maintained CRM systems (Monday, Agendor) with accurate pipeline tracking and structured workflows",
      "Developed personalized outreach targeting decision-makers, improving team prospecting efficiency",
    ],
    tools: ["B2B Sales", "CRM", "Lead Qualification", "Email Marketing", "Calendly"],
  },
  {
    period: "Jul 2024 — Nov 2024",
    role: "Sales Development Representative",
    company: "F5 Estratégia",
    location: "Remote",
    highlights: [
      "Drove B2B lead prospecting for digital presence and paid traffic strategies",
      "Conducted consultative diagnostics to qualify high-intent prospects",
      "Optimized lead nurturing workflows, improving meeting quality and response time",
    ],
    tools: ["Paid Traffic", "Consultative Sales", "Lead Nurturing", "Prospecting"],
  },
  {
    period: "Jun 2023 — May 2024",
    role: "Sales Consultant",
    company: "Ilha Ótica",
    location: "Ilhabela, SP",
    highlights: [
      "Provided consultative support for high-value optical products, assisting 20+ clients daily",
      "Consistently hit monthly sales targets through relationship-driven selling",
      "Managed inventory, scheduling, and customer follow-ups for smooth operations",
    ],
    tools: ["Retail Sales", "Customer Support", "Negotiation", "Retention"],
  },
  {
    period: "2024 — Present",
    role: "Content Creator",
    company: "Personal Projects",
    location: "Remote",
    highlights: [
      "Developed branded visual identities and social media graphics using Canva",
      "Produced short-form video content for Instagram Reels and TikTok focused on conversion",
      "Applied SEO best practices and analytics to optimize reach and engagement",
    ],
    tools: ["Canva", "Video Editing", "Social Media", "SEO", "Branding"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
            Career Path
          </span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Experience
          </h2>
        </AnimateIn>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="group bg-bg rounded-2xl border border-border p-7 lg:p-8 hover:border-accent/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-accent bg-accent/8 px-3 py-1.5 rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    {exp.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold leading-tight">
                  {exp.role}
                </h3>
                <p className="text-text-muted font-medium mt-1 mb-5">
                  {exp.company}
                </p>

                <ul className="space-y-3 flex-1">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/6 text-accent border border-accent/12"
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
