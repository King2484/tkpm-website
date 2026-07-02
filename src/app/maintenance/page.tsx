"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Settings, PenTool, Sparkles, AlertCircle, Check } from "lucide-react";
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

const maintenanceItems = [
  {
    title: "General Property Care & Repairs",
    details: "Day-to-day carpentry, drywall patches, locks, custom cabinet door adjustments, and minor plumbing repairs.",
  },
  {
    title: "Scheduled Preventative Upkeep",
    details: "Bi-annual inspections, gutter clearing, drain sweeps, roof inspections, and heating systems checks.",
  },
  {
    title: "Safety & Compliance Checks",
    details: "Gas leak diagnostics, electrical circuitry testing, smoke alarm checks, and carbon monoxide alignments.",
  },
  {
    title: "24/7 Emergency Repairs",
    details: "Dedicated contact lines for immediate intervention (critical leaks, power shutdowns, boiler outages).",
  },
];

export default function Maintenance() {
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
            <Settings className="h-3.5 w-3.5 text-secondary" />
            <span>Reliable Upkeep</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-primary mb-6"
          >
            Our <span className="text-secondary">Services</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-luxury-muted text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            Preventative upkeep, certified repairs, safety compliance, and emergency restoration. We maintain structural and aesthetic integrity to support your long-term capital assets.
          </motion.p>
        </section>

        {/* Detailed Grid: Image Left, Cards Right */}
        <section className="relative pb-24 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Custom generated maintenance image representation */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[4/5]"
            >
              <img
                src="/maintenance-service.png"
                alt="TKPM Professional Maintenance Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
            </motion.div>
          </div>

          {/* Maintenance items lists */}
          <div className="lg:col-span-7 space-y-6">
            {maintenanceItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={idx}
                className="p-6 md:p-8 rounded-xl bg-luxury-alt border border-luxury-border flex gap-6 hover:border-secondary transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-white border border-luxury-border text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-luxury-muted text-xs md:text-sm leading-relaxed">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Action card */}
        <section className="relative py-16 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 border-t border-luxury-border">
          <div className="p-8 md:p-12 rounded-xl bg-primary text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-luxury-card">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4" />
                <span>Commercial Contracts Available</span>
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl">Professional Property Upkeep</h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
                We design bespoke inspection lists and repair frameworks tailored to portfolio investors and asset management firms. Contact our dispatch desk.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-gold-glow transition-all shrink-0"
            >
              Get a Proposal
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
