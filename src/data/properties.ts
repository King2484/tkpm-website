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
    id: "prop-liverpool-l30",
    slug: "beautiful-3-bedroom-semi-detached-family-home-in-liverpool-l30",
    title: "Beautiful 3-Bedroom Semi-Detached Family Home",
    tagline: "Quiet cul-de-sac location with private driveway & large secured rear garden",
    type: "rent",
    category: "House",
    price: 1350,
    priceDisplay: "£1,350 pcm",
    location: "Netherton & Orrell, Liverpool L30",
    address: "Bootle, Merseyside L30 1SQ",
    bedrooms: 3,
    bathrooms: 1,
    sqft: 920,
    status: "Newly Listed",
    featured: true,
    heroImage: "/properties/liverpool-l30/img-1.jpg",
    images: [
      "/properties/liverpool-l30/img-1.jpg",
      "/properties/liverpool-l30/img-2.jpg",
      "/properties/liverpool-l30/img-3.jpg",
      "/properties/liverpool-l30/img-4.jpg",
      "/properties/liverpool-l30/img-5.jpg",
      "/properties/liverpool-l30/img-6.jpg",
      "/properties/liverpool-l30/img-7.jpg",
      "/properties/liverpool-l30/img-8.jpg",
      "/properties/liverpool-l30/img-9.jpg"
    ],
    description: [
      "Netherton & Orrell – Quiet Cul-de-Sac Location.",
      "The property opens into a bright living room, leading through to a combined kitchen and dining area. The ground floor is further enhanced by providing additional recreational space in the secured private rear garden.",
      "Upstairs, the property comprises three bedrooms together with a modern, fully-tiled family bathroom suite. The combination of generous living space, three bedrooms, and a private garden makes this an excellent home for both families and working professionals.",
      "Located in Netherton and Orrell, the property occupies a quiet cul-de-sac while remaining conveniently positioned for everyday amenities. Residents can enjoy easy access to supermarkets, independent shops, cafés, and other local facilities. Excellent transport connections provide convenient access to Liverpool city centre and the wider Merseyside area."
    ],
    features: [
      "Private driveway with off-street parking",
      "Secured large rear garden with patio & lawn",
      "Combined modern kitchen and dining area",
      "Contemporary fully-tiled family bathroom suite",
      "Three well-proportioned bedrooms",
      "Efficient gas central heating",
      "Double glazed windows throughout",
      "Modern open living layout",
      "Freshly refurbished and painted throughout",
      "Ideal for families, working professionals & relocators"
    ],
    specs: {
      yearBuilt: 1998,
      epcRating: "C",
      tenure: "Long-Term Tenancy",
      councilTaxBand: "Band B (Sefton)",
      parking: "Private Driveway",
      heating: "Gas Central Heating"
    },
    agent: {
      name: "TKPM Lettings & Management",
      title: "Merseyside Property Desk",
      phone: "074",
      email: "tkpm@mail.com",
      avatar: "/properties/liverpool-l30/img-1.jpg"
    }
  }
];

export function getAllProperties(): Property[] {
  return propertiesData;
}

export function getPropertyById(idOrSlug: string): Property | undefined {
  return propertiesData.find(
    (p) =>
      p.id === idOrSlug ||
      p.slug === idOrSlug ||
      idOrSlug === "liverpool-l30" ||
      idOrSlug === "liverpool-l30-semi-detached" ||
      idOrSlug.includes("liverpool")
  ) || propertiesData[0];
}

export function getSimilarProperties(currentId: string, limit: number = 3): Property[] {
  return propertiesData
    .filter((p) => p.id !== currentId && p.slug !== currentId)
    .slice(0, limit);
}
