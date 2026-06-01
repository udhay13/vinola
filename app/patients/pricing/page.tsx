import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatment Pricing | Vinola Dental Salem",
  description: "Get a personalised treatment cost estimate at Vinola Dental Salem. Contact us or book a consultation — transparent pricing provided after clinical assessment.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Treatment Pricing"
        title="Transparent,"
        titleHighlight="Honest Pricing"
        subtitle="We believe in clear, upfront pricing. Every treatment cost is explained in full after your clinical examination — no hidden charges, no surprises."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "Pricing" }]}
      />

      {/* Why we consult first */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-6"
            style={{ background: "rgba(44,177,188,0.08)" }}>
            Why We Consult First
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Treatment Cost is <span className="text-gradient">Personalised</span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
            At Vinola Dental, every patient&apos;s needs are unique. Treatment costs depend on clinical complexity, your specific condition, and the materials best suited to your case. We believe the most honest approach is to assess you first and then give you a clear, itemised cost — so you can make a fully informed decision.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { emoji: "🔍", title: "Full Assessment", desc: "We examine your teeth, gums, and X-rays to understand your exact needs before quoting." },
              { emoji: "📋", title: "Clear Quote", desc: "You receive a detailed, itemised treatment plan with all costs explained transparently." },
              { emoji: "✅", title: "No Surprises", desc: "Treatments are only carried out after your informed consent — no hidden charges, ever." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-md transition-all text-center">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/patients/appointment"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold text-lg glow-teal-hover transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
            Book a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Payment <span className="text-gradient">Options</span>
            </h2>
            <p className="text-[#6B7280] mt-2">We want dental care to be accessible for everyone.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cash & UPI", desc: "We accept cash, PhonePe, GPay, and all major UPI payment methods.", emoji: "💰" },
              { title: "Debit & Credit Cards", desc: "Visa, Mastercard, and RuPay accepted at the clinic for all treatment payments.", emoji: "💳" },
              { title: "EMI (Invisalign)", desc: "Flexible EMI plans available for Invisalign clear aligner treatment. Ask our front desk for details.", emoji: "📋" },
              { title: "Gmoney Financing", desc: "We offer Gmoney financing to make larger dental treatments affordable and accessible.", emoji: "🏦" },
            ].map(({ title, desc, emoji }) => (
              <div key={title} className="glass rounded-2xl p-6 card-shadow text-center">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Have a <span className="text-gradient">Pricing Question?</span>
          </h2>
          <p className="text-[#6B7280] mb-6">Call us or WhatsApp us and we&apos;ll be happy to give you a rough estimate for your specific concern before you even visit.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:04274972266"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2CB1BC] text-[#2CB1BC] font-semibold hover:bg-[#E6F7F8] transition-all">
              <Phone className="w-4 h-4" /> Call 0427 4972266
            </a>
            <a href="https://wa.me/919443735505"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
