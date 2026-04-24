import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Periodontics | Gum Disease Treatment | Vinola Dental Salem",
  description: "Advanced gum disease treatment in Salem — deep cleaning, laser gum therapy, and periodontal care by Dr. Vinola Duraisamy.",
};

const treatments = [
  { title: "Gum Disease Treatment", desc: "Targeted treatment for gingivitis and periodontitis using deep cleaning, antimicrobial therapy, and regular monitoring." },
  { title: "Deep Cleaning (SRP)", desc: "Scaling and root planing to remove subgingival plaque and calculus — the cornerstone of periodontal treatment." },
  { title: "Laser Gum Therapy", desc: "Minimally invasive laser treatment to remove infected gum tissue and promote healthier gum reattachment." },
];

const signs = ["Bleeding gums when brushing", "Swollen or red gum tissue", "Persistent bad breath", "Loose or shifting teeth", "Gum recession exposing tooth roots", "Pain while chewing"];

const faqs = [
  { q: "What is the difference between gingivitis and periodontitis?", a: "Gingivitis is inflammation confined to the gums and is reversible with treatment. Periodontitis is advanced gum disease affecting the bone and requires more intensive management." },
  { q: "Is gum disease treatable?", a: "Yes — early-stage gum disease (gingivitis) is fully reversible. Advanced periodontitis can be managed effectively with professional treatment and good home care." },
  { q: "How many sittings does deep cleaning take?", a: "Most patients require 2–4 sittings for a full-mouth deep clean, typically treating one or two quadrants per session." },
  { q: "Can gum disease affect my overall health?", a: "Yes — research links untreated gum disease to heart disease, diabetes, and respiratory conditions. Treating it supports whole-body health." },
];

export default function PeriodonticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Periodontics"
        title="Healthy Gums,"
        titleHighlight="Stronger Foundation"
        subtitle="Your gums are the foundation of your smile. Expert periodontal care to prevent, treat, and maintain healthy gum tissue."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Periodontics" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Periodontal <span className="text-gradient">Treatments</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #2CB1BC, #1F8A94)" }} />
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-5" style={{ fontFamily: "var(--font-poppins)" }}>Warning <span className="text-gradient">Signs of Gum Disease</span></h2>
              <div className="grid grid-cols-2 gap-3">
                {signs.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm text-[#374151]">
                    <CheckCircle className="w-4 h-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-shadow">
              <h3 className="font-bold text-[#1F2937] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Get Assessed Today</h3>
              <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">If you notice any of these signs, early treatment makes a significant difference. Book a periodontal assessment and we will create a clear treatment plan.</p>
              <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold glow-teal-hover transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                Book Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-10" style={{ fontFamily: "var(--font-poppins)" }}>Common <span className="text-gradient">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1F2937] hover:text-[#2CB1BC] transition-colors list-none">
                  {faq.q}<span className="text-[#2CB1BC] text-xl font-light ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
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
