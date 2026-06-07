"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trees, Sparkles, Check } from "lucide-react";
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

const serviceDetails = [
  {
    category: "Landscaping & Garden Design",
    items: [
      "Bespoke garden layout design, softscaping, and plants selection.",
      "Hardscaping: paving, stone patios, decking, and wooden fences.",
      "Lawn care programs, structural turfing, and weed clearing.",
    ],
  },
  {
    category: "Professional Cleaning Solutions",
    items: [
      "Pre-sale property deep-cleans and end-of-tenancy detailing.",
      "High-pressure water sweeps for paths, patios, walls, and brickwork.",
      "Window cleaning, building washes, and roof gutter clearing.",
    ],
  },
];

export default function LandscapingCleaning() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-60" />
        <div className="absolute top-[50%] right-[-15%] w-[700px] h-[700px] glow-sphere-navy opacity-45" />

        {/* Hero Section */}
        <section className="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto text-center z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6"
          >
            <Trees className="h-3.5 w-3.5 text-secondary" />
            <span>Outdoor & Upkeep</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-primary mb-6"
          >
            Landscaping & <span className="text-secondary">Cleaning</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-luxury-muted text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            Enhance the beauty and street appeal of your property. We provide professional landscape architecture, regular garden maintenance, and deep-cleaning washes.
          </motion.p>
        </section>

        {/* Detailed Grid: List Left, Image Right */}
        <section className="relative pb-24 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Details left */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-heading font-extrabold text-2xl text-primary mb-6">Our Services Checklist</h3>
            
            <div className="space-y-6">
              {serviceDetails.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={idx}
                  className="p-6 md:p-8 rounded-xl bg-luxury-alt border border-luxury-border shadow-sm"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="h-6 w-6 rounded bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                      <Sparkles className="h-4 w-4 text-secondary" />
                    </span>
                    <h4 className="font-heading font-bold text-lg text-primary">{cat.category}</h4>
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((item, id) => (
                      <div key={id} className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-white border border-luxury-border text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check className="h-3.5 w-3.5 text-secondary" />
                        </span>
                        <span className="text-sm font-semibold text-slate-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom generated landscaping image right */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[4/5]"
            >
              <img
                src="/landscaping-garden.png"
                alt="TKPM Professional Landscaping Garden"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Action card */}
        <section className="relative py-16 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 border-t border-luxury-border">
          <div className="p-8 md:p-12 rounded-xl bg-primary text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-luxury-card">
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-2xl md:text-3xl">Enhance Your Street Appeal</h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
                Whether you need a complete garden transformation or deep-cleaning washes to prepare your property for sale, our teams deliver high-fidelity cosmetic outcomes.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-gold-glow transition-all shrink-0"
            >
              Request outdoor quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
