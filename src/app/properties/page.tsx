"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  SlidersHorizontal, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  ChevronDown,
  X,
  Filter
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { propertiesData, Property } from "@/data/properties";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.08,
    },
  }),
};

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "buy" | "rent">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [minBeds, setMinBeds] = useState<number>(0);
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc">("newest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return propertiesData
      .filter((prop) => {
        // Search query filter
        const matchesSearch =
          searchQuery === "" ||
          prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prop.address.toLowerCase().includes(searchQuery.toLowerCase());

        // Type filter (Buy/Rent)
        const matchesType = typeFilter === "all" || prop.type === typeFilter;

        // Category filter
        const matchesCategory =
          categoryFilter === "all" || prop.category === categoryFilter;

        // Bedrooms filter
        const matchesBeds = minBeds === 0 || prop.bedrooms >= minBeds;

        return matchesSearch && matchesType && matchesCategory && matchesBeds;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return 0; // default newest order
      });
  }, [searchQuery, typeFilter, categoryFilter, minBeds, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setTypeFilter("all");
    setCategoryFilter("all");
    setMinBeds(0);
    setSortBy("newest");
  };

  return (
    <>
      <Navbar />
      <main className="relative flex-1 bg-white text-primary select-none overflow-hidden min-h-screen flex flex-col justify-between pt-28">
        
        {/* Background Decorative Glows */}
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] glow-sphere-gold opacity-50 pointer-events-none" />
        <div className="absolute top-[40%] right-[-15%] w-[700px] h-[700px] glow-sphere-navy opacity-30 pointer-events-none" />

        {/* Hero Section */}
        <section className="relative w-full pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-3 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold uppercase tracking-wider text-secondary"
              >
                <Building2 className="h-3.5 w-3.5" />
                <span>Property Portfolio</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight"
              >
                Available <span className="text-secondary">Properties</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-luxury-muted text-sm sm:text-base font-body leading-relaxed"
              >
                Explore our selection of London flats, townhouses, and family homes available for sale and tenancy.
              </motion.p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/property-sourcing"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-gold-glow"
              >
                <span>Bespoke Sourcing Desk</span>
                <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Interactive Filter & Search Bar */}
          <div className="mt-8 bg-luxury-alt border border-luxury-border/80 rounded-2xl p-4 sm:p-6 shadow-luxury-soft">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Keyword Search */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, neighborhood, or property name..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs sm:text-sm font-semibold transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Type Switcher Tabs (All / Sale / Rent) */}
              <div className="md:col-span-4 flex items-center bg-white p-1 rounded-xl border border-luxury-border shadow-sm">
                {[
                  { key: "all", label: "All Properties" },
                  { key: "buy", label: "For Sale" },
                  { key: "rent", label: "For Rent" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setTypeFilter(tab.key as any)}
                    className={`flex-1 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-all ${
                      typeFilter === tab.key
                        ? "bg-primary text-white shadow-md"
                        : "text-luxury-muted hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Quick Filters Toggle (Mobile) / Category Dropdown (Desktop) */}
              <div className="md:col-span-3 flex items-center gap-2">
                <div className="relative flex-1 hidden sm:block">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    aria-label="Filter by property category"
                    className="w-full appearance-none px-4 py-3 rounded-xl bg-white border border-luxury-border focus:outline-none focus:border-secondary text-xs font-bold uppercase tracking-wider text-slate-700 cursor-pointer shadow-sm pr-8"
                  >
                    <option value="all">All Categories</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Estate">Estate</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>

                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-luxury-border font-bold text-xs uppercase tracking-wider text-primary shadow-sm w-full"
                >
                  <SlidersHorizontal className="h-4 w-4 text-secondary" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Expanded Secondary Filters Bar (Desktop) */}
            <div className="mt-4 pt-4 border-t border-slate-200/60 hidden sm:flex items-center justify-between gap-4 text-xs font-medium text-luxury-muted">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">Bedrooms:</span>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setMinBeds(num)}
                        className={`h-7 px-2.5 rounded-md font-bold text-xs transition-all ${
                          minBeds === num
                            ? "bg-secondary text-white shadow-sm"
                            : "bg-white border border-slate-200 text-slate-600 hover:border-secondary"
                        }`}
                      >
                        {num === 0 ? "Any" : `${num}+`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700 uppercase tracking-wider">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort properties by"
                  className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:border-secondary cursor-pointer"
                >
                  <option value="newest">Featured & Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>

                {(searchQuery || typeFilter !== "all" || categoryFilter !== "all" || minBeds !== 0) && (
                  <button
                    onClick={handleResetFilters}
                    className="ml-2 text-xs font-bold text-secondary hover:text-secondary-hover underline"
                  >
                    Reset All
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="sm:hidden mt-4 pt-4 border-t border-slate-200 space-y-4 overflow-hidden"
                >
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-700 tracking-wider block mb-2">Category</label>
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      aria-label="Filter by category"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-luxury-border text-xs font-bold"
                    >
                      <option value="all">All Categories</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Estate">Estate</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-700 tracking-wider block mb-2">Min Bedrooms</label>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          onClick={() => setMinBeds(num)}
                          className={`flex-1 py-2 rounded-lg text-xs font-bold ${
                            minBeds === num ? "bg-secondary text-white" : "bg-white border border-slate-200"
                          }`}
                        >
                          {num === 0 ? "Any" : `${num}+`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={handleResetFilters}
                      className="text-xs font-bold text-secondary underline"
                    >
                      Reset Filters
                    </button>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold"
                    >
                      Apply Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Property Grid Results Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          
          {/* Results Count Header */}
          <div className="flex items-center justify-between pb-6">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? "Property" : "Properties"}
            </span>
          </div>

          {/* Grid Container */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl border border-luxury-border/80 overflow-hidden shadow-luxury-soft hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Property Image & Status Badges */}
                    <div className="relative aspect-[1.4/1] w-full overflow-hidden bg-slate-100">
                      <img
                        src={property.heroImage}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm ${
                          property.type === "buy" ? "bg-primary" : "bg-emerald-700"
                        }`}>
                          {property.type === "buy" ? "For Sale" : "For Rent"}
                        </span>
                        {property.status === "Featured" && (
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider text-primary bg-secondary shadow-sm flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Price Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                        <span className="font-heading font-extrabold text-2xl tracking-tight text-white drop-shadow-md">
                          {property.priceDisplay}
                        </span>
                        <span className="text-[10px] font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded text-white border border-white/30">
                          {property.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-secondary text-xs font-semibold">
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{property.location}</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-primary mt-1 line-clamp-1 group-hover:text-secondary transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-luxury-muted text-xs line-clamp-2 mt-1 font-body">
                          {property.tagline}
                        </p>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-luxury-alt border border-slate-100 text-slate-700 text-xs font-semibold">
                        <div className="flex items-center gap-1.5">
                          <Bed className="h-4 w-4 text-secondary shrink-0" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath className="h-4 w-4 text-secondary shrink-0" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Maximize2 className="h-4 w-4 text-secondary shrink-0" />
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={`/properties/${property.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 hover:bg-primary text-primary hover:text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 group/btn"
                    >
                      <span>View Residence</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center space-y-4 max-w-md mx-auto">
              <div className="h-16 w-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">No Matching Properties</h3>
              <p className="text-luxury-muted text-xs leading-relaxed font-body">
                We couldn&apos;t find any properties matching your current search parameters. Try adjusting your filters or use our bespoke sourcing service.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-xs uppercase tracking-wider shadow"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>

        {/* Off-Market Sourcing CTA Banner */}
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-[#0f2438] to-primary text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-extrabold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                Off-Market Acquisition Desk
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Searching for Something Unlisted?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-body max-w-2xl leading-relaxed">
                Over 40% of prime London transactions occur off-market. Our acquisitions team accesses private landlord registries and unlisted estate portfolios tailored to your criteria.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/property-sourcing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105"
              >
                <span>Launch Off-Market Search</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
