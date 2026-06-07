"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hammer, Sparkles, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: custom * 0.12,
    },
  }),
};

const renovationTypes = [
  {
    title: "Kitchen Remodeling",
    desc: "Luxury marble workspaces, bespoke cabinetry, high-end appliance integrations, and architectural lighting plans.",
  },
  {
    title: "Bathroom Upgrades",
    desc: "Spa-like enclosures, walk-in tiling showers, double-vanities, and premium water fixture designs.",
  },
  {
    title: "Full Home Refurbishments",
    desc: "Complete layout redesigns, flooring overhaul, drywall leveling, structural improvements, and premium paints.",
  },
];

export default function Renovations() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-60" />
        <div className="absolute top-[40%] right-[-15%] w-[800px] h-[800px] glow-sphere-navy opacity-45" />

        {/* Hero Section */}
        <section className="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto text-center z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6"
          >
            <Hammer className="h-3.5 w-3.5 text-secondary" />
            <span>Luxury Renovations</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-primary mb-6"
          >
            Property <span className="text-secondary">Renovations</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-luxury-muted text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            Transforming spaces with high-end craftsmanship. We execute modern kitchen overhauls, bathroom retrofits, and complete property extensions designed to last.
          </motion.p>
        </section>

        {/* Interactive Before & After Intro Section */}
        <section className="relative pt-6 pb-12 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 text-center">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase font-extrabold text-secondary tracking-widest block">Interactive Showcase</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Before & After Slider</h2>
            <p className="text-luxury-muted text-sm md:text-base leading-relaxed">
              Drag the divider bar in the center of the image to compare the original outdated kitchen space with our renovated luxury outcome.
            </p>
          </div>
        </section>

        {/* Full-Width Interactive Slider Widget */}
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden select-none bg-slate-900 border-y border-luxury-border z-10">
          {/* After Image (Base) */}
          <img
            src="/kitchen-after.png?v=11"
            alt="Luxurious Kitchen After Renovation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Before Image with Clip Path (Clipped overlay) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img
              src="/kitchen-before.png?v=11"
              alt="Outdated Kitchen Before Renovation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Slider Divider Line */}
          <div
            className="absolute inset-y-0 w-1 bg-secondary shadow-gold-glow pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-secondary shadow-2xl flex items-center justify-center text-secondary font-extrabold text-lg pointer-events-none">
              ↔
            </div>
          </div>

          {/* Invisible Range Input Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            aria-label="Before and after comparison slider"
          />

          {/* Badges - Floating on top corners of the screen */}
          <span className="absolute top-8 left-8 bg-primary/95 backdrop-blur-md px-5 py-2.5 rounded-sm text-white text-[11px] font-bold tracking-widest uppercase select-none z-10 border border-white/10 shadow-lg">
            Before
          </span>
          <span className="absolute top-8 right-8 bg-secondary/95 backdrop-blur-md px-5 py-2.5 rounded-sm text-white text-[11px] font-bold tracking-widest uppercase select-none z-10 border border-white/10 shadow-gold-glow">
            After
          </span>
        </section>

        {/* Renovation Specialties Grid Section */}
        <section className="relative py-24 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {renovationTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={idx}
                className="p-8 rounded-xl bg-luxury-alt border border-luxury-border flex flex-col"
              >
                <div className="h-8 w-8 rounded bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5">
                  <Check className="h-4.5 w-4.5 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2.5">{type.title}</h3>
                <p className="text-luxury-muted text-xs md:text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
