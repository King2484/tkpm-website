"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Check, ChevronDown, Hammer, Trees, ClipboardList, Search, Truck, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    title: "Property Maintenance & Care",
    description: "General property care and repair, preventative upkeep, safety compliance, cleaning, and garden landscaping for landlords and homeowners.",
    icon: Settings,
    items: [
      "General Property Care & Repairs: Day-to-day joinery & woodwork, lock changes, door adjustments, minor plumbing repairs, boiler call-outs, and paintwork touch-ups.",
      "Cleaning & Sanitation Services: Pre-tenancy deep cleans, end-of-tenancy detailing, communal area cleaning, window washing, and pressure washing.",
      "Landscaping & Garden Care: Garden upkeep, lawn mowing, hedge trimming, weed clearance, patio cleaning, and outdoor plant maintenance.",
      "24/7 Emergency Call Out: Available anytime, even over the weekend. Both landlords and tenants can call out for critical leaks, heating breakdowns, or lockouts."
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    cta: "Book Maintenance or Call Out"
  },
  {
    id: "renovations",
    label: "Renovations & Alterations",
    title: "Property Renovations & Refurbishment",
    description: "Quality refurbishment services across residential properties. Kitchen modernisations, bathroom upgrades, decorating, and property extensions.",
    icon: Hammer,
    items: [
      "Kitchen Modernisations: Fitted cabinets, stone worktops, appliance installations, tiling, and lighting.",
      "Bathroom Upgrades: Walk-in showers, bath replacements, wall and floor tiling, and sanitaryware fitting.",
      "Full Property Refurbishments: Plastering, painting and decorating, floor layment, internal door replacements, and structural layout adjustments."
    ],
    image: "/kitchen-after.png",
    cta: "Get a Renovation Quote"
  },
  {
    id: "management",
    label: "Project Management",
    title: "Project Management & Supervision",
    description: "End-to-end supervision of property repairs and building works. We coordinate certified trade contractors, track progress, and inspect finished quality.",
    icon: ClipboardList,
    items: [
      "Project Planning & Scoping: Setting realistic project timelines, material costs, and trade schedules.",
      "Vetting Certified Trades: Coordinating qualified carpenters, electricians, plumbers, and plasterers.",
      "Quality Assurance & Snagging: Inspections throughout building works to clear snagging items before final sign-off."
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    cta: "Request Project Management"
  },
  {
    id: "sourcing",
    label: "Property Sourcing",
    title: "Property Sourcing & Acquisitions",
    description: "Matchmaking search service for buyers and tenants seeking suitable properties across private landlord networks.",
    icon: Search,
    items: [
      "Target Criteria Intake: Defining search parameters, location choices, target budgets, and occupancy needs.",
      "Landlord Network Search: Scanning private databases and unlisted properties to isolate matches.",
      "Inspection & Handover: Viewing properties in person and coordinating tenancy/sales paperwork."
    ],
    image: "/uk-terraced-house.png",
    cta: "Launch Sourcing Desk",
    href: "/property-sourcing"
  },
  {
    id: "man-and-van",
    label: "Man & Van Services",
    title: "Man & Van Removals",
    description: "Reliable furniture transport, household removals, and clearance services for tenants, landlords, and homebuyers.",
    icon: Truck,
    items: [
      "Household & Flat Removals: Loading, transport, and unloading for home relocations.",
      "Furniture Transport: Pick-up and delivery of sofas, beds, wardrobes, and heavy appliances.",
      "Tenancy Clearance: House clearances and rubbish removal prior to tenancy end dates."
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    cta: "Book Man & Van",
    href: "/man-and-van"
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
            <p className="text-luxury-muted text-sm md:text-base mt-2 max-w-2xl">
              Dependable property care, maintenance, renovations, removals, and sourcing services for landlords, tenants, and homeowners.
            </p>
          </motion.div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
            
            {/* Left Sidebar (Service Directory List) */}
            <div className="hidden lg:block lg:col-span-4 space-y-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary font-heading block mb-6 px-1">
                  Services
                </span>
                
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

            {/* Right Panel */}
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

                        {/* 24/7 Call Out Banner */}
                        <div className="p-8 rounded-xl bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury-card">
                          <div className="space-y-1.5 text-left">
                            <h4 className="font-heading font-bold text-lg">Need Immediate Assistance?</h4>
                            <p className="text-blue-100 text-xs font-body">
                              24/7 Emergency Call Out available anytime, even over the weekend. Both landlords and tenants can call out.
                            </p>
                          </div>
                          <a
                            href="tel:074"
                            className="px-6 py-3.5 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-md transition-all shrink-0 text-center"
                          >
                            Call 074
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Mobile Collapsible View */}
              <div className="block lg:hidden">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary font-heading block mb-5 px-1.5">
                  Services
                </span>
                
                <div className="flex flex-col border-l border-luxury-border/60">
                  {servicesData.map((service) => {
                    const isSelected = activeService === service.id;
                    return (
                      <div key={service.id} className="w-full -ml-[1.5px]">
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

                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-8 pt-3 px-6 space-y-5">
                                <p className="text-luxury-muted text-xs font-body leading-relaxed">
                                  {service.description}
                                </p>

                                <div className="relative rounded-xl overflow-hidden border border-luxury-border shadow-luxury-soft h-44 bg-luxury-alt">
                                  <img
                                    src={service.image}
                                    alt={service.label}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <div className="space-y-3.5 pt-1">
                                  {service.items.map((bullet, idx) => {
                                    const [title, desc] = bullet.split(": ");
                                    return (
                                      <div key={idx} className="p-4 rounded-xl bg-luxury-alt border border-luxury-border flex gap-3 hover:border-secondary transition-all">
                                        <div className="h-7 w-7 rounded-lg bg-white border border-luxury-border text-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                                          <Check className="h-4 w-4 text-secondary" />
                                        </div>
                                        <div>
                                          <h4 className="font-heading font-bold text-xs text-primary mb-0.5">{title}</h4>
                                          <p className="text-luxury-muted text-[11px] leading-relaxed font-body">{desc}</p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="pt-2">
                                  <Link
                                    href={service.href || "/contact"}
                                    className="w-full block text-center py-3.5 rounded-md bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all"
                                  >
                                    {service.cta}
                                  </Link>
                                </div>
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
