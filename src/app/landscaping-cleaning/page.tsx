"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trees, 
  Sparkles, 
  Check, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Trash2, 
  Maximize2, 
  X, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Flame, 
  SlidersHorizontal 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: custom * 0.1,
    },
  }),
};

// Real project gallery data using the provided authentic photos
const galleryItems = [
  {
    id: "patio-transformation",
    category: "landscaping",
    categoryLabel: "Garden & Patio Design",
    title: "Complete Garden & Hardscape Transformation",
    description: "Curved block-paved patio area, tiered brick borders, weed-suppressing wood bark mulch beds, and ornamental shrub planting.",
    src: "/cleaning/11.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Landscaping",
    badge: "Full Garden Renovation",
    location: "Residential Property",
  },
  {
    id: "communal-hallway",
    category: "cleaning",
    categoryLabel: "Communal Deep Cleaning",
    title: "Apartment Block Entrance & Tile Deep Clean",
    description: "High-gloss buffed and sanitized ceramic tile flooring, skirting board detailing, carpeted staircase vacuuming, and health & safety compliance.",
    src: "/cleaning/5.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Communal Cleaning",
    badge: "Spotless Mirror Finish",
    location: "Residential Apartment Block",
  },
  {
    id: "bin-clearance-after",
    category: "clearance",
    categoryLabel: "Waste & Bin Store Clearance",
    title: "Communal Bin Store Full Clearance & Sanitization",
    description: "Total rubbish bag clearance, heavy debris removal, deep floor sweep, pressure wash, and organized commercial wheelie bin bay layout.",
    src: "/cleaning/4.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Waste Clearance",
    badge: "Cleared & Sanitized",
    location: "Communal Undercroft Store",
  },
  {
    id: "lawn-perimeter",
    category: "landscaping",
    categoryLabel: "Grounds Maintenance",
    title: "Front Lawn Care & Boundary Shrub Pruning",
    description: "Precision-mown turf lawn, neat edging along curved brick wall and black perimeter railings, weed elimination, and shrub shaping.",
    src: "/cleaning/2.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Grounds Care",
    badge: "Street Appeal Restoration",
    location: "Suburban Street Frontage",
  },
  {
    id: "patio-close",
    category: "landscaping",
    categoryLabel: "Garden & Patio Design",
    title: "Patio Paving & Mulch Bed Hardscaping Detail",
    description: "Close-up perspective of interlocking paving slabs, curved retaining brickwork, fresh wood mulch dressing, and centre planter feature.",
    src: "/cleaning/10.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Landscaping",
    badge: "Hardscaping Detail",
    location: "Private Residence",
  },
  {
    id: "railings-turf",
    category: "landscaping",
    categoryLabel: "Grounds Maintenance",
    title: "Perimeter Turf & Boundary Shrub Planting",
    description: "Freshly cut turf lawn strip, cultivated topsoil bed, shrub planting along apartment boundary railings, and clean perimeter paving.",
    src: "/cleaning/1.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Grounds Care",
    badge: "Boundary Maintenance",
    location: "Apartment Complex",
  },
  {
    id: "breezeway-bins",
    category: "clearance",
    categoryLabel: "Bin Bay Organization",
    title: "Covered Breezeway Bin Store Management",
    description: "Organized communal wheelie bins aligned in covered residential passageway with clear pedestrian and cycle access routes.",
    src: "/cleaning/8.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Waste Clearance",
    badge: "Organized Bin Bay",
    location: "Liverpool Residential Scheme",
  },
  {
    id: "bin-bay-paved",
    category: "clearance",
    categoryLabel: "Bin Bay Organization",
    title: "Recessed Wheelie Bin Bay & Paving Wash",
    description: "Deep pressure-washed stone paving slabs, refuse and recycling bin stacking, and tidy courtyard alcove maintenance.",
    src: "/cleaning/6.jpeg",
    aspect: "aspect-[4/3]",
    tag: "Waste Clearance",
    badge: "Jet Washed & Tidy",
    location: "Commercial Courtyard",
  },
];

const serviceChecklists = [
  {
    title: "Grounds & Landscape Care",
    subtitle: "Outdoor maintenance for curb appeal & property value",
    icon: Trees,
    items: [
      "Lawn mowing, precision edging, weed removal, and re-turfing.",
      "Hardscaping: stone patios, paved walkways, decking, and timber fences.",
      "Wood bark mulch bed installation and ornamental shrub planting.",
      "Hedge trimming, pruning overgrown bushes, and seasonal clearances.",
      "Perimeter railing borders, communal garden care, and leaves clearing.",
    ],
  },
  {
    title: "Communal & Deep Cleaning",
    subtitle: "Sanitary, pristine environments for tenants & owners",
    icon: Sparkles,
    items: [
      "Communal entrance foyers, corridors, landings, and staircase cleans.",
      "Tile scrubbing, high-gloss floor buffing, and anti-slip treatments.",
      "Pre-tenancy and end-of-tenancy comprehensive deep cleans.",
      "High-pressure jet washing for patios, brick walls, driveways, and pathways.",
      "Internal & external window cleaning, sill wipes, and door frame detailing.",
    ],
  },
  {
    title: "Waste Clearance & Bin Stores",
    subtitle: "Rapid refuse removal, decontamination & fire compliance",
    icon: Trash2,
    items: [
      "Communal bin store clearance of overflowing bags, boxes, and bulk junk.",
      "Full floor sweep, disinfection, odor neutralisation, and jet washing.",
      "Bin bay organization, wheelie bin rotation, and recycling segregation.",
      "Fire escape path clearance ensuring 100% building regulation compliance.",
      "Responsible, licensed waste disposal with complete environmental duty of care.",
    ],
  },
];

export default function LandscapingCleaning() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCategory, setActiveCategory] = useState<"all" | "landscaping" | "cleaning" | "clearance">("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Filter gallery items
  const filteredGallery = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Touch and mouse handling for Before & After comparison slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clampedPos);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden min-h-screen">
        {/* Background Decorative Glows */}
        <div className="absolute top-[8%] left-[-15%] w-[650px] h-[650px] glow-sphere-gold opacity-60 pointer-events-none" />
        <div className="absolute top-[40%] right-[-15%] w-[800px] h-[800px] glow-sphere-navy opacity-40 pointer-events-none" />
        <div className="absolute top-[75%] left-[-10%] w-[600px] h-[600px] glow-sphere-gold opacity-30 pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold uppercase tracking-wider text-secondary shadow-sm"
              >
                <Trees className="h-4 w-4" />
                <span>Specialist Grounds & Cleaning Solutions</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary leading-[1.08]"
              >
                Pristine Grounds & <br />
                <span className="text-secondary">Deep Cleaning</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-luxury-muted text-base sm:text-lg max-w-2xl font-body leading-relaxed"
              >
                Elevate your property’s curb appeal and tenant satisfaction. From bespoke garden landscaping, lawn care, and hardscaping to communal hallway deep cleans and emergency waste clearances.
              </motion.p>

              {/* Key Trust Highlights */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2"
              >
                <div className="p-3.5 rounded-xl bg-luxury-alt border border-luxury-border">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                    <span>Fully Insured</span>
                  </div>
                  <p className="text-[11px] text-luxury-muted mt-1">Landlord & block compliance</p>
                </div>
                <div className="p-3.5 rounded-xl bg-luxury-alt border border-luxury-border">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span>Rapid Turnaround</span>
                  </div>
                  <p className="text-[11px] text-luxury-muted mt-1">Same-week bookings & 24/7 call out</p>
                </div>
                <div className="p-3.5 rounded-xl bg-luxury-alt border border-luxury-border col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                    <Sparkles className="h-4 w-4 text-secondary" />
                    <span>Real Results</span>
                  </div>
                  <p className="text-[11px] text-luxury-muted mt-1">Commercial & domestic grade</p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary-hover text-white font-bold tracking-widest uppercase text-xs shadow-lg transition-all"
                >
                  <span>Explore Real Works</span>
                  <ArrowRight className="h-4 w-4 text-secondary" />
                </a>
                <a
                  href="tel:074"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white hover:bg-slate-50 text-primary font-bold border border-luxury-border tracking-widest uppercase text-xs shadow-sm transition-all"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>Call 074 Direct</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Composite (Dual Real Photos with Perfect Responsive Fitting) */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Landscape Hero Image (Patio Garden Transformation 11.jpeg) */}
                <div className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-2xl aspect-[4/3] bg-slate-900 group">
                  <img
                    src="/cleaning/11.jpeg"
                    alt="TKPM Finished Garden Patio and Mulch Landscaping"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glassmorphism-luxury border border-white/30 text-primary shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary block">Featured Transformation</span>
                      <h3 className="font-heading font-extrabold text-sm sm:text-base text-primary">Hardscaping & Garden Architecture</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary text-white text-[10px] font-bold tracking-wide uppercase shrink-0">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Overlapping Floating Clean Hallway Inset (5.jpeg) */}
                <div className="absolute -bottom-8 -left-4 sm:-left-8 w-44 sm:w-56 md:w-64 rounded-xl overflow-hidden border-2 border-white shadow-2xl aspect-[3/4] bg-white hidden sm:block">
                  <img
                    src="/cleaning/5.jpeg"
                    alt="Pristine Polished Communal Entrance Tiling"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-primary/90 backdrop-blur-sm text-white">
                    <span className="text-[9px] font-bold text-secondary tracking-widest uppercase block">Communal Deep Clean</span>
                    <span className="text-[11px] font-bold block truncate">Mirror-Tile Polish</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-3 sm:-right-6 bg-white px-4 py-2.5 rounded-xl border border-luxury-border shadow-xl flex items-center gap-2.5 text-primary">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold font-heading">On-Site Real Work</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE BEFORE & AFTER SHOWCASE (Waste Clearance & Bin Store Restoration) */}
        <section className="relative py-20 md:py-28 bg-luxury-alt border-y border-luxury-border z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold uppercase tracking-wider text-primary">
                <Trash2 className="h-3.5 w-3.5 text-secondary" />
                <span>Heavy Clearance Transformation</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary">
                Before & After: Bin Store Clearance
              </h2>
              <p className="text-luxury-muted text-sm sm:text-base font-body leading-relaxed">
                See the authentic transformation of an overflowing, hazardous communal bin store restored to a spotless, fully compliant, sanitized storage facility. Drag the divider to compare.
              </p>
            </div>

            {/* Interactive Before & After Slider Widget */}
            <div className="max-w-4xl mx-auto">
              <div 
                ref={sliderContainerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[3/4] sm:aspect-[4/4] md:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-luxury-border shadow-2xl bg-slate-950 select-none cursor-ew-resize touch-none"
              >
                {/* AFTER IMAGE (Base Layer: 4.jpeg - Cleaned bin store) */}
                <img
                  src="/cleaning/4.jpeg"
                  alt="TKPM Cleaned Bin Store - After Rubbish Removal"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />

                {/* AFTER LABEL */}
                <div className="absolute top-5 right-5 z-20 px-4 py-2 rounded-lg bg-secondary/95 backdrop-blur-md text-white border border-white/20 shadow-lg pointer-events-none">
                  <span className="text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>AFTER CLEARANCE</span>
                  </span>
                </div>

                {/* BEFORE IMAGE (Clipped Layer: 3.jpeg - Overflowing rubbish) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <img
                    src="/cleaning/3.jpeg"
                    alt="TKPM Overflowing Bin Store - Before Rubbish Removal"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />

                  {/* BEFORE LABEL */}
                  <div className="absolute top-5 left-5 z-20 px-4 py-2 rounded-lg bg-primary/95 backdrop-blur-md text-white border border-white/20 shadow-lg pointer-events-none">
                    <span className="text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                      <Flame className="h-3.5 w-3.5 text-amber-400" />
                      <span>BEFORE CLEARANCE</span>
                    </span>
                  </div>
                </div>

                {/* SLIDER DIVIDER LINE */}
                <div
                  className="absolute inset-y-0 w-1 bg-secondary shadow-gold-glow pointer-events-none z-30"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* SLIDER HANDLE BUTTON */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-secondary shadow-2xl flex items-center justify-center text-secondary font-extrabold text-sm pointer-events-none">
                    ↔
                  </div>
                </div>

                {/* RANGE INPUT FOR ACCESSIBILITY & DIRECT TOUCH/CLICK */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                  aria-label="Compare before and after waste clearance"
                />

                {/* Bottom Quick Caption Bar */}
                <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 z-20 p-3 sm:p-4 rounded-xl bg-primary/90 backdrop-blur-md text-white border border-white/10 pointer-events-none flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                  <div className="text-xs">
                    <span className="font-bold text-secondary uppercase tracking-wider block">Project Scope:</span>
                    <span>Massive household & communal waste evacuation, floor sweep & decontamination.</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-300 shrink-0">
                    Drag slider or tap to inspect
                  </div>
                </div>
              </div>

              {/* Preset Quick-Buttons to inspect Before / Split / After */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setSliderPos(100)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    sliderPos >= 90 ? "bg-primary text-white shadow-md" : "bg-white border border-luxury-border text-primary hover:bg-slate-50"
                  }`}
                >
                  Show 100% Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    sliderPos > 30 && sliderPos < 70 ? "bg-secondary text-white shadow-md" : "bg-white border border-luxury-border text-primary hover:bg-slate-50"
                  }`}
                >
                  50/50 Split View
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(0)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    sliderPos <= 10 ? "bg-primary text-white shadow-md" : "bg-white border border-luxury-border text-primary hover:bg-slate-50"
                  }`}
                >
                  Show 100% After
                </button>
              </div>

              {/* Three Stat Cards under Before/After */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
                <div className="bg-white p-5 rounded-xl border border-luxury-border shadow-sm text-center">
                  <span className="font-heading font-extrabold text-2xl md:text-3xl text-secondary block">100%</span>
                  <span className="text-xs font-bold uppercase text-primary tracking-wide block mt-1">Fire Hazard Neutralized</span>
                  <p className="text-[11px] text-luxury-muted mt-1">Egress doors and pathways cleared to strict UK safety codes.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-luxury-border shadow-sm text-center">
                  <span className="font-heading font-extrabold text-2xl md:text-3xl text-secondary block">Same-Day</span>
                  <span className="text-xs font-bold uppercase text-primary tracking-wide block mt-1">Emergency Dispatch</span>
                  <p className="text-[11px] text-luxury-muted mt-1">Full team mobilization with heavy-duty disposal equipment.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-luxury-border shadow-sm text-center">
                  <span className="font-heading font-extrabold text-2xl md:text-3xl text-secondary block">Licensed</span>
                  <span className="text-xs font-bold uppercase text-primary tracking-wide block mt-1">Environment Agency Waste</span>
                  <p className="text-[11px] text-luxury-muted mt-1">Certified transfer notes and legal waste management.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* REAL WORK PHOTO GALLERY (All Screen Sizes Responsive Grid) */}
        <section id="gallery" className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Authentic On-Site Portfolio</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary">
              Real Work Across Our Sites
            </h2>
            <p className="text-luxury-muted text-sm sm:text-base font-body leading-relaxed">
              Explore authentic photography from recent residential gardens, communal block cleans, and tenancy clearance projects. Every image reflects our exacting standard of finish.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Projects" },
                { id: "landscaping", label: "Grounds & Landscaping" },
                { id: "cleaning", label: "Communal Cleaning" },
                { id: "clearance", label: "Waste Clearance & Bins" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-luxury-alt border border-luxury-border text-luxury-muted hover:text-primary hover:border-secondary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid - Fully Fitted with Uniform Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-full rounded-2xl overflow-hidden bg-white border border-luxury-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Image Container with Uniform 4:3 Aspect Ratio */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900 shrink-0">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {item.tag}
                      </span>
                      <span className="p-1.5 rounded-full bg-white/80 backdrop-blur-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Bottom In-Image Badge */}
                    <div className="absolute bottom-3 left-3 text-secondary text-[11px] font-bold uppercase tracking-wider pointer-events-none">
                      {item.badge}
                    </div>
                  </div>

                  {/* Text Details Card Bottom with Aligned Heights */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-base text-primary group-hover:text-secondary transition-colors line-clamp-2 h-12 flex items-center">
                        {item.title}
                      </h4>
                      <p className="text-luxury-muted text-xs leading-relaxed font-body line-clamp-2 h-9 mt-1 text-ellipsis overflow-hidden">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 mt-4 border-t border-luxury-border/60 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-semibold text-xs text-slate-600 truncate max-w-[130px]">{item.location}</span>
                      <span className="font-bold text-secondary group-hover:underline flex items-center gap-1 text-[10px] uppercase tracking-wider shrink-0">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* DETAILED CHECKLISTS: SERVICES GRID */}
        <section className="relative py-20 bg-luxury-alt border-t border-luxury-border z-10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Scope & Specifications</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Comprehensive Upkeep Checklists
              </h2>
              <p className="text-luxury-muted text-sm sm:text-base font-body leading-relaxed">
                Everything required to keep residential schemes, apartment blocks, and private homes in immaculate condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceChecklists.map((category, idx) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={idx}
                    className="p-8 rounded-2xl bg-white border border-luxury-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-6">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-primary mb-1">
                        {category.title}
                      </h3>
                      <p className="text-xs text-luxury-muted mb-6 font-body">
                        {category.subtitle}
                      </p>

                      <div className="space-y-3.5">
                        {category.items.map((item, id) => (
                          <div key={id} className="flex items-start gap-3">
                            <span className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                              <Check className="h-3 w-3 stroke-[3]" />
                            </span>
                            <span className="text-xs font-semibold text-slate-700 leading-relaxed font-body">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-luxury-border">
                      <a
                        href="tel:074"
                        className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                      >
                        <span>Book for your property</span>
                        <ArrowRight className="h-3.5 w-3.5 text-secondary" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ACTION CTA BANNER */}
        <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-2xl bg-primary text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 max-w-2xl text-center lg:text-left z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20 inline-block">
                Direct Landlord & Tenant Line
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
                Need Garden Landscaping or Emergency Cleaning?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-body">
                Our mobile crews are equipped with commercial pressure washers, rotary scrubbers, and landscaping equipment ready for swift deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10 w-full sm:w-auto">
              <a
                href="tel:074"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold tracking-widest uppercase text-xs shadow-lg transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call 074 Now</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 tracking-widest uppercase text-xs transition-all text-center"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL FOR HIGH-RES IMAGE INSPECTION */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 cursor-default"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Image Box */}
                <div className="relative w-full max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                {/* Modal Caption Details */}
                <div className="p-6 sm:p-8 space-y-3 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary px-3 py-1 rounded bg-secondary/10">
                      {selectedImage.categoryLabel}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {selectedImage.location}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-primary">
                    {selectedImage.title}
                  </h3>
                  <p className="text-luxury-muted text-xs sm:text-sm leading-relaxed font-body">
                    {selectedImage.description}
                  </p>
                  <div className="pt-3 flex justify-end">
                    <a
                      href="tel:074"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-secondary" />
                      <span>Inquire About This Service</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
