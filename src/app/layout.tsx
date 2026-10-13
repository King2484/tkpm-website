import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TKPM | Premium Property Maintenance & Renovations",
  description: "TKPM provides luxury-tier services across property maintenance, renovations, landscaping, cleaning, and professional property care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-luxury-bg text-luxury-text font-body selection:bg-primary/20 selection:text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
