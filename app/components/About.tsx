"use client";

import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div>
            <AnimateIn>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">
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
              <p className="mt-8 text-lg text-text-muted leading-relaxed">
                I&apos;m a results-driven Virtual Assistant and Sales
                Development Representative based in Ilhabela, SP, Brazil.
                With hands-on experience in B2B prospecting, CRM management,
                and lead qualification, I help remote teams operate smoothly
                and hit their targets.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
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
                    className="px-4 py-2 rounded-full bg-accent/8 text-accent text-sm font-semibold border border-accent/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — visual card */}
          <AnimateIn delay={0.3} direction="right">
            <div className="bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Reach</h3>
                    <p className="text-text-muted text-sm mt-1">
                      Bilingual professional (EN/PT) bridging communication
                      between US companies and LATAM markets.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-border" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">US-Compatible Hours</h3>
                    <p className="text-text-muted text-sm mt-1">
                      Based in GMT-3, with full availability during US Eastern
                      and Central business hours.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-border" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Strategic Mindset</h3>
                    <p className="text-text-muted text-sm mt-1">
                      Currently studying Advertising & Marketing, combining
                      sales acumen with creative communication strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
