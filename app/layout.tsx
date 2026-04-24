import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinola Dental | Advanced Dental Care in Salem",
  description:
    "Transform your smile with confidence at Vinola Dental. Expert dental care by Dr. Vinola Duraisamy — combining precision, comfort, and the latest dental technology in Salem.",
  keywords:
    "dental clinic Salem, dentist Salem Tamil Nadu, cosmetic dentistry, dental implants, orthodontics, Vinola Dental, Dr Vinola Duraisamy",
  openGraph: {
    title: "Vinola Dental | Advanced Dental Care",
    description:
      "Premium dental care by Dr. Vinola Duraisamy in Salem. Book your appointment today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body
        className={inter.className}
        style={{ fontFamily: "var(--font-inter), var(--font-poppins), sans-serif" }}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
