import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Oral Surgery | Wisdom Tooth Removal | Vinola Dental Salem",
  description: "Oral surgery in Salem — wisdom tooth removal, minor oral surgeries, and biopsy by Dr. Vinola Duraisamy with structured anaesthetic comfort.",
};

const treatments = [
  { title: "Wisdom Tooth Removal", desc: "Safe extraction of impacted or problematic third molars using structured anaesthetic comfort and clear aftercare." },
  { title: "Minor Oral Surgeries", desc: "Procedures such as frenectomy, cyst removal, and surgical extractions performed with precision and care." },
  { title: "Oral Biopsy", desc: "Tissue sampling from suspicious lesions for pathology evaluation and early diagnosis of oral conditions." },
];

const faqs = [
  { q: "Is wisdom tooth removal always necessary?", a: "Not always. We extract wisdom teeth only when they are impacted, causing pain, damaging adjacent teeth, or leading to repeated infection." },
  { q: "What is recovery like after wisdom tooth extraction?", a: "Most patients recover within 3–5 days. We provide detailed aftercare instructions including diet, pain management, and warning signs to watch out for." },
  { q: "Is oral surgery done under general anaesthesia?", a: "Most minor oral surgeries at our clinic are performed under local anaesthesia. General anaesthesia is arranged at a hospital setting if required." },
  { q: "How do I know if an oral lesion needs a biopsy?", a: "Any white or red patch, ulcer that doesn't heal in 2 weeks, unexplained swelling, or numbness should be evaluated. We assess and advise whether a biopsy is warranted." },
];

export default function OralSurgeryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Oral Surgery"
        title="Precision Care"
        titleHighlight="When It Matters Most"
        subtitle="Structured, calm surgical care for wisdom teeth, minor oral procedures, and diagnostic biopsies — with clear guidance every step of the way."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Oral Surgery" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Oral Surgery <span className="text-gradient">Procedures</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #6366F1, #4F46E5)" }} />
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-6" style={{ fontFamily: "var(--font-poppins)" }}>Our <span className="text-gradient">Surgical Approach</span></h2>
          <p className="text-[#6B7280] text-center leading-relaxed mb-8 max-w-2xl mx-auto">We believe surgery should feel manageable, not frightening. Our approach centers on clear communication, structured pain control, and detailed aftercare guidance.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {["Full assessment and X-ray review before any surgery", "Step-by-step explanation of what each step involves", "Structured anaesthetic protocol for comfort", "Detailed written aftercare instructions provided"].map((pt) => (
              <div key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Book Surgical Consultation <ArrowRight className="w-4 h-4" />
            </Link>
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
