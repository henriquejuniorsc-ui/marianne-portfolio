"use client";

import AnimateIn from "./AnimateIn";

const services = [
  {
    title: "B2B Prospecting & Lead Generation",
    desc: "Your outsourced qualified lead generation machine — I prospect, qualify, and manage your pipeline so your closers can focus on closing.",
    tags: ["Outbound Prospecting", "Pipeline Mgmt"],
  },
  {
    title: "CRM & Pipeline Management",
    desc: "Keep your deals organized. I set up, clean, update and manage your CRM so nothing slips through the cracks.",
    tags: ["Monday.com", "Agendor", "Google Sheets"],
  },
  {
    title: "Email Outreach & Follow-ups",
    desc: "Nail the follow-up game. I manage your outbound email sequences and make sure no lead goes cold.",
    tags: ["Sequences", "Follow-ups"],
  },
  {
    title: "Content Creation & Branding",
    desc: "Eye-catching social graphics, short-form video, brand visual identity, and content that actually converts — all built in Canva.",
    tags: ["Canva", "Instagram", "TikTok"],
  },
  {
    title: "Virtual Assistance",
    desc: "I handle the operations — calendars, meetings, email, and daily tasks — so you can focus on the big picture.",
    tags: ["Calendly", "Organization"],
  },
  {
    title: "Customer Support",
    desc: "Reliable and professional customer communication — clear messaging, organized follow-ups, and a focus on satisfaction.",
    tags: ["Communication", "Retention"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">
            What I Do
          </span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            How I Can Help Your Business
          </h2>
        </AnimateIn>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {s.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-border text-tag-text bg-tag-bg"
                    >
                      {tag}
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
