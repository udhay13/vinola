import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Endodontics | Root Canal Treatment | Vinola Dental Salem",
  description: "Expert root canal treatment in Salem — RCT, re-treatment, and apicoectomy by Dr. Vinola Duraisamy with a calm, pain-managed approach.",
};

const treatments = [
  { title: "Root Canal Treatment (RCT)", desc: "Removal of infected pulp, thorough canal cleaning, and sealing to save the natural tooth from extraction." },
  { title: "Re-Root Canal Treatment (Re-RCT)", desc: "Retreatment of a previously root-canal-treated tooth where infection has recurred or initial treatment was incomplete." },
  { title: "Apicoectomy", desc: "A minor surgical procedure removing the tip of a tooth root when conventional RCT alone cannot resolve periapical infection." },
];

const faqs = [
  { q: "Is root canal treatment painful?", a: "Modern RCT is performed under local anaesthesia and is generally no more uncomfortable than a filling. Most patients feel significant relief after treatment." },
  { q: "How many sittings does RCT take?", a: "Most root canal treatments are completed in 1–2 sittings depending on infection severity and canal complexity." },
  { q: "What happens if I don't get RCT?", a: "Untreated infection can spread to surrounding bone and other teeth, often leading to the need for extraction." },
  { q: "Do I need a crown after RCT?", a: "In most cases, a crown is recommended after RCT to protect and strengthen the treated tooth long-term." },
];

export default function EndodonticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Endodontics"
        title="Save Your Tooth."
        titleHighlight="End the Pain."
        subtitle="Calm, precise root canal treatments designed to relieve pain, clear infection, and preserve your natural teeth."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Endodontics" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Endodontic <span className="text-gradient">Treatments</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #EF4444, #DC2626)" }} />
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-5" style={{ fontFamily: "var(--font-poppins)" }}>Our <span className="text-gradient">Comfort-First</span> Approach</h2>
          <p className="text-[#6B7280] leading-relaxed mb-8 max-w-2xl mx-auto">Root canal treatment has an undeserved reputation for being scary. At Vinola Dental, we use a calm, structured approach that prioritizes your comfort from the moment you sit in the chair.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            {["Anaesthetic comfort confirmed before starting", "Step-by-step explanation of every stage", "Precision cleaning to preserve natural tooth", "Structured follow-up and restoration plan"].map((pt) => (
              <div key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
            Book RCT Consultation <ArrowRight className="w-4 h-4" />
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
