"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Key, Building, Check, ArrowRight, ArrowLeft, 
  Shield, CheckCircle2, AlertCircle, Phone, Mail, 
  DollarSign, ChevronDown, HelpCircle, 
  User, MapPin, Calendar, Star, Sparkles, Home
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation Presets
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: custom * 0.1,
    },
  }),
};

const slideTransition = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
};

const timelineSteps = [
  {
    num: "01",
    title: "Define Target Criteria",
    description: "Submit details about your search type (rent or buy), target locations, budget cap, and mandatory amenities.",
  },
  {
    num: "02",
    title: "Leverage Vetted Networks",
    description: "We scan private landlord registers and partner housing agency databases to isolate matches before they go public.",
  },
  {
    num: "03",
    title: "Rigid Property Audits",
    description: "A dedicated sourcing agent visits the properties in person to verify cosmetics, plumbing, electrical, and legal docs.",
  },
  {
    num: "04",
    title: "Finalize Contract & Handover",
    description: "We negotiate optimal terms, review rental/sales agreements, manage documentation, and hand over the keys.",
  },
];

const faqs = [
  {
    question: "How long does it take to source a suitable property?",
    answer: "Typically, we deliver a matched shortlist of 3-5 high-potential properties within 7 to 14 days of receiving your intake form. The entire process from search initiation to key handover generally takes 3 to 4 weeks depending on client feedback.",
  },
  {
    question: "Do you charge any upfront consultation fees?",
    answer: "No. We operate strictly on a success-only model. You pay nothing upfront, and our service fee is only due once we secure a property you want to rent or buy, and the contract is officially signed.",
  },
  {
    question: "What happens if I reject all sourced properties?",
    answer: "If you decide none of the properties on our shortlist fit your requirements, you are under no obligation to proceed and will not be charged. We can refine the search parameters and issue a secondary shortlist, or terminate the search.",
  },
  {
    question: "Do you inspect properties in person?",
    answer: "Yes, absolutely. We do not source properties blindly. A dedicated agent physically visits and inspects each property to audit structural systems, look for dampness/snagging issues, verify layout spacing, and film virtual tours for you.",
  },
  {
    question: "How do you get access to off-market properties?",
    answer: "Over the last 15 years, TKPM has built tight relationships with private landlords, estate developers, and corporate housing agencies. Many landlords list directly with us to avoid public listing fees and secure pre-screened clients.",
  },
];

export default function PropertySourcing() {
  // Multi-step form state
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "rent",
    propertyType: "apartment",
    location: "",
    minBudget: "",
    maxBudget: "",
    bedrooms: "1",
    bathrooms: "1",
    moveDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleTypeSelect = (type: "rent" | "buy") => {
    setForm({ ...form, type });
  };

  const handlePropertyTypeSelect = (propertyType: string) => {
    setForm({ ...form, propertyType });
  };

  const handleBedSelect = (bedrooms: string) => {
    setForm({ ...form, bedrooms });
  };

  const handleBathSelect = (bathrooms: string) => {
    setForm({ ...form, bathrooms });
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!form.location) {
        setStatus("error");
        setErrorMessage("Please enter your desired location or neighborhoods.");
        return;
      }
    } else if (step === 2) {
      if (!form.maxBudget) {
        setStatus("error");
        setErrorMessage("Please specify your maximum budget.");
        return;
      }
    }
    setStatus("idle");
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStatus("idle");
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("error");
      setErrorMessage("Please fill out your name and email address.");
      return;
    }

    setStatus("loading");

    // Simulate Sourcing Desk Processing
    setTimeout(() => {
      setStatus("success");
      setStep(1);
      setForm({
        name: "",
        email: "",
        phone: "",
        type: "rent",
        propertyType: "apartment",
        location: "",
        minBudget: "",
        maxBudget: "",
        bedrooms: "1",
        bathrooms: "1",
        moveDate: "",
        message: "",
      });
    }, 2200);
  };

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white text-primary select-none overflow-hidden min-h-screen flex flex-col justify-between">
        
        {/* Background Decorative Glows (Matching Homepage Style) */}
        <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-60 pointer-events-none" />
        <div className="absolute top-[35%] right-[-15%] w-[800px] h-[800px] glow-sphere-navy opacity-45 pointer-events-none" />
        <div className="absolute top-[75%] left-[-10%] w-[600px] h-[600px] glow-sphere-gold opacity-20 pointer-events-none" />

        {/* Full-width Hero Section (Light Theme matching other service headers) */}
        <section className="relative w-full pt-44 pb-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-white border-b border-luxury-border/60 z-10 overflow-hidden">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold tracking-wider uppercase text-secondary shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-secondary animate-pulse" />
                <span>Bespoke Placement Desk</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-primary"
              >
                Bespoke <br />
                <span className="text-secondary">Property Sourcing</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-luxury-muted text-base md:text-lg max-w-2xl font-body leading-relaxed"
              >
                Delegate your search to our premium acquisitions team. We bypass public listing routes, accessing vetted private landlord databases and agency-held off-market inventories to secure your rental or purchase.
              </motion.p>
            </div>
            
            <div className="lg:col-span-5 w-full hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden border border-luxury-border shadow-luxury-card aspect-[1.35/1] w-full"
              >
                <img
                  src="/property-sourcing.png"
                  alt="Luxury keys on white marble countertop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 p-5 glassmorphism-luxury rounded-xl border-l-4 border-secondary text-primary shadow-md">
                  <span className="text-[10px] uppercase font-bold text-luxury-muted tracking-wider block">Acquisitions Office</span>
                  <span className="font-heading font-extrabold text-sm text-primary block">Private landlord networks</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dynamic Full-Width Split Screen Layout */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen z-10 items-stretch border-b border-luxury-border/60 bg-white">
          
          {/* Left Panel: Sourcing Console & Timeline (Warm Alt Luxury Theme) */}
          <div className="lg:col-span-5 bg-luxury-alt p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden border-r border-luxury-border/60">
            
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Operational Timeline</span>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary">Sourcing Strategy</h2>
                <p className="text-luxury-muted text-xs md:text-sm font-body leading-relaxed max-w-md">
                  We coordinate with landlords and housing agencies to compile off-market candidates. Follow our structured lifecycle.
                </p>
              </div>

              {/* Glowing Timeline (Using Slate & Gold line tracker) */}
              <div className="relative border-l-2 border-luxury-border/80 pl-8 ml-4 space-y-10">
                {timelineSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={idx}
                    className="relative group cursor-default"
                  >
                    {/* Glowing Bullet Dot */}
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-secondary bg-white group-hover:scale-125 group-hover:bg-secondary group-hover:shadow-luxury-soft transition-all duration-300" />
                    
                    <div className="space-y-1.5">
                      <h4 className="font-heading font-bold text-sm md:text-base text-primary group-hover:text-secondary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-luxury-muted text-xs leading-relaxed font-body max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Micro Stats & Call details */}
            <div className="pt-12 border-t border-luxury-border/80 mt-12 relative z-10 space-y-8">
              {/* Gold Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white border border-luxury-border flex flex-col gap-1 shadow-sm">
                  <span className="font-heading font-extrabold text-2xl text-secondary">142+</span>
                  <span className="text-[9px] uppercase font-bold text-luxury-muted tracking-wider">Vetted Landlords</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-luxury-border flex flex-col gap-1 shadow-sm">
                  <span className="font-heading font-extrabold text-2xl text-secondary">38+</span>
                  <span className="text-[9px] uppercase font-bold text-luxury-muted tracking-wider">Agency Links</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-luxury-border flex flex-col gap-1 shadow-sm">
                  <span className="font-heading font-extrabold text-2xl text-secondary">9.4 Days</span>
                  <span className="text-[9px] uppercase font-bold text-luxury-muted tracking-wider">Average Match</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-luxury-border flex flex-col gap-1 shadow-sm">
                  <span className="font-heading font-extrabold text-2xl text-secondary">100%</span>
                  <span className="text-[9px] uppercase font-bold text-luxury-muted tracking-wider">Success Rate</span>
                </div>
              </div>

              {/* Vetted Landlord Testimonial */}
              <div className="p-6 rounded-xl bg-white border border-luxury-border relative shadow-sm">
                <p className="text-luxury-muted text-xs italic leading-relaxed font-body">
                  &ldquo;TKPM located an off-market townhouse in Bellevue that met my family's exact layouts and parking requirements. Completely hassle-free.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-8 w-8 rounded-full bg-secondary text-white font-heading font-bold text-xs flex items-center justify-center shadow-gold-glow">
                    AR
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-xs text-primary">Austin Reid</h5>
                    <p className="text-[9px] text-luxury-muted">Residential Tenant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Intake Wizard (Concierge Light Console) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center items-stretch relative">
            
            <div className="w-full max-w-4xl mx-auto space-y-8 relative z-10">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">Concierge Sourcing Assistant</span>
                <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-primary animate-fade-in">Intake Requirements</h3>
                <p className="text-luxury-muted text-xs md:text-sm font-body">
                  Select your preferences below to launch a customized search file.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="w-full flex items-center justify-between mb-10 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200/80 -z-10 -translate-y-1/2" />
                <div 
                  className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-secondary to-[#e0cfab] -z-10 -translate-y-1/2 transition-all duration-500" 
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
                
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`h-9 w-9 rounded-full font-heading font-bold text-xs flex items-center justify-center transition-all duration-300 ${
                      step >= num 
                        ? "bg-primary border-primary text-white scale-110 shadow-md" 
                        : "bg-white border-2 border-slate-200 text-slate-400"
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* Form Card (Light Luxury Panel matching homepage forms) */}
              <div className="bg-luxury-alt border border-luxury-border rounded-2xl p-6 md:p-12 shadow-luxury-soft relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 flex flex-col items-center justify-center space-y-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="h-16 w-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm"
                      >
                        <CheckCircle2 className="h-9 w-9 text-emerald-500" />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-extrabold text-2xl text-primary">Search File Logged</h3>
                        <p className="text-luxury-muted max-w-md mx-auto text-xs md:text-sm leading-relaxed font-body">
                          Your criteria has been registered. An acquisitions coordinator is scanning off-market registries and landlord files. Expect a customized search shortlist report via email within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-8 py-3.5 rounded-md bg-primary hover:bg-primary-hover text-white font-heading font-bold transition-all text-[10px] tracking-widest uppercase shadow-md"
                      >
                        Initiate New Search File
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Error State Banner */}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-xs font-bold flex items-center gap-2"
                        >
                          <AlertCircle className="h-4.5 w-4.5 shrink-0 text-red-500" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}

                      <AnimatePresence mode="wait">
                        
                        {/* STEP 1: Search Purpose & Property Types */}
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            {...slideTransition}
                            className="space-y-6"
                          >
                            <div className="space-y-3">
                              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">I want to...</label>
                              <div className="grid grid-cols-2 gap-4">
                                <button
                                  type="button"
                                  onClick={() => handleTypeSelect("rent")}
                                  className={`py-4 rounded-lg font-heading font-bold text-xs tracking-wider uppercase border transition-all ${
                                    form.type === "rent"
                                      ? "bg-primary border-primary text-white shadow-md"
                                      : "bg-white border-luxury-border text-luxury-muted hover:border-secondary hover:text-primary"
                                  }`}
                                >
                                  Rent a Property
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleTypeSelect("buy")}
                                  className={`py-4 rounded-lg font-heading font-bold text-xs tracking-wider uppercase border transition-all ${
                                    form.type === "buy"
                                      ? "bg-primary border-primary text-white shadow-md"
                                      : "bg-white border-luxury-border text-luxury-muted hover:border-secondary hover:text-primary"
                                  }`}
                                >
                                  Buy a Property
                                </button>
                              </div>
                            </div>

                            {/* Custom Interactive Property Selection Cards */}
                            <div className="space-y-3 pt-2">
                              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Property Type</label>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                  { value: "apartment", label: "Apartment", icon: Building },
                                  { value: "house", label: "House", icon: Home },
                                  { value: "townhouse", label: "Townhouse", icon: Key },
                                  { value: "commercial", label: "Commercial", icon: Shield },
                                ].map((type) => {
                                  const Icon = type.icon;
                                  const isSelected = form.propertyType === type.value;
                                  return (
                                    <button
                                      key={type.value}
                                      type="button"
                                      onClick={() => handlePropertyTypeSelect(type.value)}
                                      className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                                        isSelected 
                                          ? "bg-secondary/10 border-secondary text-primary shadow-sm" 
                                          : "bg-white border-luxury-border text-luxury-muted hover:border-secondary hover:text-primary"
                                      }`}
                                    >
                                      <Icon className={`h-6 w-6 ${isSelected ? "text-secondary" : "text-luxury-muted/50"}`} />
                                      <span className="font-heading font-bold text-xs">{type.label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2 pt-2">
                              <label htmlFor="location" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5 text-secondary" /> Desired Location / Areas *
                              </label>
                              <input
                                type="text"
                                id="location"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="e.g. Capitol Hill, Bellevue, Green Lake"
                                className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                              />
                            </div>

                            <div className="flex justify-end pt-6 border-t border-luxury-border/60">
                              <button
                                type="button"
                                onClick={handleNextStep}
                                className="group px-8 py-4 rounded-md bg-primary hover:bg-primary-hover text-white font-heading font-bold text-[10px] tracking-widest uppercase shadow-md flex items-center gap-2 transition-all"
                              >
                                <span>Next: Preferences</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 2: Budgets & Rooms selection */}
                        {step === 2 && (
                          <motion.div
                            key="step2"
                            {...slideTransition}
                            className="space-y-6"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="space-y-2">
                                <label htmlFor="minBudget" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                  <DollarSign className="h-3.5 w-3.5 text-secondary" /> Min Budget {form.type === "rent" ? "($/mo)" : "($)"}
                                </label>
                                <input
                                  type="text"
                                  id="minBudget"
                                  name="minBudget"
                                  value={form.minBudget}
                                  onChange={handleChange}
                                  placeholder="e.g. 2,000"
                                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                                />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="maxBudget" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                  <DollarSign className="h-3.5 w-3.5 text-secondary" /> Max Budget * {form.type === "rent" ? "($/mo)" : "($)"}
                                </label>
                                <input
                                  type="text"
                                  id="maxBudget"
                                  name="maxBudget"
                                  value={form.maxBudget}
                                  onChange={handleChange}
                                  placeholder="e.g. 3,500"
                                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                                />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="moveDate" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5 text-secondary" /> Target Move Date
                                </label>
                                <input
                                  type="date"
                                  id="moveDate"
                                  name="moveDate"
                                  value={form.moveDate}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all cursor-pointer shadow-sm"
                                />
                              </div>
                            </div>

                            {/* Bed selection button group */}
                            <div className="space-y-3 pt-2">
                              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Bedrooms Required</label>
                              <div className="flex flex-wrap gap-2">
                                {["studio", "1", "2", "3", "4+"].map((bed) => {
                                  const isSelected = form.bedrooms === bed;
                                  return (
                                    <button
                                      key={bed}
                                      type="button"
                                      onClick={() => handleBedSelect(bed)}
                                      className={`h-11 px-6 rounded-lg font-heading font-bold text-xs uppercase border transition-all ${
                                        isSelected 
                                          ? "bg-primary text-white border-primary shadow-sm" 
                                          : "bg-white border-luxury-border text-luxury-muted hover:text-primary"
                                      }`}
                                    >
                                      {bed}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Bath selection button group */}
                            <div className="space-y-3 pt-2">
                              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Bathrooms Required</label>
                              <div className="flex flex-wrap gap-2">
                                {["1", "1.5", "2", "3+"].map((bath) => {
                                  const isSelected = form.bathrooms === bath;
                                  return (
                                    <button
                                      key={bath}
                                      type="button"
                                      onClick={() => handleBathSelect(bath)}
                                      className={`h-11 px-6 rounded-lg font-heading font-bold text-xs uppercase border transition-all ${
                                        isSelected 
                                          ? "bg-primary text-white border-primary shadow-sm" 
                                          : "bg-white border-luxury-border text-luxury-muted hover:text-primary"
                                      }`}
                                    >
                                      {bath} Bath
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-2 pt-2">
                              <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                                Key Amenities & Requests
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={3}
                                placeholder="e.g. Pet-friendly, dedicated parking space, private garden/balcony..."
                                className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                              />
                            </div>

                            <div className="flex justify-between pt-6 border-t border-luxury-border/60">
                              <button
                                type="button"
                                onClick={handlePrevStep}
                                className="px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-primary border border-luxury-border font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 transition-all"
                              >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back</span>
                              </button>
                              <button
                                type="button"
                                onClick={handleNextStep}
                                className="px-8 py-3.5 rounded-md bg-primary hover:bg-primary-hover text-white font-heading font-bold text-[10px] tracking-widest uppercase shadow-md flex items-center gap-2 transition-all"
                              >
                                <span>Next: Contact Details</span>
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 3: Contact Info & submission */}
                        {step === 3 && (
                          <motion.div
                            key="step3"
                            {...slideTransition}
                            className="space-y-6"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                  <User className="h-3.5 w-3.5 text-secondary" /> Full Name *
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={form.name}
                                  onChange={handleChange}
                                  placeholder="John Doe"
                                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                                />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                  <Mail className="h-3.5 w-3.5 text-secondary" /> Email Address *
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={form.email}
                                  onChange={handleChange}
                                  placeholder="john@example.com"
                                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                                />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider block flex items-center gap-1">
                                  <Phone className="h-3.5 w-3.5 text-secondary" /> Phone Number
                                </label>
                                <input
                                  type="text"
                                  id="phone"
                                  name="phone"
                                  value={form.phone}
                                  onChange={handleChange}
                                  placeholder="+1 (206) 555-0188"
                                  className="w-full px-4 py-3.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all shadow-sm"
                                />
                              </div>
                            </div>

                            <p className="text-[11px] text-luxury-muted font-medium italic pt-4">
                              * Sourcing desk services coordinates off-market matching registries. Submission acts as authorization for our desks to search files on your behalf.
                            </p>

                            <div className="flex justify-between pt-6 border-t border-luxury-border/60">
                              <button
                                type="button"
                                onClick={handlePrevStep}
                                disabled={status === "loading"}
                                className="px-6 py-3.5 rounded-md bg-white hover:bg-slate-50 text-primary border border-luxury-border font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 transition-all"
                              >
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back</span>
                              </button>
                              <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-8 py-3.5 rounded-md bg-primary hover:bg-primary-hover text-white font-heading font-bold text-[10px] tracking-widest uppercase shadow-md flex items-center gap-2 transition-all"
                              >
                                {status === "loading" ? (
                                  <>
                                    <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Scanning Registry...</span>
                                  </>
                                ) : (
                                  <>
                                    <span>Initiate Search Desk</span>
                                    <ArrowRight className="h-4 w-4" />
                                  </>
                                )}
                              </button>
                            </div>
                          </motion.div>
                        )}
                        
                      </AnimatePresence>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section (Full Width layout on light theme) */}
        <section className="w-full py-28 px-6 md:px-12 lg:px-20 xl:px-32 bg-white z-10 border-b border-luxury-border/60">
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Header Block Left (Col span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-secondary" /> Common Queries
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary leading-tight">
                Frequently <br />
                Asked Questions
              </h2>
              <p className="text-luxury-muted text-xs md:text-sm font-body leading-relaxed max-w-sm">
                Clear answers regarding our off-market sourcing timelines, client referencing protocols, and search scope.
              </p>
            </div>

            {/* Accordion List Right (Col span 8) */}
            <div className="lg:col-span-8 space-y-4 w-full">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-luxury-border rounded-xl overflow-hidden bg-luxury-alt/30 hover:border-secondary/30 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white transition-colors"
                    >
                      <span className="font-heading font-bold text-sm md:text-base text-primary pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`h-4.5 w-4.5 text-secondary shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-luxury-border/20 text-luxury-muted text-xs md:text-sm leading-relaxed font-body">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Action Callout Panel (Standard primary theme for callouts matching project-management benefits strip) */}
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 xl:px-32 bg-luxury-alt z-10">
          <div className="p-8 md:p-12 rounded-2xl bg-primary text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-luxury-card w-full">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Specialized Sourcing Desk</span>
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">Have a unique estate inquiry?</h3>
              <p className="text-blue-100 text-xs md:text-sm max-w-2xl leading-relaxed font-body">
                For commercial blocks, corporate leases, or high-value residential portfolio searches, contact our lead manager directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+12065550188"
                className="px-8 py-4 rounded-md bg-secondary hover:bg-secondary-hover text-white font-heading font-bold text-[10px] tracking-widest uppercase shadow-gold-glow text-center transition-all hover:scale-[1.01]"
              >
                +1 (206) 555-0188
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
