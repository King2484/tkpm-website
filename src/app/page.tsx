"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Wrench, Shield, Check, ChevronRight, Truck, Search, Phone, Clock, Trees, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    title: "Property Maintenance & Repairs",
    description: "General property care, day-to-day repairs, lock replacements, plumbing checks, and 24/7 emergency call outs.",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    title: "Landscaping & Deep Cleaning",
    description: "Bespoke garden landscaping, lawn care, communal block deep cleans, jet washing, and heavy waste clearances.",
    href: "/landscaping-cleaning",
    icon: Trees,
  },
  {
    title: "Renovations & Alterations",
    description: "Quality kitchen modernisations, bathroom upgrades, interior decorating, and property alterations.",
    href: "/renovations",
    icon: Hammer,
  },
  {
    title: "Project Management",
    description: "Full trade supervision coordinating certified contractors, timelines, budgets, and quality inspections.",
    href: "/project-management",
    icon: Shield,
  },
  {
    title: "Property Sourcing",
    description: "Property acquisitions and tenant matchmaking across private landlord registries and off-market networks.",
    href: "/property-sourcing",
    icon: Search,
  },
  {
    title: "Man & Van Removals",
    description: "Dependable furniture transport, household removals, and clearance services for tenants and landlords.",
    href: "/man-and-van",
    icon: Truck,
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
        
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold tracking-wider uppercase text-secondary shadow-sm"
            >
              <Clock className="h-3.5 w-3.5" />
              <span>TK Property Maintenance</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary leading-[1.1]"
            >
              Reliable <br />
              <span className="text-secondary">Property Maintenance</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-luxury-muted text-base md:text-lg max-w-xl font-body leading-relaxed"
            >
              Dependable services across property care, maintenance, renovations, removals, and sourcing. 24/7 emergency call outs available anytime, even over the weekend for landlords and tenants.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary-hover text-white font-bold tracking-widest uppercase text-[10px] shadow-lg transition-all duration-300"
              >
                View Our Services
              </a>
              <a
                href="tel:074"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white hover:bg-slate-50 text-primary font-bold border border-luxury-border tracking-widest uppercase text-[10px] shadow-sm transition-all duration-300"
              >
                <Phone className="h-3.5 w-3.5 text-secondary" />
                <span>Call 074</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Image Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[4/3]"
            >
              <img
                src="/uk-semi-detached.png"
                alt="Typical UK Red-Brick Semi-Detached Family House"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* Section: What We Do */}
        <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 border-t border-luxury-border/60">
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Services Offered</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary">
              Full Spectrum Property Solutions
            </h2>
            <p className="text-luxury-muted text-sm md:text-base font-body leading-relaxed">
              Dependable, practical expertise for landlords, tenants, and property owners across London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-xl bg-white border border-luxury-border shadow-sm flex flex-col group cursor-pointer transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-6 shrink-0 bg-primary/5 border border-primary/10 text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-3">{service.title}</h3>
                  <p className="text-luxury-muted text-xs md:text-sm leading-relaxed mb-6 font-body">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-auto pt-2 flex items-center gap-1.5 text-primary text-[10px] font-extrabold uppercase tracking-widest group-hover:text-secondary group-hover:gap-2 transition-all"
                  >
                    <span>View Service</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Real Work Highlights Showcase */}
        <section className="relative py-24 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10 border-t border-luxury-border/60">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary block">
                Proof of Quality
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary">
                Real Property Results
              </h2>
              <p className="text-luxury-muted text-sm md:text-base font-body max-w-2xl leading-relaxed">
                Take a look at genuine transformations from our cleaning crews and landscaping architects across London and the North West.
              </p>
            </div>
            <Link
              href="/landscaping-cleaning"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md"
            >
              <span>Explore Cleaning & Grounds</span>
              <ArrowRight className="h-4 w-4 text-secondary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                title: "Paved Patio & Garden Design",
                tag: "Landscaping",
                desc: "Curved paving, brick borders, and fresh bark mulching.",
                img: "/cleaning/11.jpeg",
                badge: "Garden Transformation",
              },
              {
                title: "Apartment Entrance Deep Clean",
                tag: "Communal Cleaning",
                desc: "Mirror-finish buffed tiles, sanitised stairs, and spotless foyer.",
                img: "/cleaning/5.jpeg",
                badge: "Mirror Finish",
              },
              {
                title: "Bin Store Heavy Rubbish Clearance",
                tag: "Waste Clearance",
                desc: "Overflowing refuse cleared, jet-washed, and fully deodorised.",
                img: "/cleaning/4.jpeg",
                badge: "Before & After",
              },
              {
                title: "Residential Lawn & Perimeter Care",
                tag: "Grounds Care",
                desc: "Precision grass cutting, bush trimming, and neat frontage.",
                img: "/cleaning/2.jpeg",
                badge: "Street Appeal",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href="/landscaping-cleaning"
                className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-luxury-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image container - exact same aspect ratio for all cards */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {item.tag}
                  </span>
                  <span className="absolute bottom-3 left-3 text-secondary text-[11px] font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Card Content with equalized heights */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-primary group-hover:text-secondary transition-colors line-clamp-2 h-12 flex items-center">
                      {item.title}
                    </h3>
                    <p className="text-xs text-luxury-muted font-body leading-relaxed line-clamp-2 h-9 mt-1 text-ellipsis overflow-hidden">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-luxury-border/60 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">
                    <span>View Project</span>
                    <ChevronRight className="h-3 w-3 text-secondary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 24/7 Call Out Action Banner */}
        <section className="relative py-20 bg-primary text-white text-center z-10">
          <div className="max-w-xl mx-auto px-6 space-y-6">
            <span className="text-[10px] font-extrabold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
              24/7 Emergency Call Out
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
              Need Property Maintenance or Urgent Call Out?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-body">
              Available anytime, even over the weekend. Both landlords and tenants can call out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="tel:074"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold tracking-widest uppercase text-[10px] shadow-lg transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>Call 074 Now</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 tracking-widest uppercase text-[10px] transition-all duration-300"
              >
                Send Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
