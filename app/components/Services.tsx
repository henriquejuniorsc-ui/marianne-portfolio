"use client";

import AnimateIn from "./AnimateIn";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "B2B Prospecting & Lead Generation",
    result: "Fill your pipeline with qualified opportunities through strategic outbound prospecting and BANT/GPCT lead qualification.",
    tools: ["LinkedIn Sales Navigator", "Monday.com", "Agendor"],
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "CRM & Pipeline Management",
    result: "Keep your sales data clean, pipelines organized, and handoffs seamless so your closers can focus on closing.",
    tools: ["Monday.com", "Agendor", "Google Sheets"],
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Outreach & Follow-ups",
    result: "Turn cold leads into warm conversations with personalized sequences and optimized follow-up cadences.",
    tools: ["Email Marketing", "Calendly"],
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Content Creation & Branding",
    result: "Build a compelling brand presence with professional graphics, short-form video, and conversion-driven messaging.",
    tools: ["Canva", "Instagram", "TikTok"],
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Virtual Assistance",
    result: "Free up your time with expert calendar management, meeting scheduling, and daily operational support.",
    tools: ["Calendly", "Google Workspace", "Excel"],
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Customer Support",
    result: "Deliver exceptional customer experiences across digital channels with organized, professional communication.",
    tools: ["Digital Channels", "CRM"],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimateIn>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent-light">
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
              <div
                className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 h-full ${
                  s.featured
                    ? "bg-accent/15 border border-accent/25 hover:bg-accent/20"
                    : "bg-white/5 border border-white/10 hover:bg-white/8"
                }`}
              >
                {s.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent text-white">
                      Core
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-5">
                  {s.icon}
                </div>

                <h3 className="font-serif text-xl font-semibold mb-3">
                  {s.title}
                </h3>

                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {s.result}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/8 text-white/60"
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
