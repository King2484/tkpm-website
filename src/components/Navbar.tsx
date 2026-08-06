"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  Wrench, 
  Building2, 
  Hammer, 
  Search,
  ShieldCheck,
  Clock,
  Truck
} from "lucide-react";

const servicesList = [
  {
    href: "/maintenance",
    title: "Property Maintenance",
    desc: "General property care, repairs, cleaning & garden landscaping",
    icon: Wrench,
    badge: "24/7 Call Out"
  },
  {
    href: "/project-management",
    title: "Project Management",
    desc: "End-to-end refurbishment oversight & contractor control",
    icon: Building2,
    badge: "Full Oversight"
  },
  {
    href: "/renovations",
    title: "Renovations & Alterations",
    desc: "Interior transformations, extensions & decorating",
    icon: Hammer,
    badge: "Quality Work"
  },
  {
    href: "/property-sourcing",
    title: "Property Sourcing",
    desc: "Acquisitions & tenant matching across private networks",
    icon: Search,
    badge: "Off-Market"
  },
  {
    href: "/man-and-van",
    title: "Man & Van Services",
    desc: "Furniture transport, household removals & clearances",
    icon: Truck,
    badge: "Removals"
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isServiceActive = servicesList.some(s => s.href === pathname);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-xl border-b border-luxury-border/70 shadow-md"
          : "py-4 lg:py-6 bg-white/80 backdrop-blur-md border-b border-slate-200/40"
      }`}
    >
      {/* Top Gold Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Top Contact & 24/7 Call Out Info Bar */}
      {!isScrolled && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2.5 hidden lg:flex items-center justify-between text-[11px] font-medium text-luxury-muted border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary-hover font-semibold">
              <Clock className="h-3 w-3" />
              <span>24/7 Emergency Call Out (Weekends Included for Landlords & Tenants)</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              <span>Fully Insured & Accredited</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:074" className="flex items-center gap-1.5 hover:text-primary transition-colors group">
              <Phone className="h-3.5 w-3.5 text-secondary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Call: 074</span>
            </a>
            <a href="mailto:tkpm@mail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors group">
              <Mail className="h-3.5 w-3.5 text-secondary group-hover:scale-110 transition-transform" />
              <span>Email: tkpm@mail.com</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Header Row */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ${!isScrolled ? "mt-2" : ""}`}>
        
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2.5 group shrink-0 mr-4 sm:mr-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-2xl lg:text-3xl text-primary tracking-tight group-hover:text-primary-hover transition-colors">
                TK<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#d4af37] to-secondary-hover">PM</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-secondary inline-block animate-pulse" />
            </div>
            <span className="text-[8px] font-bold tracking-[0.22em] text-luxury-muted uppercase -mt-1 hidden sm:block">
              Property Management
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Home Link */}
          <Link
            href="/"
            className={`relative px-3.5 py-2 font-heading font-semibold text-xs xl:text-[13px] tracking-wider uppercase transition-all duration-200 group ${
              pathname === "/" ? "text-primary font-bold" : "text-luxury-muted hover:text-primary"
            }`}
          >
            <span>Home</span>
            {pathname === "/" ? (
              <motion.span
                layoutId="activeNavUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-secondary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary/50 rounded-full group-hover:w-3/4 transition-all duration-300" />
            )}
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <button
              className={`relative px-3.5 py-2 font-heading font-semibold text-xs xl:text-[13px] tracking-wider uppercase transition-all duration-200 flex items-center gap-1 group ${
                isServiceActive ? "text-primary font-bold" : "text-luxury-muted hover:text-primary"
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-secondary" : "text-slate-400 group-hover:text-primary"}`} />
              {isServiceActive && (
                <motion.span
                  layoutId="activeNavUnderline"
                  className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-secondary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Mega Dropdown Menu */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white/98 backdrop-blur-2xl border border-luxury-border/80 rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 ring-1 ring-black/5"
                >
                  {/* Left Column: Services Grid (7 cols) */}
                  <div className="col-span-7 grid grid-cols-1 gap-2 border-r border-slate-100 pr-4">
                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                      Our Services
                    </div>
                    {servicesList.map((service) => {
                      const IconComponent = service.icon;
                      const isActive = pathname === service.href;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className={`group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? "bg-primary/5 text-primary border border-secondary/20" 
                              : "hover:bg-slate-50 text-luxury-text hover:text-primary"
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-colors ${isActive ? "bg-secondary text-white" : "bg-primary/5 text-primary group-hover/item:bg-primary group-hover/item:text-white"}`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-heading font-bold text-xs uppercase tracking-wide">
                                {service.title}
                              </span>
                              <span className="text-[9px] font-semibold text-secondary-hover bg-secondary/10 px-1.5 py-0.2 rounded">
                                {service.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-luxury-muted mt-0.5 line-clamp-1">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right Column: Emergency Call Out Highlight Card (5 cols) */}
                  <div className="col-span-5 flex flex-col justify-between bg-gradient-to-br from-primary to-[#0f2438] rounded-xl p-5 text-white relative overflow-hidden group">
                    <div>
                      <span className="text-[9px] font-bold tracking-widest uppercase text-secondary">
                        24/7 Emergency Call Out
                      </span>
                      <h4 className="font-heading font-bold text-sm text-white mt-1 leading-snug">
                        Need Immediate Assistance?
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                        Available anytime, even over the weekend. Both landlords and tenants can call out.
                      </p>
                    </div>

                    <a
                      href="tel:074"
                      onClick={() => setIsServicesOpen(false)}
                      className="mt-4 inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary-hover text-white text-[11px] font-bold uppercase tracking-wider transition-colors shadow-md group/btn"
                    >
                      <span>Call Now: 074</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Properties Link */}
          <Link
            href="/properties"
            className={`relative px-3.5 py-2 font-heading font-semibold text-xs xl:text-[13px] tracking-wider uppercase transition-all duration-200 group ${
              pathname.startsWith("/properties") ? "text-primary font-bold" : "text-luxury-muted hover:text-primary"
            }`}
          >
            <span>Properties</span>
            {pathname.startsWith("/properties") ? (
              <motion.span
                layoutId="activeNavUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-secondary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary/50 rounded-full group-hover:w-3/4 transition-all duration-300" />
            )}
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className={`relative px-3.5 py-2 font-heading font-semibold text-xs xl:text-[13px] tracking-wider uppercase transition-all duration-200 group ${
              pathname === "/contact" ? "text-primary font-bold" : "text-luxury-muted hover:text-primary"
            }`}
          >
            <span>Contact</span>
            {pathname === "/contact" ? (
              <motion.span
                layoutId="activeNavUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-secondary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary/50 rounded-full group-hover:w-3/4 transition-all duration-300" />
            )}
          </Link>
        </nav>

        {/* Right Action Button (Desktop / Laptop) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#132a40] hover:from-[#132a40] hover:to-primary text-white font-bold text-[11px] xl:text-xs tracking-widest uppercase shadow-lg transition-all duration-300 hover:shadow-gold-glow border border-secondary/30 transform hover:-translate-y-0.5"
          >
            <span>Get a Quote</span>
            <ArrowRight className="h-3.5 w-3.5 text-secondary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile & Tablet Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-primary transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile & Tablet Full Screen Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl border-b border-luxury-border shadow-2xl overflow-hidden lg:hidden z-40"
            >
              <div className="px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
                
                {/* Contact Info Header in Mobile Drawer */}
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <a href="tel:074" className="flex items-center gap-2 text-xs font-bold text-primary">
                    <Phone className="h-4 w-4 text-secondary" />
                    <span>24/7 Call Out: 074</span>
                  </a>
                  <a href="mailto:tkpm@mail.com" className="flex items-center gap-2 text-xs font-medium text-luxury-muted">
                    <Mail className="h-4 w-4 text-secondary" />
                    <span>Email: tkpm@mail.com</span>
                  </a>
                </div>

                {/* Mobile Direct Links */}
                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`font-heading font-bold text-sm uppercase tracking-wider py-2 px-3 rounded-lg transition-colors ${
                      pathname === "/" ? "bg-primary text-white" : "text-luxury-text hover:bg-slate-100"
                    }`}
                  >
                    Home
                  </Link>

                  {/* Services Accordion Header */}
                  <div className="pt-2">
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase px-3">
                      Services
                    </span>
                    <div className="mt-2 grid grid-cols-1 gap-1.5">
                      {servicesList.map((service) => {
                        const IconComp = service.icon;
                        const isActive = pathname === service.href;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 p-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                              isActive
                                ? "bg-secondary text-white shadow-md"
                                : "bg-slate-50 text-luxury-text hover:bg-primary/5 hover:text-primary"
                            }`}
                          >
                            <IconComp className={`h-4 w-4 ${isActive ? "text-white" : "text-secondary"}`} />
                            <span>{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <Link
                    href="/properties"
                    onClick={() => setIsOpen(false)}
                    className={`font-heading font-bold text-sm uppercase tracking-wider py-2 px-3 rounded-lg transition-colors mt-2 ${
                      pathname.startsWith("/properties") ? "bg-primary text-white" : "text-luxury-text hover:bg-slate-100"
                    }`}
                  >
                    Properties
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`font-heading font-bold text-sm uppercase tracking-wider py-2 px-3 rounded-lg transition-colors mt-2 ${
                      pathname === "/contact" ? "bg-primary text-white" : "text-luxury-text hover:bg-slate-100"
                    }`}
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[#132a40] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all mt-2"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="h-4 w-4 text-secondary" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
