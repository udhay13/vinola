import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight, Sparkles, Star, Sun, Wand2, Eye, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | Vinola Dental Salem",
  description:
    "Transform your smile with cosmetic dentistry in Salem — teeth whitening, veneers, smile design, composite bonding, and tooth reshaping by Dr. Vinola.",
};

const treatments = [
  { icon: Sun, title: "Teeth Whitening", desc: "Professional in-clinic whitening that lightens discolouration safely for a brighter, more confident smile." },
  { icon: Sparkles, title: "Smile Design", desc: "A personalized aesthetic plan using digital planning tools to create your ideal smile shape and shade." },
  { icon: Layers, title: "Dental Veneers", desc: "Ultra-thin porcelain or composite veneers that resurface chipped, stained, or uneven teeth beautifully." },
  { icon: Wand2, title: "Composite Bonding", desc: "Tooth-coloured resin applied to fix chips, gaps, and discolouration in a single appointment." },
  { icon: Eye, title: "Tooth Reshaping", desc: "Subtle enamel contouring to harmonize tooth shape, proportion, and smile line balance." },
  { icon: Star, title: "Full Smile Makeover", desc: "A comprehensive combination of cosmetic treatments planned to transform your entire smile." },
];

const faqs = [
  { q: "How long does teeth whitening last?", a: "Professional whitening lasts 6–12 months on average. Results can be extended with good oral hygiene and a touch-up kit." },
  { q: "Are veneers permanent?", a: "Veneers are a long-term solution lasting 10–15 years with proper care. The tooth preparation is irreversible, so we discuss it thoroughly before proceeding." },
  { q: "Does composite bonding look natural?", a: "Yes — we colour-match the resin precisely to your tooth shade so it blends seamlessly with neighbouring teeth." },
  { q: "Can I whiten my teeth if I have crowns or veneers?", a: "Whitening only affects natural teeth. We assess your existing restorations and discuss the best cosmetic approach for a uniform result." },
];

export default function CosmeticDentistryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Cosmetic Dentistry"
        title="Your Dream Smile,"
        titleHighlight="Beautifully Designed"
        subtitle="Safe, clinically proven cosmetic treatments tailored to your facial features and smile goals — delivering results that look natural and radiant."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Cosmetic Dentistry" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Cosmetic <span className="text-gradient">Treatments</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(217,70,239,0.08)" }}>
                  <Icon className="w-5 h-5 text-[#D946EF]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                A Smile That Looks <span className="text-gradient">Like You</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Our cosmetic approach is guided by facial harmony, not just tooth aesthetics. Every treatment is designed to enhance your natural features while ensuring the result feels genuinely yours.
              </p>
              <ul className="space-y-3">
                {["Personalized design based on your face shape and lips", "Natural shade selection for believable results", "Evidence-based techniques for lasting aesthetics", "Detailed consultation before any procedure begins"].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/patients/appointment" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                Book Smile Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="glass rounded-3xl p-8 card-shadow text-center">
              <div className="text-5xl mb-3">✨</div>
              <div className="text-xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Before & After Results</div>
              <p className="text-sm text-[#6B7280] mb-4">See real smile transformations achieved at Vinola Dental.</p>
              <Link href="/patients/gallery" className="text-[#2CB1BC] text-sm font-medium hover:underline">
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-10" style={{ fontFamily: "var(--font-poppins)" }}>
            Common <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1F2937] hover:text-[#2CB1BC] transition-colors list-none">
                  {faq.q}
                  <span className="text-[#2CB1BC] text-xl font-light ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
