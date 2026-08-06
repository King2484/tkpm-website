export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  type: "buy" | "rent";
  category: "Apartment" | "Townhouse" | "Flat" | "Estate" | "House";
  price: number;
  priceDisplay: string;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: "Available" | "Under Contract" | "Newly Listed" | "Featured";
  featured: boolean;
  heroImage: string;
  images: string[];
  description: string[];
  features: string[];
  specs: {
    yearBuilt: number;
    epcRating: string;
    tenure: string;
    councilTaxBand: string;
    parking: string;
    heating: string;
  };
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    avatar: string;
  };
}

export const propertiesData: Property[] = [
  {
    id: "prop-1",
    slug: "kensington-flat",
    title: "Kensington High Street Flat",
    tagline: "Spacious top-floor flat in red-brick building",
    type: "buy",
    category: "Flat",
    price: 450000,
    priceDisplay: "£450,000",
    location: "Kensington, London",
    address: "Kensington High Street, London W8",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 750,
    status: "Featured",
    featured: true,
    heroImage: "/uk-brick-flats.png",
    images: [
      "/uk-brick-flats.png",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: [
      "Situated on Kensington High Street, this top-floor 2-bedroom flat is set within a traditional UK red-brick building.",
      "Features a fitted kitchen with integrated appliances, a comfortable double reception room, and a tiled bathroom. Conveniently located near local transport and shops."
    ],
    features: [
      "Red-Brick Residential Building",
      "Fitted Kitchen with Appliances",
      "Resident Intercom Entry",
      "Gas Central Heating",
      "Double Glazed UPVC Windows",
      "Near Underground Stations"
    ],
    specs: {
      yearBuilt: 1998,
      epcRating: "C",
      tenure: "Leasehold (110 yrs)",
      councilTaxBand: "Band D",
      parking: "Resident Street Permit",
      heating: "Gas Central Heating"
    },
    agent: {
      name: "Marcus Vance",
      title: "Senior Property Manager",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "prop-2",
    slug: "belgravia-townhouse",
    title: "Belgravia Terraced House",
    tagline: "Classic Victorian red-brick terraced house with garden",
    type: "buy",
    category: "Townhouse",
    price: 675000,
    priceDisplay: "£675,000",
    location: "Belgravia, London",
    address: "Eaton Terrace, Belgravia, London SW1",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1250,
    status: "Newly Listed",
    featured: true,
    heroImage: "/uk-terraced-house.png",
    images: [
      "/uk-terraced-house.png",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: [
      "A well-maintained 3-bedroom Victorian red-brick terraced house located on a quiet residential street in Belgravia.",
      "Includes a bright reception room, fitted kitchen leading directly to a private rear garden, three bedrooms, and family bathroom."
    ],
    features: [
      "Traditional UK Red-Brick Construction",
      "Private Rear Garden",
      "Fitted Kitchen & Dining Area",
      "Sash Windows & High Ceilings",
      "Resident Permit Parking",
      "Near Public Transport Links"
    ],
    specs: {
      yearBuilt: 1910,
      epcRating: "C",
      tenure: "Freehold",
      councilTaxBand: "Band E",
      parking: "On-Street Permit",
      heating: "Gas Radiators"
    },
    agent: {
      name: "Eleanor Croft",
      title: "Property Sourcing Manager",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "prop-3",
    slug: "mayfair-apartment",
    title: "Mount Street Two Bed Flat",
    tagline: "Unfurnished 2-bedroom flat in red-brick block",
    type: "rent",
    category: "Flat",
    price: 1850,
    priceDisplay: "£1,850/mo",
    location: "Mayfair, London",
    address: "Mount Street, Mayfair, London W1K",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 680,
    status: "Available",
    featured: false,
    heroImage: "/uk-brick-flats.png",
    images: [
      "/uk-brick-flats.png",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80"
    ],
    description: [
      "A clean 2-bedroom rental flat situated on Mount Street. Set inside a purpose-built UK red-brick building.",
      "Features a bright living area, modern kitchen, main bedroom, small second bedroom/study, and shower room."
    ],
    features: [
      "Purpose-Built UK Red-Brick Block",
      "Fitted Kitchen with Appliances",
      "Secure Building Entrance",
      "Gas Central Heating",
      "Close to Shops & Amenities"
    ],
    specs: {
      yearBuilt: 2005,
      epcRating: "C",
      tenure: "Tenancy Agreement",
      councilTaxBand: "Band D",
      parking: "On-Street Permit",
      heating: "Central Gas Heating"
    },
    agent: {
      name: "Marcus Vance",
      title: "Senior Property Manager",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "prop-4",
    slug: "chelsea-flat",
    title: "Chelsea 2 Bed Apartment",
    tagline: "Practical 2-bedroom flat with communal garden access",
    type: "buy",
    category: "Flat",
    price: 520000,
    priceDisplay: "£520,000",
    location: "Chelsea, London",
    address: "Chelsea Harbour Drive, London SW10",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 800,
    status: "Available",
    featured: false,
    heroImage: "/uk-suburban-home.png",
    images: [
      "/uk-suburban-home.png",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ],
    description: [
      "Located in Chelsea, this 2-bedroom flat offers functional residential space set in a traditional British brick residential court.",
      "Includes a reception room, fitted kitchen, main double bedroom, second bedroom, and bathroom."
    ],
    features: [
      "Communal Lawn & Garden Access",
      "Allocated Parking Space",
      "Building Entrance Intercom",
      "Gas Central Heating",
      "Near Imperial Wharf Station"
    ],
    specs: {
      yearBuilt: 2000,
      epcRating: "C",
      tenure: "Leasehold (99 yrs)",
      councilTaxBand: "Band D",
      parking: "1 Allocated Space",
      heating: "Gas Central Heating"
    },
    agent: {
      name: "Eleanor Croft",
      title: "Property Sourcing Manager",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "prop-5",
    slug: "knightsbridge-flat",
    title: "Knightsbridge 2 Bed Flat",
    tagline: "Clean 2-bedroom rental flat near local amenities",
    type: "rent",
    category: "Flat",
    price: 1950,
    priceDisplay: "£1,950/mo",
    location: "Knightsbridge, London",
    address: "Hans Place, Knightsbridge, London SW1X",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 720,
    status: "Newly Listed",
    featured: true,
    heroImage: "/uk-terraced-house.png",
    images: [
      "/uk-terraced-house.png",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: [
      "A bright 2-bedroom flat situated on Hans Place in Knightsbridge inside a traditional red-brick terrace.",
      "Offers a living room, fitted kitchen, master bedroom, second single bedroom, and family shower room."
    ],
    features: [
      "Red-Brick Victorian Terrace",
      "Intercom Entrance",
      "Fitted Kitchen with Appliances",
      "Gas Central Heating",
      "Short Walk to Tube Station"
    ],
    specs: {
      yearBuilt: 1985,
      epcRating: "C",
      tenure: "Tenancy Agreement",
      councilTaxBand: "Band E",
      parking: "Permit Parking Available",
      heating: "Gas Central Heating"
    },
    agent: {
      name: "Marcus Vance",
      title: "Senior Property Manager",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: "prop-6",
    slug: "richmond-semi-detached",
    title: "Richmond Semi-Detached House",
    tagline: "Typical 3-bedroom UK red-brick family home with driveway and garden",
    type: "buy",
    category: "House",
    price: 495000,
    priceDisplay: "£495,000",
    location: "Richmond, London",
    address: "Richmond Hill, Richmond, TW10",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1150,
    status: "Available",
    featured: true,
    heroImage: "/uk-semi-detached.png",
    images: [
      "/uk-semi-detached.png",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: [
      "A typical UK 3-bedroom red-brick semi-detached family house on Richmond Hill featuring a driveway and private rear lawn garden.",
      "Features a lounge/diner, fitted kitchen, three bedrooms, family bathroom, garage, and off-street parking."
    ],
    features: [
      "Typical UK Red-Brick Semi-Detached House",
      "Private Rear Lawn Garden",
      "Driveway & Garage",
      "Lounge & Dining Area",
      "Close to Schools & Local Parks",
      "Freehold Property"
    ],
    specs: {
      yearBuilt: 1995,
      epcRating: "C",
      tenure: "Freehold",
      councilTaxBand: "Band D",
      parking: "Driveway & Single Garage",
      heating: "Gas Central Heating"
    },
    agent: {
      name: "Eleanor Croft",
      title: "Property Sourcing Manager",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  }
];

export function getAllProperties(): Property[] {
  return propertiesData;
}

export function getPropertyById(idOrSlug: string): Property | undefined {
  return propertiesData.find(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );
}

export function getSimilarProperties(currentId: string, limit: number = 3): Property[] {
  return propertiesData
    .filter((p) => p.id !== currentId && p.slug !== currentId)
    .slice(0, limit);
}
