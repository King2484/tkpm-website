"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  Clock,
  Home,
  Building,
  Sparkles,
  Calendar,
  ShieldCheck,
  Compass,
  X,
  Maximize,
  Car,
  Flame,
  TreePine,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPropertyById, getSimilarProperties } from "@/data/properties";

interface PageProps {
  params: Promise<{ id: string }>;
}

const photoLabels = [
  "Modern Fitted Kitchen & Dining",
  "Kitchen & Dining Area",
  "Spacious Reception & Living Room",
  "Secured Large Rear Garden",
  "Master Bedroom",
  "Second Bedroom",
  "Third Bedroom / Home Office",
  "Contemporary Family Bathroom",
  "Entrance Hall & Front Exterior",
];

export default function PropertyDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const property = getPropertyById(resolvedParams.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "I would like to schedule a viewing or request further tenancy details for this property.",
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

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider text-white shadow-sm ${
                  property.type === "buy" ? "bg-primary" : "bg-emerald-700"
                }`}>
                  {property.type === "buy" ? "For Sale" : "To Rent"}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-secondary-hover bg-secondary/10 border border-secondary/20">
                  {property.category}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-primary bg-slate-100 border border-slate-200 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-secondary" />
                  <span>Freshly Refurbished</span>
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mt-2">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold pt-1">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span>{property.location} • {property.address}</span>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5 shrink-0">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Monthly Rent</span>
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
                  {property.priceDisplay}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-xl border transition-all ${
                    isSaved ? "bg-red-50 border-red-200 text-red-600 shadow-sm" : "bg-white border-slate-200 text-slate-500 hover:text-primary"
                  }`}
                  aria-label="Save Property"
                >
                  <Heart className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
                </button>
                <button
                  onClick={() => {
                    if (typeof navigator !== "undefined" && navigator.share) {
                      navigator.share({ title: property.title, url: window.location.href });
                    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
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

        {/* Gallery Showcase with 9 Authentic Photos */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col gap-3.5">
            
            {/* Main Featured Photo Container (Crisp, proportional, sharp) */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[580px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-950 border border-luxury-border group select-none">
              <img
                src={property.images[activeImageIndex] || property.heroImage}
                alt={`${property.title} - ${photoLabels[activeImageIndex] || `Photo ${activeImageIndex + 1}`}`}
                className="w-full h-full object-cover transition-all duration-300 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-slate-950/80 hover:bg-secondary text-white backdrop-blur-md transition-all border border-white/20 shadow-xl opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-slate-950/80 hover:bg-secondary text-white backdrop-blur-md transition-all border border-white/20 shadow-xl opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Bottom Info Bar with Room Caption & Enlarge Button */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <div className="bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-xs font-bold border border-white/10 shadow-lg flex items-center gap-2">
                  <span className="text-secondary font-extrabold">{activeImageIndex + 1} / {property.images.length}</span>
                  <span className="text-slate-400">•</span>
                  <span>{photoLabels[activeImageIndex] || `Photo ${activeImageIndex + 1}`}</span>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="bg-slate-950/85 hover:bg-secondary backdrop-blur-md px-4 py-1.5 rounded-xl text-white text-xs font-bold border border-white/10 shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Maximize className="h-3.5 w-3.5 text-secondary group-hover:text-white" />
                  <span className="hidden sm:inline">View Fullscreen</span>
                  <span className="sm:hidden">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Bottom Horizontal Thumbnails Strip (All 9 Photos Perfectly Aligned, No Gaps!) */}
            <div className="w-full">
              <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 sm:gap-2.5">
                {property.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all group ${
                      activeImageIndex === idx 
                        ? "border-secondary ring-2 ring-secondary/40 shadow-lg scale-[1.03] z-10 opacity-100" 
                        : "border-slate-200 opacity-75 hover:opacity-100 hover:border-slate-400 hover:scale-105"
                    }`}
                    aria-label={`View ${photoLabels[idx] || `Photo ${idx + 1}`}`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-extrabold shadow-sm ${
                      activeImageIndex === idx ? "bg-secondary text-primary" : "bg-black/70 text-white"
                    }`}>
                      {idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between text-white z-10" onClick={(e) => e.stopPropagation()}>
                <div className="space-y-0.5">
                  <h3 className="font-heading font-bold text-lg text-white">{property.title}</h3>
                  <p className="text-secondary text-xs font-semibold">
                    Photo {activeImageIndex + 1} of {property.images.length} • {photoLabels[activeImageIndex]}
                  </p>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close fullscreen gallery"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Main Lightbox Image View */}
              <div 
                className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={property.images[activeImageIndex]}
                  alt={`Full size view ${activeImageIndex + 1}`}
                  className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-6 p-4 rounded-full bg-black/60 hover:bg-secondary text-white transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-6 p-4 rounded-full bg-black/60 hover:bg-secondary text-white transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Lightbox Thumbnail Strip */}
              <div 
                className="flex items-center justify-center gap-2 overflow-x-auto py-2 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-14 w-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === i ? "border-secondary scale-105" : "border-white/20 opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Property Specs Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-luxury-alt border border-luxury-border shadow-sm">
            
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Bed className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Bedrooms</span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-primary">{property.bedrooms} Bedrooms</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Bath className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Bathroom</span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-primary">{property.bathrooms} Modern Bath</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Parking</span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-primary">Private Driveway</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <TreePine className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Outdoor Space</span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-primary">Large Garden</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Heating</span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-primary">Gas Central</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-secondary shadow-sm">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">Tenure</span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-primary">Long-Term Rent</span>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Property Description, Features, and Viewing Booking Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Full Description & Features Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Full Listing Description */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Verified TKPM Listing</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary pb-2 border-b border-slate-100">
                  Property Description
                </h2>
                <div className="space-y-3.5 pt-2">
                  {property.description.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Features & Amenities Grid */}
              <div className="space-y-4 pt-4">
                <h3 className="font-heading font-extrabold text-xl text-primary">
                  Features & Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {property.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 text-slate-800 font-semibold text-xs sm:text-sm"
                    >
                      <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Technical Specifications Table */}
              <div className="space-y-4 pt-4">
                <h3 className="font-heading font-extrabold text-xl text-primary">
                  Technical Specifications
                </h3>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-700 w-1/3">Property Type</td>
                        <td className="py-3 px-4 text-slate-900 font-medium">{property.category} (Semi-Detached)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-700">Council Tax Band</td>
                        <td className="py-3 px-4 text-slate-900 font-medium">{property.specs.councilTaxBand}</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-700">Energy Rating (EPC)</td>
                        <td className="py-3 px-4 text-slate-900 font-medium font-mono">{property.specs.epcRating}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-700">Glazing</td>
                        <td className="py-3 px-4 text-slate-900 font-medium">Double Glazed UPVC</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-700">Heating Type</td>
                        <td className="py-3 px-4 text-slate-900 font-medium">{property.specs.heating}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-700">Driveway Parking</td>
                        <td className="py-3 px-4 text-slate-900 font-medium">Private Off-Street Driveway</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-700">Availability</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">Immediately Available / Newly Listed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Direct Telephone Call Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary to-[#0f2438] text-white space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Enquiries & Viewing Desk</span>
                </div>
                <h4 className="font-heading font-extrabold text-xl text-white">Prefer to Speak With an Agent?</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
                  Our lettings team is available 7 days a week to answer questions regarding tenancy terms, deposit schemes, and viewing schedules.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:074"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Us Directly: 074</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Contact & Viewing Form (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-luxury-border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 sticky top-32">
              
              <div className="space-y-1 pb-2 border-b border-slate-100">
                <span className="text-[10px] font-bold tracking-widest text-secondary uppercase block">Direct Tenancy Inquiry</span>
                <h3 className="font-heading font-extrabold text-2xl text-primary">Inquire / Book Viewing</h3>
                <p className="text-xs text-luxury-muted font-body">
                  Arrange an in-person viewing of this 3-bedroom Liverpool home.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-base text-emerald-950">Viewing Request Received</h4>
                  <p className="text-xs text-emerald-800 font-body leading-relaxed">
                    Thank you, {formState.name}. We have received your inquiry for this Liverpool L30 property. An agent from TKPM will contact you shortly to confirm your viewing slot.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-lg bg-emerald-800 text-white font-bold text-xs uppercase"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-3.5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary text-xs font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@example.com"
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
                    className="w-full py-3.5 rounded-xl bg-primary hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Viewing Request</span>
                        <ArrowRight className="h-4 w-4 text-secondary" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-400">
                      No upfront fees required to register interest.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* Similar Properties / Bespoke Sourcing Section */}
        <section className="bg-luxury-alt py-16 border-t border-luxury-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-secondary uppercase block">Local Acquisition Desk</span>
                <h3 className="font-heading font-extrabold text-2xl text-primary">Looking for More Properties in Liverpool?</h3>
              </div>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors"
              >
                <span>Browse Portfolio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Off Market Sourcing */}
              <div className="bg-white rounded-2xl border border-luxury-border p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase">
                    <Compass className="h-3.5 w-3.5" />
                    <span>Private Sourcing</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-primary">Need a Family Home or Flat Elsewhere?</h4>
                  <p className="text-luxury-muted text-xs sm:text-sm font-body leading-relaxed">
                    Our acquisitions team matches families, relocators, and professionals with private landlords across Liverpool, Sefton, and Merseyside before listings are advertised.
                  </p>
                </div>
                <div>
                  <Link
                    href="/property-sourcing"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Request Sourcing Assistance</span>
                    <ArrowRight className="h-4 w-4 text-secondary" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Property Maintenance & Landlord Services */}
              <div className="bg-white rounded-2xl border border-luxury-border p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                    <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                    <span>TKPM Management</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-primary">Are You a Landlord in Liverpool?</h4>
                  <p className="text-luxury-muted text-xs sm:text-sm font-body leading-relaxed">
                    We manage properties from end to end — including regular maintenance, deep cleaning, tenant vetting, and 24/7 call out response.
                  </p>
                </div>
                <div>
                  <Link
                    href="/maintenance"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-primary text-primary hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Explore Landlord Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
