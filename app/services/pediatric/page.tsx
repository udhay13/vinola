import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pediatric Dentistry | Kids Dental Care | Vinola Dental Salem",
  description: "Gentle, child-friendly dental care in Salem — kids check-ups, fluoride treatment, sealants, and habit-breaking appliances.",
};

const treatments = [
  { title: "Kids Dental Check-Up", desc: "Gentle comprehensive exam to monitor tooth development, growth patterns, and overall oral health." },
  { title: "Fluoride Treatment", desc: "Professional fluoride application to strengthen enamel and protect growing teeth from cavities." },
  { title: "Dental Sealants", desc: "Thin protective coatings applied to back teeth grooves to prevent decay in hard-to-clean areas." },
  { title: "Habit-Breaking Appliances", desc: "Devices to gently help children overcome thumb-sucking or tongue-thrusting habits that affect dental development." },
];

const faqs = [
  { q: "When should my child's first dental visit be?", a: "The first visit is recommended within 6 months of the first tooth appearing, or by the child's first birthday." },
  { q: "Are dental X-rays safe for children?", a: "Yes — we use digital X-rays that emit minimal radiation and only take them when clinically necessary." },
  { q: "How do I prepare my child for the dentist?", a: "Talk positively about the visit, use simple fun language, and avoid words like 'hurt' or 'needle'. Our team is specially trained to welcome nervous children." },
  { q: "How often should children see the dentist?", a: "Every 6 months is standard. Children with higher cavity risk may benefit from more frequent visits." },
];

export default function PediatricPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Pediatric Dentistry"
        title="Gentle Care for"
        titleHighlight="Little Smiles"
        subtitle="Child-friendly dental visits designed to build positive memories, prevent early problems, and keep growing teeth healthy."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Pediatric Dentistry" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>What We <span className="text-gradient">Offer for Kids</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: "linear-gradient(180deg, #F472B6, #EC4899)" }} />
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #FFF5FB 0%, #FCE7F3 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Building <span className="text-gradient">Lifelong Habits</span>
          </h2>
          <p className="text-[#6B7280] text-center leading-relaxed mb-8 max-w-2xl mx-auto">Early dental experiences shape a child&apos;s attitude toward oral health for life. We create calm, fun, trust-building visits so your child looks forward to — not dreads — the dentist.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {["Calm, child-friendly communication", "Parent involvement throughout visits", "Preventive coaching for brushing & diet", "Anxiety-reducing, patient-paced care"].map((pt) => (
              <div key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                <CheckCircle className="w-5 h-5 text-[#F472B6] flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Book Kids Appointment <ArrowRight className="w-4 h-4" />
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
