import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Orthodontics | Braces & Aligners | Vinola Dental Salem",
  description: "Orthodontic treatment in Salem — metal braces, ceramic braces, Invisalign aligners, and retainers by Dr. Vinola Duraisamy.",
};

const treatments = [
  { title: "Metal Braces", desc: "The most durable orthodontic option — ideal for complex cases requiring precise tooth movement." },
  { title: "Ceramic Braces", desc: "Tooth-coloured brackets that blend with your smile for a more discreet alignment journey." },
  { title: "Invisalign / Clear Aligners", desc: "Removable, transparent aligners custom-made to straighten teeth without metal wires." },
  { title: "Retainers", desc: "Post-treatment retainers to preserve alignment and protect your results long-term." },
];
const faqs = [
  { q: "At what age should orthodontic treatment begin?", a: "Orthodontic evaluation is recommended around age 7, though treatment can be effective at any age." },
  { q: "How long does orthodontic treatment take?", a: "Most treatments last 6–24 months depending on the complexity of alignment required." },
  { q: "Are clear aligners as effective as braces?", a: "For mild to moderate cases, aligners are equally effective. Severe misalignments may still benefit from conventional braces." },
  { q: "Does wearing braces hurt?", a: "There may be mild soreness after adjustments, which settles within a few days. We monitor comfort at every review." },
];

export default function OrthodonticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Orthodontics"
        title="Aligned Teeth,"
        titleHighlight="Confident Smile"
        subtitle="From braces to clear aligners — a personalized orthodontic journey designed for your alignment goals, lifestyle, and comfort."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Orthodontics" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Orthodontic <span className="text-gradient">Options</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #2CB1BC, #1F8A94)" }} />
                <h3 className="font-semibold text-[#1F2937] text-lg mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
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
              <h2 className="text-3xl font-bold text-[#1F2937] mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
                More Than <span className="text-gradient">Straighter Teeth</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-5">Proper alignment improves your bite, reduces uneven wear, makes cleaning easier, and contributes to long-term dental health — not just aesthetics.</p>
              <ul className="space-y-3 mb-8">
                {["Phased treatment with trackable progress", "Comfort-focused adjustment visits", "Options for children, teens, and adults", "Clear retention plan after completion"].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                Book Orthodontic Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "6–18", l: "Months avg. treatment" }, { v: "All Ages", l: "Patients we treat" }, { v: "Phased", l: "Treatment planning" }, { v: "Review-led", l: "Progress tracking" }].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-5 card-shadow text-center">
                  <div className="text-2xl font-bold text-[#2CB1BC] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>{s.v}</div>
                  <div className="text-xs text-[#6B7280]">{s.l}</div>
                </div>
              ))}
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
