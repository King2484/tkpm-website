"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Wrench, Shield, Sparkles, Check, ChevronRight, HardHat, Trees, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
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

const serviceCards = [
  {
    title: "Property Renovations",
    description: "Exceptional kitchen upgrades, luxury bathrooms, space extensions, and complete residential refurbishments.",
    href: "/renovations",
    icon: Hammer,
  },
  {
    title: "Property Maintenance",
    description: "Responsive repairs, scheduled upkeep, compliance testing, and preventative property protection.",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    title: "Project Management",
    description: "Complete hands-off trade management organizing material schedules, budgets, quality checks, and sign-off.",
    href: "/project-management",
    icon: Shield,
  },
  {
    title: "Property Sourcing",
    description: "Premium rental and acquisition matchmaking leveraging private landlords and off-market housing agencies.",
    href: "/property-sourcing",
    icon: Search,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[5%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-70" />
        <div className="absolute top-[30%] right-[-15%] w-[800px] h-[800px] glow-sphere-navy opacity-45" />
        <div className="absolute top-[70%] left-[-10%] w-[600px] h-[600px] glow-sphere-gold opacity-30" />
        
        {/* Luxury Hero Section */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold tracking-wider uppercase text-secondary shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>TK Property Management</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary leading-[1.1]"
            >
              Excellence in <br />
              <span className="text-secondary">Property Care</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-luxury-muted text-base md:text-lg max-w-xl font-body leading-relaxed"
            >
              Providing elite, dependable services across property renovations, ongoing maintenance, landscaping, cleaning, and complete project oversight. We handle the stress while preserving your property value.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary-hover text-white font-bold tracking-widest uppercase text-[10px] shadow-lg transition-all duration-300"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/maintenance"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white hover:bg-slate-50 text-primary font-bold border border-luxury-border tracking-widest uppercase text-[10px] shadow-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Luxury Hero Image Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[4/3]"
            >
              <img
                src="/hero-house.png"
                alt="Luxury Property Exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              
              {/* Floating gold element to represent quality */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glassmorphism-luxury rounded-xl flex items-center justify-between border-l-4 border-secondary shadow-lg">
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-primary">Fully Insured & Certified</h4>
                  <p className="text-[11px] font-semibold text-luxury-muted">Premium peace-of-mind guarantee</p>
                </div>
                <span className="h-9 w-9 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 shadow-gold-glow">
                  <Shield className="h-4.5 w-4.5" />
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: What We Do */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 border-t border-luxury-border/60">
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Our Solutions</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary">
              Full Range of Services
            </h2>
            <p className="text-luxury-muted text-sm md:text-base font-body leading-relaxed">
              We design, build, clean, and manage. Delivering reliable expertise across all aspects of residential and commercial assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  custom={idx}
                  whileHover={{ y: -8, boxShadow: "var(--shadow-luxury-hover)", borderColor: "var(--color-secondary)" }}
                  className="p-8 md:p-10 rounded-xl bg-white border border-luxury-border shadow-luxury-soft flex flex-col group cursor-pointer transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-8 shrink-0 bg-primary/5 border border-primary/10 text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-3">{service.title}</h3>
                  <p className="text-luxury-muted text-xs md:text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-auto pt-4 flex items-center gap-1.5 text-primary text-[10px] font-extrabold uppercase tracking-widest group-hover:text-secondary group-hover:gap-2 transition-all"
                  >
                    <span>Explore Section</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Landscaping & Cleaning Highlights Strip */}
          <div className="mt-12 p-8 md:p-10 rounded-xl bg-luxury-alt border border-luxury-border shadow-luxury-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-secondary uppercase tracking-widest">
                <Trees className="h-4 w-4" />
                <span>Outdoor & Exterior Styling</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary">Landscaping & Commercial Cleaning</h3>
              <p className="text-luxury-muted text-sm leading-relaxed max-w-3xl">
                We handle garden design, turfs, paving, weeding, patio setups, and professional interior/exterior deep cleaning (end-of-tenancy, pressure washing, window washing).
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right shrink-0">
              <Link
                href="/landscaping-cleaning"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-md transition-all duration-300"
              >
                <span>Landscaping & Cleaning</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Stats & Authority */}
        <section className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-bl-full pointer-events-none" />
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-secondary">Elite Standards</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                Trustworthy. <br />
                Professional. <br />
                Dependable.
              </h2>
              <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                TKPM bridges the gap between high-end architectural vision and dependable, day-to-day property maintenance. Homeowners, investors, and property businesses depend on us for consistent delivery.
              </p>
            </div>

            <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-heading font-extrabold text-4xl text-secondary block">500+</span>
                <span className="text-xs text-blue-100 uppercase tracking-widest font-bold">Properties Handled</span>
                <p className="text-blue-100/60 text-[11px] leading-relaxed">Renovations, maintenance programs, and daily upkeep.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-heading font-extrabold text-4xl text-secondary block">100%</span>
                <span className="text-xs text-blue-100 uppercase tracking-widest font-bold">Client Satisfaction</span>
                <p className="text-blue-100/60 text-[11px] leading-relaxed">Attentive project coordinators and vetted local trades.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-heading font-extrabold text-4xl text-secondary block">15+ Years</span>
                <span className="text-xs text-blue-100 uppercase tracking-widest font-bold">Industry Expertise</span>
                <p className="text-blue-100/60 text-[11px] leading-relaxed">Refining timelines, supplier relations, and project results.</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-heading font-extrabold text-4xl text-secondary block">24/7</span>
                <span className="text-xs text-blue-100 uppercase tracking-widest font-bold">Support Response</span>
                <p className="text-blue-100/60 text-[11px] leading-relaxed">Direct communication line for emergency building checks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Testimonials */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10">
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Client Feedback</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary">
              Trusted by Leading Property Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-xl bg-luxury-alt border border-luxury-border shadow-luxury-soft flex flex-col justify-between"
            >
              <p className="text-luxury-muted text-sm italic leading-relaxed mb-6">
                &ldquo;TKPM completed a kitchen and bathroom renovation on my rental home. They coordinated the plumbing, carpentering, and plastering trades flawlessly. The quality standard was exceptional.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 shadow-gold-glow">
                  MV
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary">Marcus Vance</h4>
                  <p className="text-[10px] font-semibold text-luxury-muted">Real Estate Investor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 rounded-xl bg-luxury-alt border border-luxury-border shadow-luxury-soft flex flex-col justify-between"
            >
              <p className="text-luxury-muted text-sm italic leading-relaxed mb-6">
                &ldquo;Their maintenance responsiveness has saved my company countless hours. Repairs are scheduled fast and completed professionally. Truly a reliable team.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 shadow-gold-glow">
                  SS
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary">Sophia Sterling</h4>
                  <p className="text-[10px] font-semibold text-luxury-muted">Residential Landlord</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Action Banner */}
        <section className="relative py-20 bg-luxury-alt border-t border-b border-luxury-border text-center z-10">
          <div className="max-w-xl mx-auto px-6 space-y-6">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary">
              Ready to Upgrade or Maintain Your Property?
            </h2>
            <p className="text-luxury-muted text-sm leading-relaxed">
              Contact us today to receive a free, no-obligation quote or to discuss our structured maintenance packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-primary hover:bg-primary-hover text-white font-bold tracking-widest uppercase text-[10px] shadow-md transition-all duration-300"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+12065550188"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-white hover:bg-slate-50 text-primary font-bold border border-luxury-border tracking-widest uppercase text-[10px] shadow-sm transition-all duration-300"
              >
                Call +1 (206) 555-0188
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
