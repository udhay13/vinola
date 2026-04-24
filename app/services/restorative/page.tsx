import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Restorative Dentistry | Crowns, Bridges & Dentures | Vinola Dental Salem",
  description: "Restorative dental treatments in Salem — dental crowns, bridges, dentures, and inlays/onlays to restore function and aesthetics.",
};

const treatments = [
  { title: "Dental Crowns", desc: "Custom ceramic caps that restore the strength, shape, and appearance of damaged or weakened teeth." },
  { title: "Dental Bridges", desc: "Fixed prosthetics that bridge the gap of missing teeth using adjacent teeth as anchors." },
  { title: "Complete Dentures", desc: "Full-arch removable dentures crafted for comfort, natural appearance, and stable everyday function." },
  { title: "Partial Dentures", desc: "Removable dental appliances that replace multiple missing teeth while preserving existing natural teeth." },
  { title: "Inlays", desc: "Custom-fitted restorations placed within the cusps of a tooth to repair moderate cavities or damage." },
  { title: "Onlays", desc: "Larger restorations covering one or more tooth cusps — an alternative to a full crown when structure allows." },
];

const faqs = [
  { q: "How long do dental crowns last?", a: "With proper care, crowns typically last 10–15 years or longer. Good oral hygiene and regular check-ups are key." },
  { q: "Is a bridge better than an implant?", a: "Both are effective solutions. Bridges are fixed and faster to place; implants preserve more bone. We discuss both options based on your clinical needs." },
  { q: "Are dentures comfortable?", a: "Modern dentures are designed for comfort. An adjustment period of a few weeks is normal, and we provide follow-up refinements." },
  { q: "When are inlays or onlays used instead of fillings?", a: "When tooth damage is too large for a standard filling but not extensive enough for a crown, inlays or onlays offer a precise mid-range solution." },
];

export default function RestorativePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Restorative Dentistry"
        title="Restore Function."
        titleHighlight="Renew Confidence."
        subtitle="Precision restorations using high-quality materials to bring damaged and missing teeth back to full function and natural beauty."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Restorative Dentistry" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Restorative <span className="text-gradient">Solutions</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #0EA5E9, #0284C7)" }} />
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-5" style={{ fontFamily: "var(--font-poppins)" }}>Why <span className="text-gradient">Restore Early</span>?</h2>
          <p className="text-[#6B7280] leading-relaxed mb-8 max-w-2xl mx-auto">Missing or damaged teeth affect chewing, speech, and bite balance. The longer they remain untreated, the more the surrounding teeth shift. Timely restoration protects your whole smile.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            {["Improved chewing comfort and bite stability", "Prevention of remaining teeth from shifting", "Restored facial profile and appearance", "Increased confidence in daily social interactions"].map((pt) => (
              <div key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
            Book a Restorative Consultation <ArrowRight className="w-4 h-4" />
          </Link>
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
