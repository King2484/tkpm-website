"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, Shield, Users, Clock, Eye, Check } from "lucide-react";
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

const steps = [
  {
    num: "01",
    title: "Project Scoping & Plan Formulation",
    description: "Formulating timeline tracks, detailed materials estimation log, trade sequences, and risk-management buffers.",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Vetting & Organizing Licensed Trades",
    description: "Aligning licensed professionals (carpenters, electricians, plasterers) to coordinate seamless execution.",
    icon: Users,
  },
  {
    num: "03",
    title: "Milestone Timelines & Client Updates",
    description: "Scheduling tasks, tracking deliverables, and providing transparent reports to landlords and investors.",
    icon: Clock,
  },
  {
    num: "04",
    title: "Quality Inspections & Project Delivery",
    description: "Applying rigid cosmetic standards testing, snagging logs clearance, final deep cleans, and handover.",
    icon: Eye,
  },
];

export default function ProjectManagement() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-60" />
        <div className="absolute top-[50%] right-[-15%] w-[800px] h-[800px] glow-sphere-navy opacity-45" />

        {/* Hero Section */}
        <section className="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto text-center z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6"
          >
            <Shield className="h-3.5 w-3.5 text-secondary" />
            <span>Structured Leadership</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-primary mb-6"
          >
            Project <span className="text-secondary">Management</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-luxury-muted text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed"
          >
            Let us manage the details. We schedule certified contractors, track milestones, execute strict quality assurance checks, and report transparently so you enjoy a completely stress-free property delivery.
          </motion.p>
        </section>

        {/* Section: Timeline and Image */}
        <section className="relative pb-24 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Timeline steps left */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-heading font-extrabold text-2xl text-primary mb-6">Our Management Lifecycle</h3>
            
            <div className="space-y-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={idx}
                    className="p-6 rounded-xl bg-luxury-alt border border-luxury-border flex gap-5 relative group"
                  >
                    <span className="absolute top-4 right-4 font-heading font-extrabold text-2xl text-primary/5 select-none group-hover:text-secondary/10 transition-colors">
                      {step.num}
                    </span>
                    <div className="h-10 w-10 rounded-lg bg-white border border-luxury-border text-primary flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-primary mb-1">{step.title}</h4>
                      <p className="text-luxury-muted text-xs md:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Custom generated project workspace blueprint image right */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[4/5]"
            >
              <img
                src="/project-workspace.png"
                alt="TKPM Project Management Workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="relative py-16 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 border-t border-luxury-border">
          <div className="p-8 md:p-12 rounded-xl bg-primary text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-luxury-card">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
                <Check className="h-4 w-4" />
                <span>Seamless Accountability</span>
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl">Ready to Discuss a Project?</h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
                Whether you have an upcoming refurbishment or a complex maintenance overhaul program, we handle the logistics, trades scheduling, budget checklists, and inspections.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-gold-glow transition-all shrink-0"
            >
              Start Planning Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
