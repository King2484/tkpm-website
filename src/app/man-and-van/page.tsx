"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Truck, 
  Package, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  User, 
  AlertCircle,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Box,
  Home
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesList = [
  {
    title: "Household & Flat Removals",
    desc: "Full or part-home removals for tenants, landlords, and homebuyers. We handle loading, transport, and unloading with care.",
    icon: Home,
  },
  {
    title: "Furniture & Single Item Transport",
    desc: "Purchased new furniture or moving individual bulky items? We safely pick up, transport, and deliver sofas, beds, wardrobes, and appliances.",
    icon: Package,
  },
  {
    title: "Tenancy Move-Ins & Move-Outs",
    desc: "Fast, dependable removal services tailored for rental moves. Synchronized with tenancy end dates and cleaning schedules.",
    icon: Truck,
  },
  {
    title: "House Clearance & Removal",
    desc: "Complete clearance of unwanted furniture, household clutter, or post-renovation debris with responsible disposal.",
    icon: Box,
  },
];

const faqs = [
  {
    question: "Do you provide loading and unloading assistance?",
    answer: "Yes, our experienced drivers and helpers assist with loading, securing items in the van, and unloading into your destination rooms.",
  },
  {
    question: "Can I book a man and van service over the weekend?",
    answer: "Yes. Our team is available 7 days a week, including weekends and bank holidays. Call us on 074 to arrange a time slot.",
  },
  {
    question: "What size vans do you operate?",
    answer: "We operate medium to extra-large Luton vans equipped with tail lifts, blankets, straps, and protective padding to keep your goods safe.",
  },
  {
    question: "Do you offer furniture disassembly and reassembly?",
    answer: "Yes. If needed, we can dismantle beds, tables, or wardrobes before transport and reassemble them at your new property.",
  },
];

export default function ManAndVanPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    size: "medium",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.pickup) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        date: "",
        size: "medium",
        message: "",
      });
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white text-primary select-none overflow-hidden min-h-screen pt-28">
        
        {/* Hero Section */}
        <section className="relative w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold uppercase tracking-wider text-secondary">
                <Truck className="h-4 w-4" />
                <span>Professional Removal & Transport</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight leading-tight">
                Man & Van <br />
                <span className="text-secondary">Removal Services</span>
              </h1>

              <p className="text-luxury-muted text-base sm:text-lg font-body leading-relaxed max-w-2xl">
                Reliable furniture and household removal services for landlords, tenants, and homeowners. Whether moving a single sofa or a full flat, our team handles your goods with care.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  <span>Goods in Transit Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>7 Days a Week Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <a href="tel:074" className="hover:text-secondary">Direct Line: 074</a>
                </div>
              </div>
            </div>

            {/* Quick Quote Form Box */}
            <div className="lg:col-span-5 bg-luxury-alt border border-luxury-border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-secondary">Instant Quote Request</span>
                <h3 className="font-heading font-extrabold text-xl text-primary">Book a Van or Get a Price</h3>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-base text-emerald-950">Quote Request Sent</h4>
                  <p className="text-xs text-emerald-800 font-body">
                    Thank you. A member of our removals team will call you back shortly with a competitive price quote.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-lg bg-emerald-800 text-white font-bold text-xs uppercase"
                  >
                    Request Another Quote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                      <span>Please fill in your name, phone number, and pick-up postcode.</span>
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. David Miller"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="074..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-semibold cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Pick-Up Area / Postcode *</label>
                      <input
                        type="text"
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="e.g. SW11 or Kensington"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Drop-Off Area</label>
                      <input
                        type="text"
                        value={form.dropoff}
                        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                        placeholder="e.g. NW3 or Camden"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Move Details / Furniture List</label>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="e.g. 2-seater sofa, double mattress, 6 boxes..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <span>Calculating Quote...</span>
                    ) : (
                      <>
                        <span>Get Removals Quote</span>
                        <ArrowRight className="h-4 w-4 text-secondary" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Services List Section */}
        <section className="bg-luxury-alt py-20 border-t border-b border-luxury-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block">Full Spectrum Removal Services</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">How We Help You Move</h2>
              <p className="text-luxury-muted text-sm font-body">
                From individual furniture items to complete household relocations, our team ensures smooth, stress-free transport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesList.map((srv, idx) => {
                const IconComponent = srv.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-luxury-border shadow-sm hover:shadow-md transition-shadow space-y-3">
                    <div className="p-3 rounded-xl bg-primary/5 text-primary w-fit">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-primary">{srv.title}</h4>
                    <p className="text-xs text-luxury-muted leading-relaxed font-body">{srv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tenancy & Bulky Waste Clearance Spotlight */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20 inline-block">
                  Verified Property Clearance
                </span>
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                  Bulky Waste & Tenancy Clearance
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-body">
                  Leftover tenancy clutter, abandoned furniture, or overflowing bin stores? Our man and van crews arrive on-site, rapidly clear all rubbish, sweep down floors, and transport items for licensed, eco-responsible disposal.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-secondary font-extrabold text-lg block">Same-Day</span>
                    <span className="text-xs text-slate-300 block mt-0.5">Rapid clearance dispatch</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-secondary font-extrabold text-lg block">100% Cleared</span>
                    <span className="text-xs text-slate-300 block mt-0.5">Heavy sweep & decontamination</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/landscaping-cleaning"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
                  >
                    <span>View Before & After Deep Clearance Gallery</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Side-by-Side Dual Photos (3.jpeg & 4.jpeg) */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/20 shadow-lg group">
                  <img
                    src="/cleaning/3.jpeg"
                    alt="Overflowing bin store before clearance"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-red-600/90 text-white text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    Before
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white">
                    Heavy waste build-up
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/20 shadow-lg group">
                  <img
                    src="/cleaning/4.jpeg"
                    alt="Cleaned bin store after clearance"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    After
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white">
                    Spotless swept finish
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block">Common Questions</span>
            <h2 className="font-heading font-extrabold text-3xl text-primary">Man & Van FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-luxury-border rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-heading font-bold text-sm text-primary flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-luxury-muted font-body leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
