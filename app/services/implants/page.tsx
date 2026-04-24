import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Implants | Vinola Dental Salem",
  description: "Permanent tooth replacement with dental implants in Salem — single implants, full mouth implants, and implant-supported dentures.",
};

const treatments = [
  { title: "Single Tooth Implant", desc: "A titanium post topped with a custom crown to replace one missing tooth with a permanent, stable result." },
  { title: "Multiple Tooth Implants", desc: "Multiple implants placed strategically to replace several missing teeth without impacting neighbouring natural teeth." },
  { title: "Full Mouth Implants", desc: "A complete arch restoration using implants to provide permanent, fixed teeth for patients with extensive tooth loss." },
  { title: "Implant-Supported Dentures", desc: "Dentures anchored onto implants for superior stability compared to conventional removable dentures." },
];

const steps = [
  { step: "01", title: "Assessment & Planning", desc: "Bone density, jaw structure, and spacing are evaluated digitally for precise implant positioning." },
  { step: "02", title: "Implant Placement", desc: "The titanium implant is placed into the jawbone with precision and structured anaesthetic comfort." },
  { step: "03", title: "Healing Phase", desc: "The implant integrates with the bone over 6–12 weeks before the final restoration is attached." },
  { step: "04", title: "Crown Delivery", desc: "A custom-fitted crown is placed to complete the tooth — functional, natural, and long-lasting." },
];

const faqs = [
  { q: "Are dental implants painful?", a: "The placement is done under local anaesthesia. Post-procedure soreness is mild and managed with standard medication." },
  { q: "How long do implants last?", a: "With proper care, implants can last 20 years or more. The crown may need replacement every 10–15 years." },
  { q: "Am I a candidate for implants?", a: "Most adults with healthy gums and sufficient bone density are candidates. We assess this during consultation." },
  { q: "How long is the full process?", a: "From placement to final crown, the complete process typically takes 3–6 months depending on healing." },
];

export default function ImplantsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Implant Dentistry"
        title="Permanent Teeth,"
        titleHighlight="Natural Feel"
        subtitle="Titanium-rooted implants that look, feel, and function like your natural teeth — a lifetime solution for missing teeth."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Implant Dentistry" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Implant <span className="text-gradient">Options</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #10B981, #059669)" }} />
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-12" style={{ fontFamily: "var(--font-poppins)" }}>The Implant <span className="text-gradient">Process</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="glass rounded-2xl p-6 card-shadow text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>{s.step}</div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <ul className="inline-flex flex-col sm:flex-row gap-4 mb-8">
              {["Bone-preserving permanent solution", "No impact on adjacent natural teeth", "Stable bite and natural chewing feel"].map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm text-[#374151]">
                  <CheckCircle className="w-4 h-4 text-[#2CB1BC]" /> {pt}
                </li>
              ))}
            </ul>
            <div className="block">
              <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                Book Implant Consultation <ArrowRight className="w-4 h-4" />
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
