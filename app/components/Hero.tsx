"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Clients Assisted Daily" },
  { value: "100%", label: "Remote Ready" },
  { value: "2", label: "Languages (EN/PT)" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-light/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/8 border border-accent/15 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent tracking-wide">
              Available for Remote Opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-accent italic">Marianne</span>
            <br />
            Silveira
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-lg lg:text-xl text-text-muted max-w-xl leading-relaxed"
          >
            I help B2B companies{" "}
            <span className="text-text font-medium">
              generate qualified leads
            </span>{" "}
            and{" "}
            <span className="text-text font-medium">
              streamline sales operations
            </span>{" "}
            — remotely, from Brazil.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent-dark transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/25"
            >
              Let&apos;s Work Together
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border text-text font-semibold text-base hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
            >
              See My Work
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-accent leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
