import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-luxury-border bg-luxury-alt pt-16 pb-8 z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Column */}
        <div className="md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-1 mb-2">
            <span className="font-heading font-extrabold text-2xl text-primary tracking-tight">
              TK<span className="text-secondary">PM</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-secondary" />
          </Link>
          <p className="text-luxury-muted text-sm leading-relaxed max-w-xs">
            A premium property solutions firm delivering luxury renovations, commercial maintenance, and complete project oversight across Seattle.
          </p>
          <div className="flex items-center gap-3 text-luxury-muted pt-2">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200 border border-luxury-border"
              aria-label="Twitter"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200 border border-luxury-border"
              aria-label="LinkedIn"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-white hover:bg-primary/5 hover:text-primary transition-all duration-200 border border-luxury-border"
              aria-label="Facebook"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="font-heading font-extrabold text-primary mb-4 uppercase tracking-widest text-[11px]">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/maintenance" className="text-luxury-muted hover:text-secondary font-medium transition-colors">
                Property Maintenance
              </Link>
            </li>
            <li>
              <Link href="/renovations" className="text-luxury-muted hover:text-secondary font-medium transition-colors">
                Home Renovations
              </Link>
            </li>
            <li>
              <Link href="/landscaping-cleaning" className="text-luxury-muted hover:text-secondary font-medium transition-colors">
                Landscaping & Cleaning
              </Link>
            </li>
            <li>
              <Link href="/project-management" className="text-luxury-muted hover:text-secondary font-medium transition-colors">
                Project Management
              </Link>
            </li>
            <li>
              <Link href="/property-sourcing" className="text-luxury-muted hover:text-secondary font-medium transition-colors">
                Property Sourcing
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-heading font-extrabold text-primary mb-4 uppercase tracking-widest text-[11px]">
            Contact Details
          </h4>
          <ul className="space-y-4 text-sm text-luxury-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
              <span className="font-medium">
                100 Pine St, Suite 400<br />Seattle, WA 98101
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4.5 w-4.5 text-secondary shrink-0" />
              <a href="tel:+12065550188" className="hover:text-secondary font-medium transition-colors">
                +1 (206) 555-0188
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-secondary shrink-0" />
              <a href="mailto:office@tkpm.com" className="hover:text-secondary font-medium transition-colors">
                office@tkpm.com
              </a>
            </li>
          </ul>
        </div>

        {/* Credential Column */}
        <div className="space-y-4">
          <h4 className="font-heading font-extrabold text-primary mb-4 uppercase tracking-widest text-[11px]">
            Operational Standards
          </h4>
          <p className="text-luxury-muted text-sm leading-relaxed">
            All work is fully insured and delivered in strict compliance with safety regulations by licensed practitioners.
          </p>
          <div className="flex gap-2.5 pt-1">
            <span className="text-[10px] font-bold text-primary bg-primary/5 border border-luxury-border px-3 py-1 rounded">
              Licensed
            </span>
            <span className="text-[10px] font-bold text-secondary bg-secondary/5 border border-secondary/20 px-3 py-1 rounded shadow-luxury-soft">
              Fully Insured
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mt-16 pt-8 border-t border-luxury-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-luxury-muted text-xs">
          &copy; {new Date().getFullYear()} TKPM Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-luxury-muted">
          <Link href="/" className="hover:text-primary transition-colors font-medium">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-primary transition-colors font-medium">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
