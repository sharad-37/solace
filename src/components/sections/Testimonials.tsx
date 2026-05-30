"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Two minutes a day. That's all it took to start noticing I'd been running on empty for months. Solace didn't fix anything — it just helped me see.",
    name: "Maya R.",
    role: "Product designer · London",
    initial: "M",
    bg: "#9fe870",
    variant: "feature" as const,
  },
  {
    quote:
      "I used to journal in fits and starts. Aura asks the kind of questions that make me actually want to answer.",
    name: "Daniel K.",
    role: "Software engineer · Berlin",
    initial: "D",
    bg: "#ffc091",
    variant: "default" as const,
  },
  {
    quote:
      "After 60 days, I could see my whole emotional week at a glance. Sunday afternoons hit me hardest. I'd never have noticed.",
    name: "Priya S.",
    role: "Therapist in training · Mumbai",
    initial: "P",
    bg: "#38c8ff",
    variant: "default" as const,
  },
  {
    quote:
      "It feels like having a really patient friend who never forgets what you told them last week.",
    name: "Jordan A.",
    role: "Founder · Lisbon",
    initial: "J",
    bg: "#cdffad",
    variant: "dark" as const,
  },
  {
    quote:
      "I was sceptical of anything 'AI for feelings'. Solace earned my trust because it never tries to be clever — just kind.",
    name: "Aisha O.",
    role: "Writer · Lagos",
    initial: "A",
    bg: "#9fe870",
    variant: "default" as const,
  },
  {
    quote:
      "The voice journal is everything. I talk for ninety seconds while I walk and somehow it untangles half my week.",
    name: "Leo M.",
    role: "Teacher · Buenos Aires",
    initial: "L",
    bg: "#ffc091",
    variant: "feature" as const,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="stories"
      style={{
        backgroundColor: "var(--canvas)",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
            alignItems: "end",
            marginBottom: 72,
          }}
          className="testimonial-header"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--mute)",
                marginBottom: 24,
              }}
            >
              Stories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(36px, 6vw, 80px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              Small shifts.
              <br />
              <span style={{ color: "var(--ink-deep)" }}>Real lives.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--body)",
              margin: 0,
              maxWidth: 460,
            }}
          >
            Solace isn&apos;t a transformation story — it&apos;s a steady
            practice. Here&apos;s how it&apos;s landed for people quietly
            building it into their week.
          </motion.p>
        </div>

        {/* ── Testimonial grid ── */}
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={0.2 + i * 0.08} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-header {
          grid-template-columns: 1fr;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .testimonial-header {
            grid-template-columns: 1.4fr 1fr;
            gap: 64px;
          }
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .testimonial-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
