"use client";

import AnimateIn from "./AnimateIn";

const cards = [
  {
    emoji: "🌍",
    title: "Global Reach",
    desc: "Bilingual professional (EN/PT), comfortable with international clients and remote collaboration.",
  },
  {
    emoji: "🕐",
    title: "US-Compatible Hours",
    desc: "Based in GMT-3. I work US-friendly schedules for real-time collaboration with your team.",
  },
  {
    emoji: "🧠",
    title: "Strategic Mindset",
    desc: "Driven by data and strategy. I bring a marketing perspective to every sales and support task.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div>
            <AnimateIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">
                About Me
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Turning leads into{" "}
                <span className="text-accent italic">opportunities</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-8 text-base text-text-muted leading-relaxed">
                I&apos;m a results-driven Virtual Assistant and Sales
                Development Representative based in Ilhabela, SP, Brazil.
                With hands-on experience in B2B prospecting, CRM management,
                and lead qualification, I help remote teams operate smoothly
                and hit their targets.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-5 text-base text-text-muted leading-relaxed">
                Beyond sales, I bring a creative edge — building branded social
                media content, developing visual identities, and crafting
                conversion-driven messaging across platforms.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Fluent in English & Portuguese",
                  "US-Compatible Timezone",
                  "Advertising & Marketing Student",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-border text-tag-text bg-tag-bg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — 3 stacked cards */}
          <div className="space-y-4">
            {cards.map((card, i) => (
              <AnimateIn key={i} delay={0.2 + i * 0.1} direction="right">
                <div className="bg-bg-card rounded-2xl border border-border p-6 hover:-translate-y-0.5 transition-all hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{card.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{card.title}</h3>
                      <p className="text-text-muted text-sm mt-1 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
