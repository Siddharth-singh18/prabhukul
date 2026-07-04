import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prabhukul | Premium Indian Ayurveda & Wellness",
    template: "%s | Prabhukul"
  },
  description:
    "Authentic Indian Ayurveda rituals for skin, hair and wellness. Premium botanicals, elegant formulation and modern Indian heritage.",
  metadataBase: new URL("https://prabhukul.example"),
  openGraph: {
    title: "Prabhukul",
    description: "Premium Indian Ayurveda and wellness rituals.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
