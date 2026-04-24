import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Packages | Vinola Dental Salem",
  description: "Transparent dental treatment pricing at Vinola Dental Salem — treatment cost list, EMI options, and payment plans for all budgets.",
};

const pricingCategories = [
  {
    category: "General Dentistry",
    color: "#2CB1BC",
    treatments: [
      { name: "Dental Check-Up & Consultation", price: "₹200 – ₹500" },
      { name: "Scaling & Polishing", price: "₹800 – ₹1,500" },
      { name: "Dental Filling (Composite)", price: "₹800 – ₹1,500 per tooth" },
      { name: "Tooth Extraction (Simple)", price: "₹500 – ₹1,000" },
      { name: "Tooth Extraction (Surgical)", price: "₹2,000 – ₹5,000" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    color: "#D946EF",
    treatments: [
      { name: "Professional Teeth Whitening", price: "₹4,000 – ₹8,000" },
      { name: "Dental Veneers (per tooth)", price: "₹5,000 – ₹15,000" },
      { name: "Composite Bonding (per tooth)", price: "₹2,000 – ₹5,000" },
      { name: "Smile Design Consultation", price: "₹500 – ₹1,000" },
    ],
  },
  {
    category: "Orthodontics",
    color: "#F59E0B",
    treatments: [
      { name: "Metal Braces (per arch)", price: "₹15,000 – ₹25,000" },
      { name: "Ceramic Braces (per arch)", price: "₹25,000 – ₹40,000" },
      { name: "Clear Aligners (full case)", price: "₹40,000 – ₹1,20,000" },
      { name: "Retainers", price: "₹1,500 – ₹4,000" },
    ],
  },
  {
    category: "Restorative Dentistry",
    color: "#0EA5E9",
    treatments: [
      { name: "Dental Crown (Ceramic/Zirconia)", price: "₹5,000 – ₹15,000" },
      { name: "Dental Bridge (3 units)", price: "₹15,000 – ₹40,000" },
      { name: "Complete Denture (per arch)", price: "₹8,000 – ₹20,000" },
      { name: "Inlay / Onlay", price: "₹4,000 – ₹10,000" },
    ],
  },
  {
    category: "Dental Implants",
    color: "#10B981",
    treatments: [
      { name: "Single Tooth Implant + Crown", price: "₹25,000 – ₹60,000" },
      { name: "Implant Consultation & CBCT", price: "₹500 – ₹2,000" },
      { name: "Full Mouth Implants", price: "Custom quote" },
      { name: "Implant-Supported Denture", price: "₹40,000 – ₹80,000" },
    ],
  },
  {
    category: "Root Canal Treatment",
    color: "#EF4444",
    treatments: [
      { name: "RCT – Front Tooth", price: "₹2,500 – ₹5,000" },
      { name: "RCT – Back Tooth (Molar)", price: "₹4,000 – ₹8,000" },
      { name: "Re-Root Canal Treatment", price: "₹5,000 – ₹10,000" },
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Pricing & Packages"
        title="Transparent,"
        titleHighlight="Honest Pricing"
        subtitle="We believe in clear, upfront pricing so you can make informed decisions about your dental care. All prices are indicative — exact costs are confirmed after examination."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "Pricing" }]}
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-[#2CB1BC]/20 text-sm text-[#6B7280]"
          style={{ background: "rgba(44,177,188,0.06)" }}>
          <Info className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
          <p>Prices listed are indicative ranges. Actual costs depend on clinical complexity, materials selected, and individual treatment needs. A precise quote will be provided after your clinical examination.</p>
        </div>
      </div>

      {/* Pricing Tables */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {pricingCategories.map(({ category, color, treatments }) => (
            <div key={category} className="rounded-2xl border border-gray-100 overflow-hidden card-shadow">
              <div className="px-6 py-4 text-white font-bold" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                {category}
              </div>
              <div className="divide-y divide-gray-50">
                {treatments.map(({ name, price }) => (
                  <div key={name} className="flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-[#374151]">{name}</span>
                    <span className="text-sm font-semibold text-[#1F2937] ml-4 flex-shrink-0">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMI & Payment Options */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Payment <span className="text-gradient">Options</span>
            </h2>
            <p className="text-[#6B7280] mt-2">We want dental care to be accessible for everyone.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Cash & UPI", desc: "We accept cash, PhonePe, GPay, and all major UPI payment methods.", emoji: "💰" },
              { title: "Debit & Credit Cards", desc: "Visa, Mastercard, and RuPay accepted at the clinic for all treatment payments.", emoji: "💳" },
              { title: "EMI Options", desc: "Flexible EMI available for treatments above ₹5,000. Ask our front desk for available plans.", emoji: "📋" },
            ].map(({ title, desc, emoji }) => (
              <div key={title} className="glass rounded-2xl p-6 card-shadow text-center">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-[#6B7280] mb-4">Have questions about pricing for your specific treatment?</p>
            <Link href="/patients/appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
