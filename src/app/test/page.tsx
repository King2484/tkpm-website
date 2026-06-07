"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Sparkles, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TestPage() {
  const [clickCount, setClickCount] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white select-none">
        
        {/* Hero Section */}
        <section className="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6 max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Developer Sandbox</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-primary mb-6"
          >
            Design <span className="text-secondary">System</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-muted text-base md:text-lg max-w-xl mx-auto"
          >
            Preview of colors, typography hierarchy, button controls, and micro-interactive elements for the TKPM website.
          </motion.p>
        </section>

        {/* Sandbox Content */}
        <section className="relative pb-24 px-6 max-w-7xl mx-auto z-10 space-y-12">
          {/* Typography */}
          <div className="p-8 rounded-xl bg-white border border-luxury-border shadow-luxury-soft">
            <h2 className="font-heading font-extrabold text-2xl text-primary mb-6 border-b border-luxury-border pb-3">
              Typography Hierarchy
            </h2>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold text-luxury-muted block mb-1">Heading 1 (Hero Title)</span>
                <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary">
                  Premium Property Management
                </h1>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-luxury-muted block mb-1">Heading 2 (Section Title)</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                  Designed for the Next Generation
                </h2>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-luxury-muted block mb-1">Heading 3 (Card Title)</span>
                <h3 className="font-heading font-bold text-xl text-primary">
                  Property Renovations & Refurbishments
                </h3>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-luxury-muted block mb-1">Standard Body Text</span>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>

          {/* Color swatches */}
          <div className="p-8 rounded-xl bg-white border border-luxury-border shadow-luxury-soft">
            <h2 className="font-heading font-extrabold text-2xl text-primary mb-6 border-b border-luxury-border pb-3">
              Luxury Color Palette
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-primary shadow-sm" />
                <span className="text-xs font-bold text-primary text-center">Primary (Navy)</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-secondary shadow-gold-glow" />
                <span className="text-xs font-bold text-primary text-center">Secondary (Gold)</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-accent shadow-sm" />
                <span className="text-xs font-bold text-primary text-center">Accent (Blue)</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-white border border-luxury-border" />
                <span className="text-xs font-bold text-primary text-center">White Card</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-luxury-alt border border-luxury-border" />
                <span className="text-xs font-bold text-primary text-center">Luxury Alt</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg bg-gradient-to-r from-primary to-secondary" />
                <span className="text-xs font-bold text-primary text-center">Brand Gradient</span>
              </div>
            </div>
          </div>

          {/* Buttons & Physics widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white border border-luxury-border shadow-luxury-soft space-y-6">
              <h3 className="font-heading font-bold text-lg text-primary border-b border-luxury-border pb-3">Button States</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setClickCount(clickCount + 1)}
                  className="px-5 py-2.5 rounded-md bg-primary hover:bg-primary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-md transition-all"
                >
                  Interactive Primary: {clickCount}
                </button>
                <button className="px-5 py-2.5 rounded-md bg-secondary hover:bg-secondary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-gold-glow transition-all">
                  Gold Button
                </button>
                <button className="px-5 py-2.5 rounded-md bg-white border border-luxury-border hover:border-primary/50 text-primary font-bold text-[10px] tracking-widest uppercase transition-all">
                  Outline Button
                </button>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white border border-luxury-border shadow-luxury-soft space-y-6">
              <h3 className="font-heading font-bold text-lg text-primary border-b border-luxury-border pb-3">Physics Animations</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Rotator */}
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-luxury-alt border border-luxury-border">
                  <motion.div
                    animate={{ rotate: isRotating ? 360 : 0 }}
                    transition={{ repeat: isRotating ? Infinity : 0, duration: 1.5, ease: "linear" }}
                    onClick={() => setIsRotating(!isRotating)}
                    className="h-10 w-10 rounded bg-white border border-luxury-border flex items-center justify-center text-primary mb-3 cursor-pointer shadow-sm"
                  >
                    <RefreshCw className="h-5 w-5 text-secondary" />
                  </motion.div>
                  <span className="text-xs font-bold text-primary">Rotate clicker</span>
                </div>

                {/* Scale Hover */}
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-luxury-alt border border-luxury-border">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 rounded bg-white border border-luxury-border flex items-center justify-center text-secondary mb-3 cursor-grab shadow-sm"
                  >
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </motion.div>
                  <span className="text-xs font-bold text-primary">Hover scaler</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
