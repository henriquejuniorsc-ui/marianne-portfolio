"use client";

import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <AnimateIn>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-dark-muted">
            Get in Touch
          </span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Ready to scale your
            <br />
            <span className="text-accent italic">sales operation</span>?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
            I&apos;m available for remote opportunities worldwide.
            US-compatible timezone (GMT-3). Let&apos;s talk about how I can
            help you reach your goals.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email — primary */}
            <a
              href="mailto:mariannealegre029@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent-dark transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/25 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              mariannealegre029@gmail.com
            </a>
            {/* LinkedIn — outline dark */}
            <a
              href="https://www.linkedin.com/in/marianne-cristine-730a173aa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/50 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            {/* WhatsApp — green */}
            <a
              href="https://wa.me/5512991947673"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-whatsapp text-white font-semibold text-base hover:brightness-110 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-whatsapp/25 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
