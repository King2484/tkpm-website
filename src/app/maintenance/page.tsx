"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Check, ChevronDown, Hammer, Trees, ClipboardList, Search, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: custom * 0.05,
    },
  }),
};

const servicesData = [
  {
    id: "maintenance",
    label: "Property Maintenance",
    title: "Property Maintenance Services",
    description: "Preventative upkeep, certified repairs, safety compliance, and emergency restoration. We maintain structural and aesthetic integrity to support your long-term capital assets.",
    icon: Settings,
    items: [
      "General Property Care & Repairs: Day-to-day carpentry, drywall patches, locks, custom cabinet adjustments, and minor plumbing repairs.",
      "Scheduled Preventative Upkeep: Bi-annual inspections, gutter clearing, drain sweeps, roof inspections, and heating checks.",
      "Safety & Compliance Checks: Gas leak diagnostics, electrical circuitry testing, smoke alarm checks, and carbon monoxide alignments.",
      "24/7 Emergency Repairs: Dedicated contact lines for immediate intervention (critical leaks, power shutdowns, boiler outages)."
    ],
    image: "/maintenance-service.png",
    cta: "Book Maintenance"
  },
  {
    id: "renovations",
    label: "Home Renovations",
    title: "Luxury Home Renovations",
    description: "Transforming spaces with high-end craftsmanship. We execute modern kitchen overhauls, bathroom retrofits, and complete property extensions designed to last.",
    icon: Hammer,
    items: [
      "Kitchen Remodeling: Luxury marble workspaces, bespoke cabinetry, high-end appliance integrations, and architectural lighting plans.",
      "Bathroom Upgrades: Spa-like enclosures, walk-in tiling showers, double-vanities, and premium water fixture designs.",
      "Full Home Refurbishments: Complete layout redesigns, flooring overhaul, drywall leveling, structural improvements, and premium paints."
    ],
    image: "/kitchen-after.png",
    cta: "Get a Renovation Quote"
  },
  {
    id: "landscaping",
    label: "Landscaping & Cleaning",
    title: "Landscaping & Commercial Cleaning",
    description: "Enhance the beauty and street appeal of your property. We provide professional landscape architecture, regular garden maintenance, and deep-cleaning washes.",
    icon: Trees,
    items: [
      "Landscaping & Garden Design: Bespoke garden layout design, softscaping, plants selection, paving, patios, and decking.",
      "Professional Cleaning Solutions: Pre-sale property deep-cleans, end-of-tenancy detailing, pressure washing, building washes, and gutter clearing."
    ],
    image: "/property-sourcing.png",
    cta: "Request Landscaping & Cleaning"
  },
  {
    id: "management",
    label: "Project Management",
    title: "Complete Project Management",
    description: "Let us manage the details. We schedule certified contractors, track milestones, execute strict quality assurance checks, and report transparently so you enjoy a completely stress-free property delivery.",
    icon: ClipboardList,
    items: [
      "Project Scoping & Plan Formulation: Formulating timeline tracks, detailed materials estimation log, trade sequences, and risk-management buffers.",
      "Vetting & Organizing Licensed Trades: Aligning licensed professionals (carpenters, electricians, plasterers) to coordinate seamless execution.",
      "Milestone Timelines & Client Updates: Scheduling tasks, tracking deliverables, and providing transparent reports to landlords and investors.",
      "Quality Inspections & Project Delivery: Applying rigid cosmetic standards testing, snagging logs clearance, final deep cleans, and handover."
    ],
    image: "/hero-house.png",
    cta: "Request Project Management"
  },
  {
    id: "sourcing",
    label: "Property Sourcing",
    title: "Bespoke Property Sourcing",
    description: "Premium rental and acquisition matchmaking leveraging private landlords and off-market housing agencies.",
    icon: Search,
    items: [
      "Intake Assessment: Analyzing purchase vs. rent budgets, bedroom needs, and priority locations.",
      "Agency & Landlord Matching: Filtering off-market properties using our database of private housing networks.",
      "Matchmaking Handover: Direct coordination and tours scheduled to help you secure the ideal estate."
    ],
    image: "/property-sourcing.png",
    cta: "Launch Sourcing Wizard",
    href: "/property-sourcing"
  }
];

export default function Maintenance() {
  const [activeService, setActiveService] = useState("maintenance");

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden min-h-screen">
        {/* Background Decorative Glows */}
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-60 pointer-events-none" />
        <div className="absolute top-[50%] right-[-15%] w-[700px] h-[700px] glow-sphere-navy opacity-45 pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 pt-28 pb-20 md:pt-36 z-10 relative">
          
          {/* Header Title */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-left mb-6"
          >
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight text-primary">
              Our <span className="text-secondary">Services</span>
            </h1>
          </motion.div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
            
            {/* Left Sidebar (Service Directory List) */}
            <div className="hidden lg:block lg:col-span-4 space-y-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary font-heading block mb-6 px-1">
                  Services
                </span>
                
                {/* Clean Vertical list matching screenshot */}
                <div className="flex flex-col border-l border-luxury-border/60">
                  {servicesData.map((service) => {
                    const isSelected = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`text-left py-4.5 px-6 font-heading font-bold text-xl md:text-2xl transition-all border-l-2 -ml-[1.5px] cursor-pointer block ${
                          isSelected
                            ? "text-primary border-secondary bg-luxury-alt/50"
                            : "text-luxury-muted border-transparent hover:text-primary hover:border-luxury-border/80"
                        }`}
                      >
                        {service.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Panel (Details Panel or Inline Collapse on Mobile) */}
            <div className="lg:col-span-8">
              {/* Desktop Detail View */}
              <div className="hidden lg:block">
                <AnimatePresence mode="wait">
                  {servicesData.map((service) => {
                    if (service.id !== activeService) return null;
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10"
                      >
                        {/* Header Details */}
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary">
                            <IconComponent className="h-4 w-4 text-secondary" />
                            <span>{service.title}</span>
                          </div>
                          <h2 className="font-heading font-extrabold text-3xl xl:text-4xl text-primary font-body">
                            {service.label}
                          </h2>
                          <p className="text-luxury-muted text-base font-body leading-relaxed max-w-3xl">
                            {service.description}
                          </p>
                        </div>

                        {/* Split Sub-items list & Image */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                          <div className="md:col-span-7 space-y-4">
                            {service.items.map((bullet, idx) => {
                              const [title, desc] = bullet.split(": ");
                              return (
                                <div key={idx} className="p-5 rounded-xl bg-luxury-alt border border-luxury-border flex gap-4 hover:border-secondary transition-all">
                                  <div className="h-8 w-8 rounded-lg bg-white border border-luxury-border text-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                                    <Check className="h-4.5 w-4.5 text-secondary" />
                                  </div>
                                  <div>
                                    <h4 className="font-heading font-bold text-sm text-primary mb-1">{title}</h4>
                                    <p className="text-luxury-muted text-xs leading-relaxed font-body">{desc}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[4/5] bg-luxury-alt">
                            <img
                              src={service.image}
                              alt={service.label}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                          </div>
                        </div>

                        {/* CTA Banner inside details */}
                        <div className="p-8 rounded-xl bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury-card">
                          <div className="space-y-1.5 text-left">
                            <h4 className="font-heading font-bold text-lg">Ready to discuss your request?</h4>
                            <p className="text-blue-100 text-xs font-body">Contact our lead desk to review plans or coordinate visits.</p>
                          </div>
                          {service.href ? (
                            <Link
                              href={service.href}
                              className="px-6 py-3.5 rounded-md bg-secondary hover:bg-secondary-hover text-primary font-bold text-[10px] tracking-widest uppercase shadow-gold-glow transition-all shrink-0 text-center"
                            >
                              {service.cta}
                            </Link>
                          ) : (
                            <Link
                              href="/contact"
                              className="px-6 py-3.5 rounded-md bg-secondary hover:bg-secondary-hover text-primary font-bold text-[10px] tracking-widest uppercase shadow-gold-glow transition-all shrink-0 text-center"
                            >
                              {service.cta}
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Mobile Collapsible View (renders expanded inline below each active item on smaller devices) */}
              <div className="block lg:hidden">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary font-heading block mb-5 px-1.5">
                  Services
                </span>
                
                <div className="flex flex-col border-l border-luxury-border/60">
                  {servicesData.map((service) => {
                    const isSelected = activeService === service.id;
                    return (
                      <div key={service.id} className="w-full -ml-[1.5px]">
                        {/* Mobile Accordion Header */}
                        <button
                          onClick={() => setActiveService(isSelected ? "" : service.id)}
                          className={`w-full text-left py-4 px-6 font-heading font-bold text-xl flex justify-between items-center transition-all border-l-2 ${
                            isSelected 
                              ? "text-primary border-secondary bg-luxury-alt/40" 
                              : "text-luxury-muted border-transparent"
                          }`}
                        >
                          <span>{service.label}</span>
                          <ChevronDown className={`h-4.5 w-4.5 text-secondary transition-transform duration-300 ${isSelected ? "rotate-180" : ""}`} />
                        </button>

                        {/* Mobile Accordion Expanded Body */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6 pt-1 px-6">
                                <p className="text-luxury-muted text-xs md:text-sm font-body leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
