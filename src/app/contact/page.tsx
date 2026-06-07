"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "maintenance", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "maintenance", message: "" });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] glow-sphere-gold opacity-60" />
        <div className="absolute top-[40%] right-[-15%] w-[800px] h-[800px] glow-sphere-navy opacity-45" />

        {/* Hero Section */}
        <section className="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-primary mb-6"
          >
            Get in <span className="text-secondary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-luxury-muted text-base md:text-lg max-w-xl mx-auto"
          >
            Request a comprehensive proposal, schedule a property audit, or speak directly with our operations desk.
          </motion.p>
        </section>

        {/* Detailed Form & Info cards */}
        <section className="relative pb-24 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[1600px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info cards left */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-xl bg-luxury-alt border border-luxury-border shadow-luxury-soft">
                <h3 className="font-heading font-bold text-lg text-primary mb-8">TKPM Headquarters</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white border border-luxury-border text-primary shadow-sm">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-luxury-muted tracking-widest mb-1">Email Inquiry</div>
                      <a href="mailto:office@tkpm.com" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                        office@tkpm.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white border border-luxury-border text-primary shadow-sm">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-luxury-muted tracking-widest mb-1">Telephone Helpdesk</div>
                      <a href="tel:+12065550188" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                        +1 (206) 555-0188
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white border border-luxury-border text-primary shadow-sm">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-luxury-muted tracking-widest mb-1">Corporate Address</div>
                      <address className="text-sm font-bold text-primary not-italic leading-relaxed">
                        100 Pine St, Suite 400<br />Seattle, WA 98101
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form right */}
            <div className="lg:col-span-8">
              <div className="p-8 md:p-10 rounded-xl bg-white border border-luxury-border shadow-luxury-card relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 flex flex-col items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="h-16 w-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm"
                      >
                        <CheckCircle2 className="h-9 w-9 text-emerald-500" />
                      </motion.div>
                      <h3 className="font-heading font-extrabold text-2xl text-primary mb-2">Request Transmitted!</h3>
                      <p className="text-luxury-muted max-w-sm mb-8 text-sm">
                        Thank you for contacting TKPM. An operations manager will review your property requirements and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-6 py-3 rounded-md bg-primary hover:bg-primary-hover text-white font-bold transition-all text-[10px] tracking-widest uppercase shadow-md"
                      >
                        New Request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            disabled={status === "loading"}
                            className="w-full px-4 py-3.5 rounded-lg bg-luxury-alt border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all focus:ring-1 focus:ring-secondary/20 shadow-sm"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            disabled={status === "loading"}
                            className="w-full px-4 py-3.5 rounded-lg bg-luxury-alt border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all focus:ring-1 focus:ring-secondary/20 shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone Field */}
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (206) 555-0188"
                            disabled={status === "loading"}
                            className="w-full px-4 py-3.5 rounded-lg bg-luxury-alt border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all focus:ring-1 focus:ring-secondary/20 shadow-sm"
                          />
                        </div>

                        {/* Dropdown Selector */}
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service Needed</label>
                          <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            disabled={status === "loading"}
                            className="w-full px-4 py-3.5 rounded-lg bg-luxury-alt border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all focus:ring-1 focus:ring-secondary/20 shadow-sm"
                          >
                            <option value="maintenance">Property Maintenance</option>
                            <option value="renovations">Renovations & Upgrades</option>
                            <option value="landscaping">Landscaping Design</option>
                            <option value="cleaning">Commercial Cleaning</option>
                            <option value="management">Full Project Management</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Area */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Describe Your Request *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Provide details about your property address, required services, or project timeline..."
                          disabled={status === "loading"}
                          className="w-full px-4 py-3.5 rounded-lg bg-luxury-alt border border-luxury-border focus:outline-none focus:border-secondary text-slate-800 text-sm font-semibold transition-all focus:ring-1 focus:ring-secondary/20 shadow-sm"
                        />
                      </div>

                      {/* Error Banner */}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-xs font-bold flex items-center gap-2"
                        >
                          <AlertCircle className="h-4.5 w-4.5" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 rounded-md bg-primary hover:bg-primary-hover text-white font-bold hover:shadow-luxury transition-all flex items-center justify-center gap-2 duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase text-[10px] tracking-widest"
                      >
                        {status === "loading" ? (
                          <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Request</span>
                            <Send className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
