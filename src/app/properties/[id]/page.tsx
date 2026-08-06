"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Heart,
  ChevronRight,
  Clock,
  Home,
  Building,
  AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPropertyById, getSimilarProperties } from "@/data/properties";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PropertyDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const property = getPropertyById(resolvedParams.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "I would like to schedule a viewing or request further details for this property.",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4">
          <div className="h-16 w-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
            <Building className="h-8 w-8" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl text-primary">Property Not Found</h2>
          <p className="text-luxury-muted text-sm mt-2 max-w-md">
            The property listing you requested does not exist or has been removed.
          </p>
          <Link
            href="/properties"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider shadow"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Property Listings</span>
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const similarProperties = getSimilarProperties(property.id, 3);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <>
      <Navbar />

      <main className="relative flex-1 bg-white text-primary select-none overflow-hidden min-h-screen pt-28">
        
        {/* Background Decorative Glows */}
        <div className="absolute top-[6%] left-[-10%] w-[600px] h-[600px] glow-sphere-gold opacity-40 pointer-events-none" />

        {/* Top Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-luxury-muted">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            <span className="text-primary font-bold truncate max-w-[200px] sm:max-w-none">{property.title}</span>
          </div>
        </div>

        {/* Property Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider text-white shadow-sm ${
                  property.type === "buy" ? "bg-primary" : "bg-emerald-700"
                }`}>
                  {property.type === "buy" ? "For Sale" : "For Rent"}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-secondary-hover bg-secondary/10 border border-secondary/20">
                  {property.category}
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mt-2">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold pt-1">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span>{property.address}</span>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 shrink-0">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Guide Price</span>
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
                  {property.priceDisplay}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-xl border transition-all ${
                    isSaved ? "bg-red-50 border-red-200 text-red-600" : "bg-white border-slate-200 text-slate-500 hover:text-primary"
                  }`}
                  aria-label="Save Property"
                >
                  <Heart className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: property.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Property link copied to clipboard!");
                    }
                  }}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-primary transition-all"
                  aria-label="Share Property"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Main Display Image */}
            <div className="lg:col-span-9 relative aspect-[1.6/1] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-luxury-border">
              <img
                src={property.images[activeImageIndex] || property.heroImage}
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold">
                Photo {activeImageIndex + 1} of {property.images.length}
              </div>
            </div>

            {/* Thumbnail Sidebar */}
            <div className="lg:col-span-3 grid grid-cols-4 lg:grid-cols-1 gap-3">
              {property.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[1.5/1] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? "border-secondary scale-95 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Specs Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-luxury-alt border border-luxury-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Bed className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Bedrooms</span>
                <span className="font-heading font-extrabold text-base text-primary">{property.bedrooms} Beds</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Bath className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Bathrooms</span>
                <span className="font-heading font-extrabold text-base text-primary">{property.bathrooms} Baths</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Maximize2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Internal Area</span>
                <span className="font-heading font-extrabold text-base text-primary">{property.sqft.toLocaleString()} sq ft</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Tenure</span>
                <span className="font-heading font-bold text-xs text-primary">{property.specs.tenure}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Description & Direct Contact Form Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Description & Key Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-2xl text-primary pb-3 border-b border-slate-100">
                  Property Description
                </h3>
                {property.description.map((paragraph, idx) => (
                  <p key={idx} className="text-luxury-muted text-base leading-relaxed font-body">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Direct Call Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary to-[#0f2438] text-white space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Emergency & General Call Out Line</span>
                </div>
                <h4 className="font-heading font-extrabold text-xl text-white">Prefer to Speak Directly?</h4>
                <p className="text-slate-300 text-xs leading-relaxed font-body">
                  Available anytime, even over the weekend. Both landlords and tenants can call out.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:074"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Us Now: 074</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Contact & Viewing Form (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-luxury-border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-secondary uppercase block">Get In Touch</span>
                <h3 className="font-heading font-extrabold text-xl text-primary">Inquire / Book Viewing</h3>
                <p className="text-xs text-luxury-muted font-body">
                  Fill in your details below and a member of our property team will contact you.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-base text-emerald-950">Inquiry Received</h4>
                  <p className="text-xs text-emerald-800 font-body">
                    Thank you, {formState.name}. We have received your inquiry for {property.title} and will respond shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-lg bg-emerald-800 text-white font-bold text-xs uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary text-xs font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="074..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Preferred Viewing Date</label>
                    <input
                      type="date"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary text-xs font-semibold cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Message / Questions</label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary text-xs font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="h-4 w-4 text-secondary" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <section className="bg-luxury-alt py-16 border-t border-luxury-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-secondary uppercase block">Property Directory</span>
                  <h3 className="font-heading font-extrabold text-2xl text-primary">Similar Available Properties</h3>
                </div>
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                >
                  <span>View All Listings</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarProperties.map((prop) => (
                  <div key={prop.id} className="bg-white rounded-2xl border border-luxury-border overflow-hidden shadow-sm hover:shadow-md transition-all group">
                    <div className="relative aspect-[1.5/1] overflow-hidden">
                      <img src={prop.heroImage} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                        {prop.type === "buy" ? "For Sale" : "For Rent"}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="font-heading font-extrabold text-xl text-primary block">{prop.priceDisplay}</span>
                      <h4 className="font-bold text-base text-primary line-clamp-1 group-hover:text-secondary transition-colors">{prop.title}</h4>
                      <div className="flex items-center gap-4 text-xs text-luxury-muted pt-2 border-t border-slate-100">
                        <span>{prop.bedrooms} Beds</span>
                        <span>•</span>
                        <span>{prop.bathrooms} Baths</span>
                        <span>•</span>
                        <span>{prop.sqft} sqft</span>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-0">
                      <Link
                        href={`/properties/${prop.slug}`}
                        className="block w-full text-center py-2.5 rounded-xl bg-slate-50 hover:bg-primary text-primary hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        View Property
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
