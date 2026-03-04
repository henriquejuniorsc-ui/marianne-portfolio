"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Clients Assisted in B2B" },
  { value: "100%", label: "Remote Ready" },
  { value: "2", label: "Languages (EN | PT)" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FCF9F6] via-bg-warm to-bg-warm">
      {/* Subtle warm ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full bg-white/70 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-36 lg:pt-44 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-bg mb-8"
          >
            <span className="text-green text-sm">&#10022;</span>
            <span className="text-sm font-semibold text-green">
              Available for Remote Opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-text"
          >
            <span className="font-sans">Hi, I&apos;m</span>{" "}
            <span className="font-serif text-accent italic">Marianne</span>
            <br />
            <span className="font-sans">Silveira</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-lg lg:text-xl text-text-muted max-w-xl leading-relaxed"
          >
            I help B2B companies{" "}
            <span className="text-text font-semibold">
              get more qualified leads
            </span>{" "}
            and{" "}
            <span className="text-text font-semibold">
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
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-4xl lg:text-5xl font-bold text-accent leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-text-muted font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
