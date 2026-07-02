"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

// Professional client-facing routes only
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/project-management", label: "Project Management" },
  { href: "/renovations", label: "Renovations" },
  { href: "/landscaping-cleaning", label: "Landscaping & Cleaning" },
  { href: "/property-sourcing", label: "Property Sourcing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-md border-b border-luxury-border shadow-luxury-soft"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top Gold Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />

      {/* Top bar (for trust/phone) */}
      {!isScrolled && (
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-2 hidden md:flex justify-end text-[11px] font-semibold tracking-wider text-luxury-muted uppercase border-b border-slate-200/30">
          <div className="flex items-center gap-6">
            <a href="tel:074" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5 text-secondary" />
              <span>Call: 074</span>
            </a>
            <a href="mailto:tkpm@mail.com" className="hover:text-primary transition-colors">
              Email: tkpm@mail.com
            </a>
          </div>
        </div>
      )}

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mt-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-1 group">
          <span className="font-heading font-extrabold text-2xl text-primary tracking-tight transition-transform group-hover:scale-102 duration-300">
            TK<span className="text-secondary">PM</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-secondary inline-block animate-pulse" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2.5 font-heading font-bold text-[11px] tracking-widest uppercase transition-colors duration-200"
                style={{ color: isActive ? "var(--color-primary)" : "var(--color-luxury-muted)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicatorTKPM"
                    className="absolute inset-0 bg-primary/5 border-b-2 border-secondary rounded-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="hover:text-primary transition-colors">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-hover text-white font-bold text-[10px] tracking-widest uppercase shadow-md transition-all duration-300 hover:shadow-gold-glow"
          >
            Get a Quote
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden relative z-50 p-2 text-luxury-text hover:text-primary focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full bg-white border-b border-luxury-border py-24 px-8 flex flex-col gap-6 xl:hidden z-40 shadow-xl"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading font-bold text-sm uppercase tracking-wider transition-all ${
                      isActive ? "text-primary pl-2 border-l-2 border-secondary" : "text-luxury-muted hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 py-4 rounded-md bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
